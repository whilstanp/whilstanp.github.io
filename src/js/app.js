/*var title = document.querySelector('.title');
var courseFeatureElements = document.querySelectorAll('.course-feature');
var button = document.querySelector('button');*/
navigator.serviceWorker.register('/sw.js');
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/sw.js', {scope: '/'})
  .then(function(reg) {
    console.log('Registration succeeded. Scope is ' + reg.scope);
  }).catch(function(error) {
    console.log('Registration failed with ' + error);
  });
}
/*if (window.XMLHttpRequest) {
  	request = new XMLHttpRequest();
} else if (window.ActiveXObject) {
	try {
    		request = new ActiveXObject('Msxml2.XMLHTTP');
  	} 
  	catch (e) {
    		try {
      		request = new ActiveXObject('Microsoft.XMLHTTP');
    	} 
    	catch (e) {}
  	}
}
request.open('GET', 'https://krosm-74bc5.firebaseio.com', true);
request.send(null);*/
var url = 'https://krosm-74bc5.firebaseio.com';
function createCORSRequest(method, url) {
  var xhr = new XMLHttpRequest();
  if ("withCredentials" in xhr) {
    xhr.open(method, url, true);
  } else if (typeof XDomainRequest != "undefined") {
    xhr = new XDomainRequest();
    xhr.open(method, url);
  } else {
    xhr = null;
  }
  return xhr;
}
var xhr = createCORSRequest('GET', url);
if (!xhr) {
  throw new Error('CORS not supported');
}
function getTitle(text) {
  return text.match('<title>(.*)?</title>')[1];
}
function makeCorsRequest() {
  var xhr = createCORSRequest('GET', url);
  if (!xhr) {
    alert('CORS not supported');
    return;
  }
  xhr.onload = function() {
    var text = xhr.responseText;
    var title = getTitle(text);
    alert('Response from CORS request to ' + url + ': ' + title);
  };
  xhr.onerror = function() {
    alert('Woops, there was an error making the request.');
  };
  xhr.send();
}
