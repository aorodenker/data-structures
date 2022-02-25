var Stack = function() {
  var someInstance = {};
  someInstance.x = 0;

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below
  someInstance.push = function(value) {
    storage[someInstance.x] = value;
    someInstance.x ++;

  };

  someInstance.pop = function() {
    someInstance.x --;
    if (someInstance.x < 0) {
      someInstance.x = 0;
    }
    return storage[someInstance.x];
  };

  someInstance.size = function() {
    return someInstance.x;

  };

  return someInstance;
};
