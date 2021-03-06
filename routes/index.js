const express = require('express');
const router = express.Router();

/*==============
	root route
==============*/
router.get('/', (req, res) => {
	const name = req.cookies.username;
	if (name) {
		res.render('index', { name: name });
	} else {
		res.redirect('/hello');
	}
});

/*=================================================
	GET request >>> hello template/module (hello.pug)
==================================================*/
router.get('/hello', (req, res) => {
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
router.post('/hello', (req, res) => {
	res.cookie('username', req.body.username);
	res.redirect('/');
});

/*=================================================
	POST request >>> GOODBYE
==================================================*/
router.post('/goodbye', (req, res) => {
	res.clearCookie('username');
	res.redirect('/hello');
});

module.exports = router;
