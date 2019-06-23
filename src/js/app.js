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
let deferredPrompt;
window.addEventListener('beforeinstallprompt', (e) => {
  deferredPrompt = e;
  btnAdd.style.display = 'block';
});
btnAdd.addEventListener('click', (e) => {
  btnAdd.style.display = 'none';
  deferredPrompt.prompt();
  deferredPrompt.userChoice
    .then((choiceResult) => {
      if (choiceResult.outcome === 'accepted') {
        console.log('User accepted the A2HS prompt');
      } else {
        console.log('User dismissed the A2HS prompt');
      }
      deferredPrompt = null;
    });
});


