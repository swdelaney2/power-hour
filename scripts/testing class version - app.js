console.log('Component has loaded.');

window.onload = function () {
  console.log('All files that this page needs have been loaded.');


// basic selectors
/* declare a selector named container
access that container via document.getElementById('name of id') */

var container = document.getElementById('container');

var monsters = ['Vampire', 'Ghost', 'Zombie'];

for (var inc in monsters) {
//create a new dom element using document.createElement('name of tag');
  var li = document.createElement('li'); // so everytime we loop through here, li becomes something different. create li.
  console.log(li);
// access and assign a property to my dom element
  li.innerHTML = monsters[inc]; // tell it to be html
  // appened it to a container
  container.appendChild(li); // then append it
}

// now we need to create an image
var puppyImage = document.createElement('img');
// alt text (alt) -- ADA compliancy text for the blind
puppyImage.alt = 'A cute random puppy';
puppyImage.id = 'puppy'; //can only be one word. multiple words are multiple ids.
// src = image source
puppyImage.src = 'http://cf.ltkcdn.net/dogs/images/slide/90431-849x565-Choc_LP3.jpg';
// append my element as a child to a selector
container.appendChild(puppyImage);

/* modify the cuteness level of my puppy
create a new selector by querying the domnotice the use of CSS style selectors!
makes things easy to remember */
var puppy = document.querySelector('#puppy');
puppy.src = 'https://www.greenfieldpuppies.com/wp-content/plugins/gfp/images/big/pup_x_1364556628_0.jpg';

var listItemsArray = document.getElementsByTagName('li');
console.log(listItemsArray);

for (var li in listItemsArray) {
  listItemsArray[li].innerHTML = 'We are the champions, my friend';
}

var status = document.getElementById('status-message');
var btn = document.getElementById('addpoint');

// intialize our UI component
user.initialize(status);
// selector.addEventListener(eventType, function ());
btn.addEventListener('click', function() {
  user.updateScoreByOnePoint();
})


// COMMAND + / TO COMMENT ALL OF THIS OUT (OR BACK IN -- lines 61-86)
// // bind events to a DOM element
// var body = document.getElementsByTagName('body')[0];
// /* console.log(body);
//
// var bodyTag = body[0]; */
//
// // we need to add a listener for events to an element
// // mouse events
// body.addEventListener('click', function (event) {
//   console.log(event);
//   console.log('Ow, you clicked me.');
// });
//
// // touch events: touchstart, touchmove, touchend
// body.addEventListener('touchstart', function(event) {
//   console.log('Why are you poking me? Quit it!');
// });
// // keyboard events
// body.addEventListener('keyup', function(event) {
//   // look for specfic keys to be pressed
//   if (event.keyCode == 13) {
//     console.log('Why do you press enter so much?');
//   }
// });
//
} // end of window.onload


/* create a user interface Component
the goal here is to create an object that can update itself
and visually show that if needed*/




// example #1: user Component

var user = {
  name: null,
  score: 0,
  domElement: null,
  // elementToAppendTo: document.selector for an individual element
  initialize: function (elementToAppendTo) {
if (this.name == null) {
  this.name = prompt('What is your name?');
}
this.domElement = document.createElement('div'); // moved from render
// this.domElement.innerHTML = 'Welcome, ' + this.name; // moved from render
elementToAppendTo.appendChild(this.domElement); // moved from render
console.log('initialize complete');
  },

// innerHTML: valid HTML to place in our dom element
  render: function(innerHTML) {
    if (typeof(innerHTML) == 'string') {
      this.domElement.innerHTML = innerHTML;
    }
  },

buildPlayerStatusString: function () {
  return this.name + ': ' + this.score;
},

  getName: function () {
return this.name;
  },

saveName: function (newName) {
if (typeof(newName) == 'string' && newName.length > 0) {
  this.name = newName;
} else {
  alert('You entered an incorrect or empty name.');
}
},

// CHECK BRACKETS above


getScore: function () {
return this.score;
},

updateScoreByOnePoint: function () {
this.score = this.score + 1;
var status = this.buildPlayerStatusString();
this.render(status);
return this.score;
}
};

/*
user.initialize();
user.getName();

var body = document.getElementsByTagName ('body')[0];
console.log(body);

user.render(body);      ==> places it

user.domElement.innerHTML = 'Welcome be gone!'
*/
