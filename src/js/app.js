var title = document.querySelector('.title');
var courseFeatureElements = document.querySelectorAll('.course-feature');
var button = document.querySelector('button');

navigator.serviceWorker.register('/sw.js');

if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/sw.js', {scope: '/'})
  .then(function(reg) {
    // registration worked
    console.log('Registration succeeded. Scope is ' + reg.scope);
  }).catch(function(error) {
    // registration failed
    console.log('Registration failed with ' + error);
  });
}

function animate() {
  title.classList.remove('animate-in');
  for (var i = 0; i < courseFeatureElements.length; i++) {
    courseFeatureElements[i].classList.remove('animate-in');
  }
  button.classList.remove('animate-in');

  setTimeout(function () {
    title.classList.add('animate-in');
  }, 1000);

  setTimeout(function () {
    courseFeatureElements[0].classList.add('animate-in');
  }, 3000);

  setTimeout(function () {
    courseFeatureElements[1].classList.add('animate-in');
  }, 4500);

  setTimeout(function () {
    courseFeatureElements[2].classList.add('animate-in');
  }, 6000);

  setTimeout(function () {
    courseFeatureElements[3].classList.add('animate-in');
  }, 7500);

  setTimeout(function () {
    courseFeatureElements[4].classList.add('animate-in');
  }, 9000);

  setTimeout(function () {
    courseFeatureElements[5].classList.add('animate-in');
  }, 10500);

  setTimeout(function () {
    courseFeatureElements[6].classList.add('animate-in');
  }, 12000);

  setTimeout(function () {
    button.classList.add('animate-in');
  }, 13500);
}

animate();

button.addEventListener('click', function() {
  animate();
});

body, html {
  margin: 0;
  font-family: Arial, sans-serif;
}

.animate-in {
  animation: fade-slide 1.5s forwards;
}

.title {
  width: 100%;
  background-color: #ccc;
  text-align: center;
  padding: 30px 0;
}

.title h1 {
  margin: 0;
  color: white;
  font-size: 1.8em;
}

.title, .course-feature {
  opacity: 0;
}

.content, .start-over {
  margin: 5px auto;
  text-align: center;
  width: 80%;
  max-width: 500px;
}

.course-feature {
  padding: 2px;
  -webkit-box-shadow: 2px 2px 1px #ccc;
  -moz-box-shadow: 2px 2px 1px #ccc;
  box-shadow: 2px 2px 1px #ccc;
}

.course-feature {
  margin: 10px auto;
}

#installable {
  background-color: #d3ff7b;
}

#offline {
  background-color: #9ce9ff;
}

#responsive {
  background-color: #ffaf8a;
}

#push {
  background-color: #fff395;
}

#notifications {
  background-color: #ffcedf;
}

#native-features {
  background-color: #ddb5ff;
}

#more {
  background-color: #afffc3;
}

.start-over button {
  background-color: #fa923f;
  border: 1px solid #fa923f;
  -webkit-box-shadow: 2px 2px 2px #ccc;
  -moz-box-shadow: 2px 2px 2px #ccc;
  box-shadow: 2px 2px 2px #ccc;
  padding: 5px;
  color: white;
  opacity: 0;
  cursor: pointer;
  outline: none;
}

.start-over button:hover {
  background-color: #ff7f16;
}

@keyframes fade-slide {
  0% {
    opacity: 0;
    transform: translateY(50px);
  }

  100% {
    opacity: 1;
    transform: translateY(0);
  }
}
