// var Stack = function() {
//   var newInstance = {};
//   var storage = {};
//   newInstance.x = 0;
//   _.extend(newInstance, stackMethods);
//   // use _.extend(first = method delivery target, second = methods from target)

//   return newInstance;
// };

// //stackMethods stores methods
// var stackMethods = {};
// stackMethods.push = function(value) {
//   storage[newInstance.x] = value;
//   newInstance.x ++;
// };
// stackMethods.pop = function() {
//   newInstance.x --;
//   if (newInstance.x < 0) {
//     newInstance.x = 0;
//   }
//   return storage[newInstance.x];
// };
// stackMethods.size = function() {
//   return newInstance.x;
// };


var Stack = function() {
  var newInstance = {};
  newInstance.storage = {};
  newInstance.x = 0;
  _.extend(newInstance, stackMethods);
  // use _.extend(first = method delivery target, second = methods from target)

  return newInstance;
};

//stackMethods stores methods
var stackMethods = {
  push(value) {
    this.storage[this.x] = value;
    this.x ++;
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



