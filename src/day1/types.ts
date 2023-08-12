export class LLNode {
  value: any;
  next: LLNode | null;

  constructor(value: any, next: LLNode = null) {
    this.value = value;
    this.next = next;
  }
}