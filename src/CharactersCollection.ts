import { Sorter } from "./Sorter";

export class CharactersCollection extends Sorter{
  constructor (public data: string) {
    super()
  }

  protected get length(): number {
    return this.data.length;
  }

  protected compare(leftIndex: number, rightIndex: number): boolean {
    return this.data[leftIndex].toLocaleLowerCase() > this.data[rightIndex].toLocaleLowerCase();
  }

  protected swap(leftIndex: number, rightIndex: number): void {
    let charArr = this.data.split('');

    let leftHand = charArr[leftIndex];
    charArr[leftIndex] = charArr[rightIndex];
    charArr[rightIndex] = leftHand;

    this.data = charArr.join('');
  }
}

