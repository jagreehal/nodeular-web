var app = require('nodeular-core/express');

// mongo lookup
app.use(function(req, res, next) {
  if (req.url === '/shortUrl') {
    req.url = '/my-core/x';
  }
  next();
});

require('nodeular-module-a');
require('nodeular-module-b');

app.use('/', require('./html'));
app.use('/api', require('./api'));

module.exports = app;