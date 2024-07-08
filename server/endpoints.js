const cors  = require('cors'); 
const express = require('express'); 
const app = express(); 
app.use(cors({origin: '*'})); 
app.use(express.json()); 

app.get('/', (req, res) => {
    res.send('Welcome to Task Management App!')
}); 

app.get('/test', (req, res) => {
    res.send('Test Endpoint')
})

module.exports = app; 