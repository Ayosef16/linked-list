const nodeFactory = () => {
  let value = null;
  let nextNode = null;
  return { value, nextNode };
};

const linkedListFactory = () => {
  let headNode = null;

  const append = (value) => {
    let node = nodeFactory();
    node.value = value;
    if (headNode === null) {
      headNode = node;
      return;
    }
    let currentNode = headNode;
    while (currentNode.nextNode) {
      currentNode = currentNode.nextNode;
    }
    currentNode.nextNode = node;
  };

  const prepend = (value) => {
    let node = nodeFactory();
    node.value = value;
    node.nextNode = headNode;
    headNode = node;
  };

  const size = () => {
    let count = 0;
    let currentNode = headNode;
    while (currentNode) {
      currentNode = currentNode.nextNode;
      count++;
    }
    return count;
  };

  const head = () => headNode;

  const tail = () => {
    let currentNode = headNode;
    while (currentNode.nextNode) {
      currentNode = currentNode.nextNode;
    }
    return currentNode;
  };

  const at = (index) => {
    let count = 0;
    let currentNode = headNode;
    while (currentNode) {
      if (count === index) {
        return currentNode;
      }
      currentNode = currentNode.nextNode;
      count++;
    }
    return "Invalid index";
  };

  const pop = () => {
    let linkedListSize = size();
    let newLastNode = at(linkedListSize - 2);
    newLastNode.nextNode = null;
  };

  const contains = (value) => {
    let currentNode = headNode;
    while (currentNode) {
      if (currentNode.value === value) {
        return true;
      }
      currentNode = currentNode.nextNode;
    }
    return false;
  };

  const find = (value) => {
    let index = 0;
    let currentNode = headNode;
    while (currentNode) {
      if (currentNode.value === value) {
        return index;
      }
      currentNode = currentNode.nextNode;
      index++;
    }
    return null;
  };

  const toString = () => {
    let currentNode = headNode;
    let stringLinkedList = "";
    while (currentNode) {
      stringLinkedList += `( ${currentNode.value} ) -> `;
      currentNode = currentNode.nextNode;
    }
    stringLinkedList += "null";
    console.log(stringLinkedList);
  };
  return {
    append,
    prepend,
    size,
    head,
    tail,
    at,
    pop,
    contains,
    find,
    toString,
  };
};

const testLinkedList = linkedListFactory();
testLinkedList.append(10);
testLinkedList.append(50);
testLinkedList.append(40);
testLinkedList.prepend(69);
// testLinkedList.toString();
console.log(testLinkedList.size());
console.log(testLinkedList.head());
console.log(testLinkedList.tail());
console.log(testLinkedList.at(3));
testLinkedList.toString(69);
