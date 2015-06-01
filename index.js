var mouse = require('./build/Release/mouse.node');

mouse(function(x, y){
  console.log(x, y); // 'hello world'
});

// export default {
//
//   every: function (number) {
//     this.number = number;
//   },
//
//   px: function (callback) {
//
//   }
//
//   mm: function (callback) {
//
//   }
//
//   cm: function (callback) {
//
//   }
//
//   mt: function (callback) {
//
//   }
//
//   track: function (callback) {
//     const point = mouse.track();
//
//     callback()
//   }
// }
