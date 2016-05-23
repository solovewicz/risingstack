// app/index.js
//to debug express start server with this command
// DEBUG=express* node index.js

const express = require('express'); 
const app = express();
const port = 3000;

const path = require('path');  
const exphbs = require('express-handlebars');

app.engine('.hbs', exphbs({  
  defaultLayout: 'main',
  extname: '.hbs',
  layoutsDir: path.join(__dirname, 'views/layouts')
}));

app.set('view engine', '.hbs'); 
app.set('views', path.join(__dirname, 'views')); 

app.use((request, response, next) => {  
  console.log(request.headers);
  next();
});

app.use((request, response, next) => {  
  request.chance = Math.random();
  next();
});

//throw an error immidiately to show how error handling works
app.get('/', (request, response) => {  
  response.render('home', {
    name: 'John'
  });  
});

/*
    The error handler function should be the last function a:dded with app.use.
    The error handler has a next callback - it can be used to chain multiple error handlers.
*/

app.use((err, request, response, next) => {  
  // log the error, for now just console.log
  console.log(err);
  response.status(500).send('Something broke!');
});


app.listen(port);  
