import { Sorter } from "./Sorter";
import { NumbersCollection } from "./NumbersCollection";
import { CharactersCollection } from "./CharactersCollection";
import { LinkedList } from "./LinkedList";

const numbersCollection = new NumbersCollection([10, 3, -5, -1]);
const sorter = new Sorter(numbersCollection);
sorter.sort();
console.log(numbersCollection.data);

const charactersCollection = new CharactersCollection('asdHJfasdf');
const sorter1 = new Sorter(charactersCollection);
sorter1.sort();
console.log(charactersCollection);

const linkedList = new LinkedList();
linkedList.add(500);
linkedList.add(-10);
linkedList.add(-3);
linkedList.add(-4);

const sorter2 = new Sorter(linkedList);
sorter2.sort();
linkedList.print();