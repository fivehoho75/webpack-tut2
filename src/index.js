var messages = require('./messages');
var app = document.getElementById('app');

app.innerHTML = '<h1>' + messages.hi +' ' + messages.event + '</h1>';

if (module.hot) {
    module.hot.accept();
}