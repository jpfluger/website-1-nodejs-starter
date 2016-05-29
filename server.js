/**********************************************
* Required node libraries
*/

var express = require('express'),
	app = express(),
	path = require('path');

/**********************************************
* Serve STATIC files that are available to the public
*/

app.use('/public', express.static('public'));
app.use('/public/_third', express.static(path.join(__dirname, 'bower_components')));

/**********************************************
* Routes
*/

app.get('/', function (req, res) {
  res.redirect('/home')
});

app.get('/home', function (req, res) {
  res.sendFile(path.join(__dirname, 'views/home.html'))
});

/**********************************************
* Error handling
*/

app.use(function(req, res, next) {
	res.status(404);
	res.sendFile(path.join(__dirname, '/views/404.html'));
});

app.use(function(err, req, res, next) {
	res.status(500);
	res.sendFile(path.join(__dirname, '/views/500.html'));
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});