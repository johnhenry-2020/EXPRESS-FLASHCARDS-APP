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
app.use((req, res, next) => {
	console.log('Hello');
	const err = new Error('Welp, that sucks...');
	err.status = 500;
	next(err);
});

app.use((req, res, next) => {
	console.log('World');
	next();
});

/*==============
	root route
==============*/
app.get('/', (req, res) => {
	const name = req.cookies.username;
	if (name) {
		res.render('index', { name: name });
	} else {
		res.redirect('/hello');
	}
});

/*=============================
	card route/module (card.pug)
===============================*/
app.get('/cards', (req, res) => {
	res.locals.prompt =
		'Express is great for building Restful services. Also, called Restful api. What is restful api?';
	res.locals.hint = 'Something clever';
	res.render('card');
});

/*=================================================
	GET request >>> hello template/module (hello.pug)
==================================================*/
app.get('/hello', (req, res) => {
	const name = req.cookies.username;
	if (name) {
		res.redirect('/');
	} else {
		res.render('hello');
	}
});

/*=================================================
	POST request >>> HELLO template/module (hello.pug)
==================================================*/
app.post('/hello', (req, res) => {
	res.cookie('username', req.body.username);
	res.redirect('/');
});

/*=================================================
	POST request >>> GOODBYE
==================================================*/
app.post('/goodbye', (req, res) => {
	res.clearCookie('username');
	res.redirect('hello');
});

app.use((req, res, next) => {
	const err = new Error('Not Found');
	err.status = 404;
	next(err);
});

/*================
	ERROR HANDLER
=================*/
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
