const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
// Using the app.set method to set the view engine,To the parameter pug.
// The app.set method defines different settings in Express.
app.set('view engine', 'pug');
// This line, tells Express which template engine to use.By default, Express will look in a folder called Views in the root of your project.

//create route(s)

// .get(location parameter, anonymous-callback-function(request-object, response-object)=>{})

//root route
app.get('/', (req, res) => {
	// Render method renders a file in the views folder and sends the rendered HTML to the client
	// The view argument is a string that is the file path of the view file to render.
	res.render('index');
});

// card module (card.pug)
app.get('/cards', (req, res) => {
	// rendering the individuals cards to the template

	// creating a variable on the h2
	res.locals.prompt =
		'Express is great for building Restful services. Also, called Restful api. What is restful api?';
	// creating a variable on the h2
	res.locals.hint = 'Something clever';
	// res.locals.colors = colors;
	res.render('card');

	// the following block of code can accomplish the same task as res.locals.prompt found above the res.render('card'); statement
	/* res.render('card',{
	 		prompt: 'Express is great for building Restful services. Also, called Restful api. What is restful api?'
     }*/
});

// get request >>> hello template/module (hello.pug)

app.get('/hello', (req, res) => {
	res.render('hello');
});

// post request >>> hello template/module (hello.pug)

app.post('/hello', (req, res) => {
	console.dir(req.body);
	res.render('hello', { name: req.body.username });
});

//set up the development server using the listen method. the single parameter is the port #
app.listen(3000, () => {
	console.log('The Application is running on local host 3000!');
});
