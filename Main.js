var Node = require('./Node.js');
var LinkedList = require('./LinkedList.js');
var Extension = require('./helperFunctions.js');
var ListStack = require('./ListStack.js');
var ArrayStack = require('./ArrayStack.js');
var stackWithMin = require('./StackWithMin.js');
var StackSet = require('./StackSet.js');
var Queue = require('./Queue.js');
let ext = new Extension();

var n1 = new Node(5);
var n2 = new Node(7);
var n3 = new Node(2);
var n4 = new Node(13);
var n5 = new Node(1);
var n6 = new Node(27);
var n7 = new Node(3, null);
//second head, two intersecting lists
var n1b = new Node(2);
n1b.next = n3;

n1.next = n2;
n2.next = n3;
n3.next = n4;
n4.next = n5;
n5.next = n6;
n6.next = n7;

var listA = new LinkedList(n1);
var listB = new LinkedList(n1b);

/*let result = ext.getIntersectingNode(listA, listB);
console.log(result);*/

//------------------------------------------------------------------
//stacks and queues
let q = new Queue();
q.enqueue(1);
q.enqueue(2);
q.enqueue(3);
q.enqueue(4);
q.enqueue(5);
q.printS1();
console.log('-----');
q.dequeue();
//q.printS1();
q.printS2();
