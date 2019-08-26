const express = require('express');
const router = express.Router();

/*=============================
	card route/module (card.pug)
===============================*/
router.get('/cards', (req, res) => {
	res.render('card', {
		prompt: 'Express is great for building Restful services. Also, called Restful api. What is restful api?'
	});
});

module.exports = router;
