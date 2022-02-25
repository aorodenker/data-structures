var Queue = function() {
  var newThing = {};
  newThing.head = 0;
  newThing.tail = 0;
  newThing.storage = {};
  _.extend(newThing, queueMethods);

  return newThing;

};

var queueMethods = {
  enqueue(value) {
    this.tail++;
    this.storage[this.tail] = value;
  },
  dequeue() {
    if (this.head <= this.tail) {
      this.head ++;
    }
    return this.storage[this.head];
  },
  size() {
    var total = this.tail - this.head;
    if (total < 0) {
      total = 0;
    }
    return total;
  }
};


