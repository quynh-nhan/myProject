var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
// mongoose 
const mongoose= require("mongoose");
require("./model/user");
require("./model/bill");
require("./model/category");
require("./model/product");
require("./model/billDetail");
require("./model/img_product");
require("./model/cart");
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var categoryRouter = require('./routes/categoryRouter');
var userRouter = require('./routes/userRouter');
var productRouter = require('./routes/poductRouter');
var billRouter= require('./routes/billRouter');
var cartRouter= require('./routes/cartRouter');
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//connect database
mongoose.connect('mongodb+srv://truongnguyenquynhnhan_db_user:RRHHp5wHq5sbiV6f@cluster0.zg2hgnv.mongodb.net/ASM_api')
  .then(() => console.log('>>>>>>>>>> DB Connected!!!!!!'))
  .catch(err => console.log('>>>>>>>>> DB Error: ', err));

  
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/category',categoryRouter);
app.use('/user',userRouter);
app.use('/product',productRouter);
app.use('/bill',billRouter);
app.use('/cart',cartRouter);
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
