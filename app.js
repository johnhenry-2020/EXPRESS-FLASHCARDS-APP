const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.set('view engine', 'pug');

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
	POST request >>> GOODBYE template/module (hello.pug)
==================================================*/
app.post('/goodbye', (req, res) => {
	res.clearCookie('username');
	res.redirect('hello');
});

/*=========================================================================================
	set up the development server using the listen method. the single parameter is the port #
/*=================================================/*======================================*/
app.listen(3000, () => {
	console.log('The Application is running on local host 3000!');
});
