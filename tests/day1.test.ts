import deleteMiddleNode from "../src/day1";
import { LLNode } from "../src/day1/types";

describe('Day 1 Challenge Test', () => {
  it('Test delete with a linked list with a single element', async () => {
    const node = new LLNode(1);
    deleteMiddleNode(node);
    expect(node.value).toBeUndefined();
    expect(node.next).toBeUndefined();
  });
  it('Test delete with a linked list with 2 elements', async () => {
    const node = new LLNode(1);
    const node2 = new LLNode(2, node);
    deleteMiddleNode(node2);
    expect(node.value).toBe(1);
    expect(node2.value).toBeUndefined();
    expect(node2.next).toBeUndefined();
  });
  it('Test delete with a linked list with 3 elements', async () => {
    const node = new LLNode(1);
    const node2 = new LLNode(2, node);
    const node3 = new LLNode(3, node2);
    deleteMiddleNode(node3);
    expect(node3.value).toBe(3);
    expect(node3.next).toBe(node);
    expect(node2.value).toBeUndefined();
    expect(node2.next).toBeUndefined();
  });
  it('Test delete with a linked list with 5 elements', async () => {
    const node = new LLNode(1);
    const node2 = new LLNode(2, node);
    const node3 = new LLNode(3, node2);
    const node4 = new LLNode(4, node3);
    const node5 = new LLNode(5, node4);
    deleteMiddleNode(node5);
    expect(node5.value).toBe(5);
    expect(node5.next).toBe(node4);
    expect(node4.value).toBe(4);
    expect(node4.next).toBe(node2);
    expect(node3.value).toBeUndefined();
    expect(node3.next).toBeUndefined();
  });
  it('Test delete with a linked list with 6 elements', async () => {
    const node = new LLNode(1);
    const node2 = new LLNode(2, node);
    const node3 = new LLNode(3, node2);
    const node4 = new LLNode(4, node3);
    const node5 = new LLNode(5, node4);
    const node6 = new LLNode(6, node5);
    deleteMiddleNode(node6);
    expect(node3.value).toBe(3);
    expect(node5.next).toBe(node3);
    expect(node4.value).toBeUndefined();
    expect(node4.next).toBeUndefined();
  });
})
