var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');


var index = require('./routers/index');
var todos = require('./routers/todos');

var app = express();

//View Engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended : false
}));

app.use('/', index);
app.use('/api/v1/' , todos);

app.listen(3000, function(){
    console.log('Server Started on port 3000');
});