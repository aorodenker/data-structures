var Stack = function() {
  var newThing = Object.create(stackMethods);
  newThing.storage = {};
  newThing.x = 0;
  return newThing;
};

var stackMethods = {
  push(value) {
    this.storage[this.x] = value;
    this.x++
  },
  pop() {
    this.x --;
    if (this.x < 0) {
      this.x = 0;
    }
    return this.storage[this.x];
  },
  size() {
    return this.x;
  }
};


