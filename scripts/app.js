window.onload = function () {

var comp = {

   domElement: null,

   initialize: function(domSelector) {
     this.domElement = document.createElement('img');
     domSelector.appendChild(this.domElement);
   },

   render: function(imageName) {
     this.domElement.src = imageName.imageSrc;
     this.domElement.alt = imageName.imageAlt;
     this.domElement.id = imageName.imageId;
     this.domElement.className = imageName.imageClass;
   }

};

var container = document.getElementById('container');

// this section works as a constructor, but I
function playlistSectionImage(imageSrc, imageAlt, imageId, imageClass) {
  this.imageSrc = imageSrc;
  this.imageAlt= imageAlt;
  this.imageId = imageId;
  this.imageClass = imageClass;
};

var madonnaImg = new playlistSectionImage('madonna.jpg', 'Bitch, I\'m Madonna', 'madonna', 'cover')

comp.initialize(container);
comp.render(madonnaImg);

madonna.addEventListener('click', function (event) {
  console.log(event);
  console.log('Bitch, I\'m Madonna.');
  var audio = new Audio('clips/bmad.wav');
audio.play();
});

} //end of onload

// // ATTEMPTING ANOTHER VARIABLE
// // could create another constructor for this or integrate it somehow
// spice.addEventListener('click', function (event) {
//   console.log(event);
//   console.log('Spice up your life!');
//   var audio = new Audio('clips/spice.wav');
// audio.play();
// });
//
// // To make sure this doesn't overwrite Madonna, would I need to name a new section? And then could I keep the CSS by having a new ID for each section, but the same class? THINGS TO THING ABOUT, BUT IT'S TOO LATE TIME TO SLEEP =) =) =)
// var spiceImg = new playlistSectionImage('90s-spice.jpg', 'Spice up your life!', 'spice', 'cover')
//
// comp.render(spiceImg);
//
//
// } //end of onload (DUPLICATE BC I AM COMMENTING OUT. BE CAREFUL)

// PREWORK TO GET ABOVE
// var container = document.getElementById('container');
// console.log(container);
//
// var madonnaImage = document.createElement('img');
// madonnaImage.alt = 'Bitch, I\'m Madonna.';
// madonnaImage.id = 'madonna';
// madonnaImage.className = 'cover';
// madonnaImage.src = 'madonna.jpg';
// container.appendChild(madonnaImage);
//
// madonnaImage.addEventListener('click', function (event) {
//   console.log(event);
//   console.log('Bitch, I\'m Madonna.');
//   var audio = new Audio('clips/bmad.wav');
// audio.play();
// });
//
// function playlistSectionImage(name, alt, id, className, src) {
//   this.name = name;
//   this.alt= alt;
//   this.id = id;
//   this.className = className;
//   this.src = src;
// }
//
// var madonnaImage = new playlistSectionImage('madonnaImage', 'Bitch I\'m Madonna', 'madonna', 'cover', 'madonna.jpg')
//
// function component(domElement) {
// ​
//   this.domElement = domElement;
//   this.initialize = function() {
//     console.log('init');
//   };
//   this.render = function() {
//     console.log('render');
//   }
// ​
// }
