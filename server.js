const express = require('express');
bodyParser = require('body-parser');
const app = express();




app.get('/',(req,res) => {
res.send('Hello')
});


app.get('/user',(req,res) => {
res.send('Hi this is Response from user API !!')
});




const port = 8080;
app.listen(port,() => {
console.log('We are Live on Port :'+port);

});

