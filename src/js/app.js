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
if (window.XMLHttpRequest) {
  	request = new XMLHttpRequest();
} else if (window.ActiveXObject) { // IE
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
var url = 'https://krosm-74bc5.firebaseio.com';
var xhr = createCORSRequest('PUT', url);
xhr.setRequestHeader(
    'X-Custom-Header', 'value');
xhr.send();
request.open('GET', 'https://krosm-74bc5.firebaseio.com', true);
request.send(null);
