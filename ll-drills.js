'use strict';

const {LinkedList} = require('./linked-list');
const {display, size, isEmpty, findPrevious, findLast} = require('./linked-list');

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
  // remove => O(n) because it has to iterate through the list to find the item to be removed


  // insert before a targeted list item
  // input: 'Athena'
  // output: Head -> Apollo -> Athena -> Boomer -> Helo -> Husker -> Starbuck -> Tauhida -> null
  SLL.insertBefore('Athena', 'Boomer');
  console.log('At HEAD =>', SLL.find('Apollo'));
  console.log('At Athena =>', SLL.find('Athena'));
  // insertBefore -> O(n), inserts before a targeted item of the linked list and has to iterate through list to find target


  // insert after a targeted list item
  // input: 'Hotdog'
  // output: Head -> Apollo -> Athena -> Boomer -> Helo -> Hotdog -> Husker -> Starbuck -> Tauhida -> null
  SLL.insertAfter('Hotdog', 'Helo');
  console.log('At Helo =>', SLL.find('Helo'));
  console.log('At Hotdog =>', SLL.find('Hotdog'));
  // insertAfter -> O(n), inserts at targeted position of the linked list and has to iterate through list to find target


  // insert at targeted position
  // input: 'Kat', 3
  // output: Head -> Apollo -> Athena -> Boomer -> Kat -> Helo -> Hotdog -> Husker -> Starbuck -> Tauhida -> null
  SLL.insertAt('Kat', 3);
  console.log('At Kat =>', SLL.find('Kat'));
  console.log('At Boomer =>', SLL.find('Boomer'));
  // insertAt -> O(n), inserts at targeted position of the linked list and has to iterate through list to find target
  

  // delete item from list
  // input: 'Tauhida'
  // output: Head -> Apollo -> Athena -> Boomer -> Kat -> Helo -> Hotdog -> Husker -> Starbuck -> null
  SLL.remove('Tauhida');
  console.log('At Tauhida =>', SLL.find('Tauhida'));
  console.log('At Starbuck =>', SLL.find('Starbuck'));
  // remove => O(n) because it has to iterate through the list to find the item to be removed
  
  display(SLL);
  size(SLL);
  isEmpty(SLL);
  findPrevious(SLL, 'Kat');
  findLast(SLL);

}
main();