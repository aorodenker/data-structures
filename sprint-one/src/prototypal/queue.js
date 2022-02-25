var Queue = function() {
  var newQ = Object.create(queueMethods);
  newQ.storage = {};
  newQ.head = 0;
  newQ.tail = 0;
  return newQ;
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


