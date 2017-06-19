var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');


var index = require('./routers/index');
var todos = require('./routers/todos');

var app = express();

//View Engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

app.use(express.static(path.join(__dirname,'client')));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended : false
}));

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.use('/', index);
app.use('/api/v1/' , todos);

app.listen(3000, function(){
    console.log('Server Started on port 3000');
});