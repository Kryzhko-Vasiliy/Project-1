import tippy from "tippy.js";


tippy('[data-tippy-content]', {
    position: 'top',
    animation: 'shift-away',
    duration: 300,
    arrow: true,
});

















// $(document).ready(function () {
//     const DATA_ATTR = 'data-tippy-content';

//     $(`[${DATA_ATTR}]`).mousemove(function (event) {
//         const value = $(this).attr(DATA_ATTR);
//         const element = $('div').addClass('tooltip')
//             .text(value)
//             .css({ 
//                 "top" : event.pageY + 5,
//                 "left" : event.pageX + 5
//             })
//             .show();
        
//         $(document).add(element);
        
//         event.target.mouseout(function () {
//             element.hide();
//         });
//     });
// });