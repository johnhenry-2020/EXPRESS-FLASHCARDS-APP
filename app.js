const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.set('view engine', 'pug');

/*=========================================================
	MIDDLEWARE (runs every time a request comes into the app)
===========================================================*/

// ROUTER ACCESS (MIDDLEWARE)
const mainroutes = require('./routes');
const cardRoutes = require('./routes/cards');

app.use(mainroutes);
app.use('/cards', cardRoutes);

/*================
	ERROR HANDLER
=================*/
app.use((req, res, next) => {
	console.log('Hello');
	const err = new Error('Welp, that sucks...');
	err.status = 500;
	next(err);
	next();
});

app.use((req, res, next) => {
	console.log('World');
	next();
});

app.use((err, req, res, next) => {
	res.locals.error = err;
	res.status(err.status);
	res.render('error');
});

/*=========================================================================================
	set up the development server using the listen method. the single parameter is the port #
/*=================================================/*======================================*/
app.listen(3000, () => {
	console.log('The Application is running on local host 3000!');
});
