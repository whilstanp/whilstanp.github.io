var title = document.querySelector('.title');
var courseFeatureElements = document.querySelectorAll('.course-feature');
var button = document.querySelector('button');
navigator.serviceWorker.register('/sw.js');
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/sw.js', {scope: '/'})
  .then(function(reg) {
    console.log('Registration succeeded. Scope is ' + reg.scope);
  }).catch(function(error) {
    console.log('Registration failed with ' + error);
  });
}
