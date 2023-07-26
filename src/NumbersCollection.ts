export class NumbersCollection{
  /* //long equivalent
  data: number[];
  constructor(data: number[]){
    this.data = data;
  } */
  constructor(public data: number[]){}

  compare(leftIndex: number, rightIndex: number): boolean {
    return this.data[leftIndex] > this.data[rightIndex];
  }

  swap(leftIndex: number, rightIndex: number): void {
    const leftHand = this.data[leftIndex];
    this.data[leftIndex] = this.data[rightIndex];
    this.data[rightIndex] = leftHand;
  }
}