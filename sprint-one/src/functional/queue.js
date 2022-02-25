var Queue = function() {
  var someInstance = {};
  someInstance.head = 0;
  someInstance.tail = 0;

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below

  someInstance.enqueue = function(value) {
    someInstance.tail ++;
    storage[someInstance.tail] = value;

  };

  someInstance.dequeue = function() {
    if (someInstance.head <= someInstance.tail) {
      someInstance.head ++;
      return storage[someInstance.head];
    }
  };

  someInstance.size = function() {
    var total = someInstance.tail - someInstance.head;
    if (total < 0) {
      total = 0;
    }
    return total;
  };

  return someInstance;
};
