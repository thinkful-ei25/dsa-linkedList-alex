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

//Find last item in linked list(item.next === null)
//Locate previous node and direct next of last item to previous node
//Assign HEAD to last node
//Locate previous nodes and direct item to previous node until null


function reverseList(list){
  let current = list.head;
  let previous = null;
  let after = current.next;

  while(current !== null){
    previous = current;
    current.next = previous;
    current = after;
    after = current.next;
    if(after.next === null){
      current = list.head;
    }
  }
}