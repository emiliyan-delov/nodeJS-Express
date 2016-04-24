var express = require('express');
var app = express ();

var route = require('./routes');

app.set('view engine', 'ejs');

app.use('/images/large-pictures', express.static('./resources/pics-large'));
app.use('/images/small-pirctures', express.static('./resources/pics-small'));

app.use(route.index);


var server = app.listen(3000, function () {
	console.log('Listening on port 3000 ...')
})