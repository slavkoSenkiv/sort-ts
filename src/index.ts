import { NumbersCollection } from "./NumbersCollection";
import { CharactersCollection } from "./CharactersCollection";
import { LinkedList } from "./LinkedList";

//console.log('hello there 123');

const numArr = new NumbersCollection([-10, -11, 0, -3, 15, 1, 13]);
//numArr.sort();

const charArr = new CharactersCollection('XaYbZCD');
//charArr.sort();

const linkArr  = new LinkedList;
linkArr.add(-1);
linkArr.add(-5);
linkArr.add(5);
linkArr.add(4);
//console.log('length', linkArr.length);
//const index = 2;
//console.log('at index', index, 'node data =', linkArr.at(index).data);
//console.log(linkArr.compare(1, 0));
linkArr.print();
linkArr.sort();
linkArr.print()



