import fs from "fs";
import express from 'express';

const host = '127.0.0.1';

const port = 8080;

const app = express();

app.get('/rating.json', function (req, res) {
    const content = fs.readFileSync('./backend/rating.json', 'utf-8');

    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000')
        .status(200)
        .type('application/json')
        .send(content);
});

app.listen(port, host, function () {
    console.log(`Server listens http://${host}:${port}`)
});
