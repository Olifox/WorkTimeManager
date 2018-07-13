var loopback = require('loopback');
var Item = require('./sources').Item;
var app = module.exports = loopback();
 
app.model(Item);
app.use('/api', loopback.rest());
app.listen(8080);

var explorer = require('loopback-explorer');
app.use('/explorer', explorer(app, {basePath: '/api'}));