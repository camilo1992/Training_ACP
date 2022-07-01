class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor(value) {
    const newNode = new Node(value);
    this.first = newNode;
    this.last = newNode;
    this.length = 1;
  }

  enqueue(value) {
    const newNode = new Node(value);

    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    }
  }

  push(value) {
    const myNode = new Node(value);

    if (!this.first) {
      this.first = myNode;
      this.last = myNode;
    } else {
      this.last.next = myNode;
      this.last = myNode;
    }

    this.length++;
    return this;
  }

  dequeue() {
    if (this.length === 0) return undefined;
    let temp = this.first;
    if (this.length === 1) {
      this.first = null;
      this.last = null;
    } else {
      this.first = this.first.next;
      temp.next = null;
    }
    this.length--;
    return temp;
  }
}

let myQueue = new Queue(4);
console.log(myQueue);
