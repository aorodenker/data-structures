class Stack {
  constructor() {
    this.counter = 0;
    this.storage = {};
  }

  push(value) {
    this.storage[this.counter] = value;
    this.counter ++;
  }
  pop() {
    this.counter --;
    if (this.counter < 0) {
      this.counter = 0;
    }
    return this.storage[this.counter];
  }
  size() {
    return this.counter;
  }
}