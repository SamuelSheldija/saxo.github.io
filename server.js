const express = require('express');
const fs = require('fs');
const app = express();
const port = 3000;

app.use(express.json());

app.post('/submit', (req, res) => {
    const cardData = req.body;
    
    fs.appendFile('cards.txt', JSON.stringify(cardData) + '\n', (err) => {
        if (err) {
            console.error('Error writing to file', err);
            res.status(500).send('Internal Server Error');
        } else {
            console.log('Card data saved');
            res.status(200).send('Success');
        }
    });
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});
