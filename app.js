const express = require('express');
const app = express();

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

app.get('/hello', (req, res) => {
	// SEND METHOD is used for route paths based on strings. Ideal method to SENDing a simple string as a response
	res.send('<h1>Hello Friend!</h1>');
});

//set up the development server using the listen method. the single parameter is the port #
app.listen(3000, () => {
	console.log('The Application is running on local host 3000!');
});
