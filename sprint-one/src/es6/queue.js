class Queue {
  constructor() {
    this.storage = {};
    this.head = 0;
    this.tail = 0;
  }

  enqueue(value) {
    this.tail ++;
    this.storage[this.tail] = value;
  }
  dequeue() {
    if (this.head <= this.tail) {
      this.head ++;
    }
    return this.storage[this.head];
  }
  size() {
    var total = this.tail - this.head;
    if (total < 0) {
      total = 0;
    }
    return total;
  }

}
