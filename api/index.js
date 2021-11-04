const express = require('express');
const bodyparser = require('body-parser');

const app = express();

app.use(bodyparser.json());

app.get('/teste', (req, res) => {
    res.status(200).send({mensagem: 'Hellaaaaw daawwwg!'});
});

const port = 3000;
app.listen(port, () => {
    console.log(`Server running on port ${port}`)
})

module.exports = app;
