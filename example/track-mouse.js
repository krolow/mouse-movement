var mouseMovement = require('../');

mouseMovement.every(20).mt(function (x, y) {
  console.log('20 mt moved!');
});

mouseMovement.every(1).km(function (x, y) {
  console.log('1 km moved!');
});

mouseMovement.every(1).cm(function (x, y) {
  console.log('1 cm moved!');
});

mouseMovement.every(1).mm(function (x, y) {
  console.log('1 mm moved!');
});

mouseMovement.every(100).px(function (x, y) {
  console.log('100 px moved!');
});

mouseMovement.track(function (x, y) {
  console.log(x, y);
});




