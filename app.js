const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => res.send('Hello LOPE,这是一个全流程测试。'));

app.listen(port);
console.log(`App running on http://localhost:${port}`);
