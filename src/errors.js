var errors;

window.onerror = function (errorMsg, url, lineNumber) {
  initErrors();
  var p = document.createElement('p');
  p.innerText = errorMsg + ' IN ' + url + '#' + lineNumber;
  errors.appendChild(p);
  return false;
};

function initErrors() {
  if (errors) return;
  errors = document.createElement('div');
  errors.innerHTML = '<h3>Errors log:</h3>';
  document.body.appendChild(errors);
}
