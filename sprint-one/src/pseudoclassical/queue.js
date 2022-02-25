var Queue = function() {
  this.storage = {};
  this.head = 0;
  this.tail = 0;
};


Queue.prototype.enqueue = function(value) {
  this.tail ++;
  this.storage[this.tail] = value;
};

Queue.prototype.dequeue = function() {
  if (this.head <= this.tail) {
    this.head ++;
  }
  return this.storage[this.head];
};

Queue.prototype.size = function() {
  var total = this.tail - this.head;
  if (total < 0) {
    total = 0;
  }
  return total;
};


