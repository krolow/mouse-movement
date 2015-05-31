import mouse from 'mouse-movement';

mouse.movement(function (x, y) {
  console.log(`Mouse is at ${x} and ${y}`);
});

mouse.after(10).cm(function (cm) {

});

mouse.after(1).km(function (km) {

});
