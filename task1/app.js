const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs');

// Serve your index.html file
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

// app.post('/submit-form', (req, res) => {
//     const { name, email } = req.body;
//     console.log(`Testing................`)
//     console.log(`${name}, ${email}`);
// })

app.post('/submit-form', (req, res) => {
    const { name, email } = req.body;
    res.render('submission', { name });
});



app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
