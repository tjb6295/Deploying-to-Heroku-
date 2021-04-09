var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
// var pokemonRouter = require('./routes/pokemon');
// var clothingRouter = require('./routes/clothing');
// var starwarsRouter = require('./routes/starwars');
// var recipeRouter = require('./routes/recipe');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
//app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'public'),{extensions: 'html'}));

app.use('/', indexRouter);
app.use('/users', usersRouter);
// app.use('/pokemon', pokemonRouter);
// app.use('/clothing', clothingRouter);
// app.use('/starwars', starwarsRouter);
// app.use('/recipe', recipeRouter);

module.exports = app;
