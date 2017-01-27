var moment = require('moment');

function addElement()
{
  var div     = document.createElement('div')
  var content = document.createTextNode(moment().format());
  div.appendChild(content);

  document.body.appendChild(div)
}

document.body.onload = addElement;
