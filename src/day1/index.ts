import { LLNode } from "./types";

export default function deleteMiddleNode(head: LLNode) {
  let temp: LLNode | null = head;
  let length = 0;
  while (temp != null) {
    temp = temp.next;
    length++;
  }

  const index = Math.ceil(length / 2) - 1;

  let current: LLNode | null = head;
  let prev: LLNode | null = null;
  let pointer = 0;
  while (current != null)
  {
    if (pointer == index) {
      if (prev != null) {
        prev.next = current.next;
      }
      current.value = undefined;
      current.next = undefined;
    }
    prev = current;
    current = current.next;
    pointer++;
  }
}