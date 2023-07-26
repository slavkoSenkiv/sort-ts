export class Sorter {
  /* 
  long code alternative to the following code
  collection: number[];
  constructor(collection: number[]){
    this.collection = collection;
  } */
  constructor(public collection: /* TODO: fix me */ ){}
  
  sort(): void {
    const { length } = this.collection;

    for (let i = 0; i < length; i++){
      for (let j = 0; j < length - i - 1; j++){
        if (this.collection[j] > this.collection[j + 1]){
          const leftHand = this.collection[j];
          this.collection[j] = this.collection[j+1];
          this.collection[j+1] = leftHand;
        }
      }
    }
  }
}