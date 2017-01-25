require('./style.css')

function addElement()
{
  var div     = document.createElement('div')
  var content = document.createTextNode("Hi there and greetings!");
  div.appendChild(content);

  document.body.appendChild(div)
}

document.body.onload = addElement;