# mouse-movement

It's just an experimental project for me see how it works to create an addon for nodejs, so do not expect too much, I don't know how code in C or C++ this is just an experiment.

I've coded in Linux and so far is the only operational system that it works...

## Mouse Movement

It tracks the mouse movement and enables to bind listeners using unit conversions:

**Example:**

```javascript
import mouseMovement from 'mouse-movement';

//every 100 metters it calls the callback
mouseMovement.every(100).mt(function (x, y) {
  //do something with that or not...
});

mouseMovement.track(function (x, y) {
  //get the current position of mouse
  console.log(x, y);
})
```

## Todo

* [ ] Add some tests
* [ ] Check performance with multiples listeners and if its affect somehow the js API
* [ ] Improve addon to check what is the best approach to use while(true) and bind multiples calls

## License

Licensed under <a href="http://krolow.mit-license.org/">The MIT License</a>
Redistributions of files must retain the above copyright notice.

## Author

Vinícius Krolow - krolow[at]gmail.com
