import { Sorter } from "./Sorter";

class Node {
  constructor (public data: number) {}
  next: Node | null = null;
}

export class LinkedList extends Sorter {

  head: Node | null = null;

  add(value: number) {
    let node = new Node(value);

    if(!this.head) {
      this.head = node;
      return;
    }

    let tail = this.head;
    while (tail.next){
      tail = tail.next;
    }
    tail.next = node;
  }

  get length(): number {
    if (!this.head){
      throw new Error('no elements in linked list');
    }
    let counter = 1;
    let node = this.head;
    while(node.next) {
      counter++;
      node = node.next;
    }
    return counter;
  }

  at(index: number): Node {
    if (!this.head){
      throw new Error('no elements in linked list');
    }
    
    let node: Node | null = this.head;
    let counter = 0;
    while(node) {
      if (index === counter){
        return node;
      }
      node = node.next;
      counter++;
    }
    throw new Error ('index out of bounds');
  }

  compare(leftIndex: number, rightIndex: number): boolean {
    if (!this.head){
      throw new Error('no elements in linked list');
    }
    return this.at(leftIndex).data > this.at(rightIndex).data;
  }

  swap(leftIndex: number, rightIndex: number): void {
    let leftHand = this.at(leftIndex).data;
    this.at(leftIndex).data = this.at(rightIndex).data;
    this.at(rightIndex).data = leftHand;
  }

  print(){
    if (!this.head){
      throw new Error('no elements in linked list');
    }

    let logArr = []
    let node: Node | null = this.head;
    while (node) {
      logArr.push(node.data);
      node = node.next;
    }
    console.log(logArr);
  }
}


