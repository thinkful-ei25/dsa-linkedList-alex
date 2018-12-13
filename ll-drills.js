'use strict';

const LinkedList = require('./linked-list');

function main(){
  let SLL = new LinkedList();
  
  // insert into linked list
  // input: 'Apollo', 'Boomer', 'Helo', 'Husker', 'Starbuck'
  // output: Head -> Apollo -> Boomer -> Helo -> Husker -> Starbuck -> null
  SLL.insertFirst('Apollo');
  SLL.insertLast('Boomer');
  SLL.insertLast('Helo');
  SLL.insertLast('Husker');
  SLL.insertLast('Starbuck');

  console.log('At HEAD =>', SLL);
  // insertFirst -> O(1), inserts into the first position and doesn't need to iterate through list
  // insertLast -> O(n), inserts at the end of the linked list and has to iterate through list to find end


  // insert into linked list
  // input: 'Tauhida'
  // output: Head -> Apollo -> Boomer -> Helo -> Husker -> Starbuck -> Tauhida -> null
  SLL.insertLast('Tauhida');
  console.log('At Starbuck =>', SLL.find('Starbuck'));
  console.log('At Tauhida =>', SLL.find('Tauhida'));
  /// insertLast -> O(n), inserts at the end of the linked list and has to iterate through list to find end


  // remove from list (item DNE)
  // input: 'Squirrel'
  // output: Head -> Apollo -> Boomer -> Helo -> Husker -> Starbuck -> Tauhida -> null, console.log of 'Item not found',
  SLL.remove('Squirrel');
  console.log('At Squirrel =>', SLL.find('Squirrel'));

}
main();