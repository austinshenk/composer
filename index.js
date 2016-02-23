var express = require('express');
var compression = require('compression');
var app = express();

app.set('port', (process.env.PORT || 5000));

app.use(compression());
app.use(express.static(__dirname + '/assets'));

// views is directory for all template files
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.get('/', function(request, response) {
  response.render('pages/index');
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});


