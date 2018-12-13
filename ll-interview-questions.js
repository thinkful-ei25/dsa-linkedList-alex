'use strict';

//mystery program
function WhatDoesThisProgramDo(lst){
  let current = lst.head;
  while(current !== null){
    let newNode = current;
    while (newNode.next !== null) {
      if (newNode.next.value === current.value) {
        newNode.next = newNode.next.next;
      }
      else{
        newNode = newNode.next;
      }
    }
    current = current.next;
  }
}

// this program checks to see if there are any duplicates within the linked list
// O(n^2) because for every time the current node is moved, the new node has to iterate through the next nodes and compare values to current node's value and THEN take action (.next vs .next.next). 
// once the new node's value is null, the nested while loop will break and then the process will repeat until current node's value is null.


//reverse a list
//input:  HEAD => A -> B -> C -> D -> null    <----  LL
//output: HEAD => D -> C -> B -> A -> null

//Create three temp nodes to track prev, current, after
//Start values: prev: null, current: HEAD, after: current.next
//Reassign current.next to prev (Repeat)
//Locate final node when after = null
//Reassign HEAD to last node


function reverseList(list){
  let current = list.head;
  let previous = null;
  let after = current.next;

  while(current !== null){
    previous = current;
    current.next = previous;
    current = after;
    after = current.next;
    if(after === null){
      current = list.head;
    }
  }
}


//third from the end
//input:  HEAD => A -> B -> C -> D -> E -> F -> null    <----  LL
//output: D

//Create temp nodes to track current, nextNode, secondNextNode
//Start values: current = HEAD, nextNode = current.next, secondNextNode = nextNode.next
//When thirdNextNode is null, return value of current node
//The nextNode is a place holder and to check for lists that don't have length more than 3

function thirdFromTheEnd(list){
  let current = list.head;
  let nextNode = current.next;
  let secondNextNode = nextNode.next;

  if(secondNextNode === null){
    return current.value;
  }
  else if(secondNextNode === null && nextNode === null){
    return new Error('List does not contain 3 items');
  }

  while(nextNode !== null){
    current = nextNode;
    nextNode = current.next;
    secondNextNode = nextNode.next;
    
    if(secondNextNode === null){
      return current.value;
    }
  }
}