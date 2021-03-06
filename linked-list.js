'use strict';

class _Node {
  constructor(value, next) {
    this.value = value;
    this.next = next;
  }
}

class LinkedList{
  constructor() {
    this.head = null;
  }

  insertFirst(item){
    this.head = new _Node(item, this.head);
  }

  insertBefore(item, target){
    let currNode = this.head;
    let prevNode = this.head;

    while((currNode !==null) && (currNode.value !== target)){
      prevNode = currNode;
      currNode = currNode.next;

      if(currNode.value === target){
        let insertNode = new _Node(item, prevNode.next);
        prevNode.next = insertNode;
      }
    }
  }

  insertAfter(item, target){
    let currNode = this.head;
    let prevNode = this.head;

    while((prevNode !==null) && (prevNode.value !== target)){
      prevNode = currNode;
      currNode = currNode.next;

      if(prevNode.value === target){
        let insertNode = new _Node(item, prevNode.next);
        prevNode.next = insertNode;
      }
    }
  }

  insertLast(item){
    if(this.head === null){
      this.insertFirst(item);
    }
    else {
      let tempNode = this.head;
      while(tempNode.next !== null){
        tempNode= tempNode.next;
      }
      tempNode.next = new _Node(item, null);
    }
  }

  insertAt(item, targetPos){
    let indexPos = 0;
    let currNode = this.head;
    let prevNode = this.head;

    while((prevNode !==null) && (targetPos !== (indexPos))){
      prevNode = currNode;
      currNode = currNode.next;
      indexPos++;

      if(targetPos === (indexPos)){
        let insertNode = new _Node(item, prevNode.next);
        prevNode.next = insertNode;
      }
    }

  }

  find(item){
    let currNode = this.head;
    if(!this.head){
      return null;
    }
    while(currNode.value !== item){
      if(currNode.next === null){
        return null;
      }
      else{
        currNode = currNode.next;
      }
    }
    return currNode;
  }

  remove(item){
    if(!this.head){
      return null;
    }
    if(this.head.value === item){
      this.head = this.head.next;
      return;
    }
    
    let currNode = this.head;
    let prevNode = this.head;

    while((currNode !== null) && (currNode.value !== item)){
      prevNode = currNode;
      currNode = currNode.next;
    }
    if(currNode === null){
      console.log('Item not found');
      return;
    }
    prevNode.next = currNode.next;
  }
}

function display(linkedList) {
  let currNode = linkedList.head;
  let position = 0;
  
  while(currNode !== null){
    console.log('Position: '+position+',', currNode.value);
    currNode = currNode.next;
    position++;
  }
}

function size(linkedList){
  let currNode = linkedList.head;
  let length = 0;
  while(currNode !== null){
    currNode = currNode.next;
    length++;
  }
  console.log('This linked list has ' + length +' nodes');
  return length;
}

function isEmpty(linkedList){
  let currNode = linkedList.head;
  if(currNode === null){
    console.log('This linked list is empty');
    return true;
  }
  console.log('This linked list is NOT empty');
  return false;
}

function findPrevious(linkedList, target){
  let currNode = linkedList.head;
  let prevNode = linkedList.head;
  let position = 0;

  while((currNode !==null) && (currNode.value !== target)){
    prevNode = currNode;
    currNode = currNode.next;
    position++;
    if(currNode.value === target){
      console.log('The node before ' +'-'+target+'-'+ ' is '+'='+prevNode.value+'='+' located at '+ 'position '+position);
      return prevNode.value;
    }
  }
}

function findLast(linkedList){
  let currNode = linkedList.head;
  let position = 0;
  while(currNode !==null){
    currNode = currNode.next;
    position++;
    if(currNode.next === null){
      console.log('The last node is '+currNode.value+' at position '+position);
      return currNode.value;
    }
  }
}

module.exports = {LinkedList, display, size, isEmpty, findPrevious, findLast};