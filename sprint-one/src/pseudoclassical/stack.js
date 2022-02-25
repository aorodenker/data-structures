var Stack = function() {
  this.storage = {};
  this.counter = 0;

};

Stack.prototype.push = function(value) {
  this.storage[this.counter] = value;
  this.counter ++;
};
Stack.prototype.pop = function() {
  this.counter --;
  if (this.counter < 0) {
    this.counter = 0;
  }
  return this.storage[this.counter];
};
Stack.prototype.size = function() {
  return this.counter;
};



