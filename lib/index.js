import mouse from '../build/Release/mouse.node';

export default {

  acumulator: 0,

  every: function (number) {
    this.number = number;

    return this;
  },

  px: function (callback) {
    let distance;

    mouse((x, y) => {
      distance = this.distance(x, y);

      if (distance + this.acumulator >= this.number) {
        this.acumulator = 0;

        return callback();
      }

      this.acumulator += distance;
    });
  },

  mm: function (callback) {
    this.number = convertMillimetersToPixel(this.number);

    return this.px(callback);
  },

  cm: function (callback) {
    this.number = convertMillimetersToPixel(this.number) * 10;

    return this.px(callback);
  },

  mt: function (callback) {
    this.number = convertMillimetersToPixel(this.number) * 1000;

    return this.px(callback);
  },

  km: function (callback) {
    this.number = convertMillimetersToPixel(this.number) * 1000000;

    return this.px(callback);
  },

  track: function (callback) {
    return mouse(callback);
  },

  distance: function (x, y) {
    if (!this.oldPosition) {
      this.oldPosition = {x: x, y: y};
      return 0;
    }

    const result = distance(this.oldPosition, {x: x, y: y});
    this.oldPosition = {x: x, y: y};
    return result;
  }
}

function distance(positionA, positionB) {
  if (positionA === positionB) {
    return 0;
  }

  var distanceX = positionA.x - positionB.x;
  var distanceY = positionA.y - positionB.y;

  return Math.ceil(Math.sqrt((distanceX * distanceX) + (distanceY * distanceY)));
}

function convertMillimetersToPixel(mm) {
  return mm * 3.779528;
}
