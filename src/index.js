var messages = require('./messages');
import Button from './button';

var newMessage = () => ('<h1>${messages.hi}{messages.hi}</h1>' + Button.button);

var app = document.getElementById('app');
app.innerHTML = newMessage();

Button.attachEl();

if (module.hot) {
    module.hot.accept();
}