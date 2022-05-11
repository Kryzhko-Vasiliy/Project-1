function FormQuantity(el) {
  const {
    minValue,
    maxValue,
    prependText,
    appendText
  } = el.dataset;

  el.value = 0;

  const inputEl = el.querySelector('input');
  const lessBtnEl = el.querySelector('.btn-decrease');
  const moreBtnEl = el.querySelector('.btn-increase');
  
  lessBtnEl.addEventListener('click', onClickLess);
  moreBtnEl.addEventListener('click', onClickMore);
  
  update();
  
  return {
    value: el.value,
  }

  function onClickLess() {
    el.value--;
    if (minValue != undefined && el.value < minValue) el.value = minValue;
    update();
  }
  
  function onClickMore() {
    el.value++;
    if (maxValue != undefined && el.value > maxValue) el.value = maxValue;
    update();
  }
  
  function update() {
    if (minValue != undefined && el.value == minValue) {
      lessBtnEl.setAttribute('disabled', true);  
    } else {
      lessBtnEl.removeAttribute('disabled');  
    }
    
    if (maxValue != undefined && el.value == maxValue) {
      moreBtnEl.setAttribute('disabled', true);  
    } else {
      moreBtnEl.removeAttribute('disabled');  
    }
    
    inputEl.value = `${prependText ? `${prependText} ` : ''}${el.value}${appendText ? ` ${appendText}` : ''}`;
  }
}

document.querySelectorAll('.form-quantity').forEach(el => new FormQuantity(el));