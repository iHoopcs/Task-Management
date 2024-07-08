require('dotenv').config();
const mongoose = require('mongoose'); 
const app = require('./endpoints'); 
const port = process.env.PORT || 8080; 


//Database
mongoose.connect(process.env.MONGODB_URI)
    .then(() => [
        console.log('MongoDB Connected'),
        //start server
        app.listen(port, () => {
            console.log('Server listening on PORT 8080...')
        })
 
    ])
    .catch((err) => {
        console.log(err, 'Connection failed')
});