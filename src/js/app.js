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
var request = new Request('https://krosm-74bc5.firebaseio.com/', {
	method: 'GET', 
	mode: 'cors', 
	redirect: 'follow',
	headers: new Headers({
		'Content-Type': 'text/plain'
	})
});
fetch(request).then(response => response.json())
.then(data => {
  	console.log(data)
})
.then(function(responseObj) {
	console.log('status: ', responseObj.status);
});
