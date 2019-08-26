const express = require('express');
const router = express.Router();

// /*=============================
// 	card route/module (card.pug)
// ===============================*/
router.get('/', (req, res) => {
	res.locals.prompt =
		'Express is great for building Restful services. Also, called Restful api. What is restful api?';
	res.locals.hint = 'Something clever';
	res.render('card');
});

module.exports = router;
