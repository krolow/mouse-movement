import mouse from 'mouse-movement';

mouse.every(1).cm(function (x, y) {

});

mouse.track(function (x, y) {
  console.log('mouse movement!');
  console.log(x, y);
});

mouse.move(x, y);

mouse.every(2).mm(function (x, y) {

});

mouse.every(1).km(function (x, y) {

})
