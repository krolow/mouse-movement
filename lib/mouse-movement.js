import mouse from '../build/Release/mouse.node';

export default class MouseMovement {

  constructor (number) {
    this.number = number;
    this.acumulator = 0;
  }

  px (callback) {
    let distance;

    mouse((x, y) => {
      distance = this.distance(x, y);

      if (distance + this.acumulator >= this.number) {
        this.acumulator = 0;

        return callback();
      }

      this.acumulator += distance;
    });
  }

  mm (callback) {
    console.log('here?');
    this.number = convertMillimetersToPixel(this.number);

    return this.px(callback);
  }

  cm (callback) {
    this.number = convertMillimetersToPixel(this.number) * 10;

    return this.px(callback);
  }

  mt (callback) {
    this.number = convertMillimetersToPixel(this.number) * 1000;

    return this.px(callback);
  }

  km (callback) {
    this.number = convertMillimetersToPixel(this.number) * 1000000;

    return this.px(callback);
  }

  track (callback) {
    return mouse(callback);
  }

  distance (x, y) {
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

  const distanceX = positionA.x - positionB.x;
  const distanceY = positionA.y - positionB.y;

  return Math.ceil(Math.sqrt((distanceX * distanceX) + (distanceY * distanceY)));
}

function convertMillimetersToPixel(mm) {
  return mm * 3.779528;
}
