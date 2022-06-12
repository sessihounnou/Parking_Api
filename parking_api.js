const controllers = require('./controllers');
const express = require('express')
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const port = 3001;

// Where we will keep books
let parking = [];
let user = {};
app.use(cors());

// Configuring body parser middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//function to get user data 
user_data= function(req){
   return user = {
        name:req.body.name,
        surname:req.body.surname,
        mail:req.body.mail,
        phone:req.body.phone
    } 
}

app.post('/parking', (req, res) => {
    // We will be coding here
    console.log(req)
    res.send(req.body)
});

//create user 
app.post('/user', (req, res) => {
    user_data(req);
    controllers.createUser(user,res);
});

//get one user 
app.get('/user/:id', (req, res) => {
    controllers.getUser(req.params,res);
});

//get all users
app.get('/users', (req, res) => {
    controllers.getAllUser(res);
});

//update users
app.put('/user/:id', (req, res) => {
    user_data(req);
    controllers.updateUser(user,req.params,res);
});
//delete users
app.delete('/user/:id', (req, res) => {
    controllers.deleteUser(req.params,res);
});
// reservation 
reservation_date = function (req){
    return dateofreservation = {
        start:req.body.start,
        end:req.body.end,
    }
}
// places 

// create place 
app.post('/places', (req, res) => {
    controllers.createPlace(req.body.place_number,res);
});

// get all place
app.get('/places', (req, res) => {
    controllers.getAllPlace(req.params,res);
});
// get one place 
app.get('/places/:id', (req, res) => {
    controllers.getPlace(req.body.place_number,res);
});

// update all place  
app.put('/places', (req, res) => {
    controllers.getAllPlace(req.body.place_number,res);
});

//delete place 
app.delete('/user/:id', (req, res) => {
    controllers.deletePlace(req.params,res);
});

app.listen(port, () => console.log(`Hello world app listening on port ${port}!`));