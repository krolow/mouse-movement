var mouseMovement = require('../');

mouseMovement.every(20).mt(function (x, y) {
  console.log('100 mt moved!');
});
