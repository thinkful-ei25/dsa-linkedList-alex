'use strict';

const {DoublyLinkedList, display, size, isEmpty, findPrevious, findLast} = require('./doubly-linked-list');

function main(){
  let DLL = new DoublyLinkedList();

  DLL.insertFirst('Aquaria');
  DLL.insertLast('Caprica');
  DLL.insertLast('Gemenon');
  DLL.insertLast('Picon');
  DLL.insertLast('Sagittaron');

  console.log('At HEAD =>', DLL);

  DLL.insertLast('Tauron');

  console.log('At Sagittaron =>', DLL.find('Sagittaron'));

  DLL.remove('Picon');

  console.log('At Gemenon =>', DLL.find('Gemenon'));
  console.log('At Picon =>', DLL.find('Picon'));

}
main();
