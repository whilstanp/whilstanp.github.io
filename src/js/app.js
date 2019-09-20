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
if (window.XMLHttpRequest) { // Mozilla, Safari, ...
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
request.open('GET', 'https://davidwalsh.name/ajax-endpoint', true);
request.send(null);
