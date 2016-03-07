var app = require('nodeular-core/express');

// mongo lookup
app.use(function(req, res, next) {
  if (req.url === '/shortUrl') {
    req.url = '/my-core/x';
  }
  next();
});

// mount other modules!
require('nodeular-module-a')(app);
require('nodeular-module-b')(app);

app.use('/', require('./html'));
app.use('/api', require('./api'));

module.exports = app;