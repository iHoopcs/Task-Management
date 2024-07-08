const cors  = require('cors'); 
const express = require('express'); 
const app = express(); 
const User = require('./Models/users'); 

app.use(cors({origin: '*'})); 
app.use(express.json()); 

//GET
app.get('/', (req, res) => {
    res.send('Welcome to Task Management App!')
}); 

app.get('/users', (req, res) => {
    User.find().then(data => res.status(200).send(data))
}); 

//POST
app.post('/create-user', (req, res) => {

    const newUser = User({
        firstName: 'Caleb', 
        lastName: 'Simmons', 
        username: 'admin', 
        password: 'admin12345', 
        email: 'caleb.simmons.tm@gmail.com', 
        role: 'admin',
        team: '', 
    })

    newUser.save();
    res.send('User created'); 
    console.log(newUser); 
})


//PUT



//DELETE

module.exports = app; 