import { ExerciseMetadata, ExampleCase } from '@interfaces/exercises';

/**
 * LRU Cache Exercise Implementation
 * 
 * DESCRIPTION:
 * Implements Least Recently Used cache with get/put.
 * 
 * EXAMPLE:
 * new LRUCache(2); put(1,1); put(2,2); get(1) → 1; put(3,3); get(2) → -1
 * 
 * CONCEPTS:
 * - Hash maps
 * - Linked lists
 * 
 * PERFORMANCE:
 * - Time: O(1) get/put
 * - Space: O(capacity)
 * 
 * Multiple implementations included to show different approaches.
 */

export class LRUCache {
  private capacity: number;
  private cache: Map<number, number>;

  constructor(capacity: number) {
    if (!Number.isInteger(capacity) || capacity <= 0) throw new Error("Capacity must be a positive integer");
    this.capacity = capacity;
    this.cache = new Map();
  }

  get(key: number): number {
    if (typeof key !== 'number') throw new Error("Key must be a number");
    if (!this.cache.has(key)) return -1;
    const value = this.cache.get(key)!;
    this.cache.delete(key);
    this.cache.set(key, value);
    return value;
  }

  put(key: number, value: number): void {
    if (typeof key !== 'number' || typeof value !== 'number') throw new Error("Key and value must be numbers");
    if (this.cache.has(key)) this.cache.delete(key);
    this.cache.set(key, value);
    if (this.cache.size > this.capacity) {
      const lruKey = this.cache.keys().next().value;
      this.cache.delete(lruKey);
    }
  }
}

class ListNode {
  key: number;
  value: number;
  prev: ListNode | null = null;
  next: ListNode | null = null;

  constructor(key = 0, value = 0) {
    this.key = key;
    this.value = value;
  }
}

export class LRUCacheDLL {
  private capacity: number;
  private cache: Map<number, { value: number; node: ListNode }>;
  private head: ListNode;
  private tail: ListNode;

  constructor(capacity: number) {
    if (!Number.isInteger(capacity) || capacity <= 0) throw new Error("Capacity must be a positive integer");
    this.capacity = capacity;
    this.cache = new Map();
    this.head = new ListNode();
    this.tail = new ListNode();
    this.head.next = this.tail;
    this.tail.prev = this.head;
  }

  get(key: number): number {
    if (typeof key !== 'number') throw new Error("Key must be a number");
    if (!this.cache.has(key)) return -1;
    const { value, node } = this.cache.get(key)!;
    this.moveToTail(node);
    return value;
  }

  put(key: number, value: number): void {
    if (typeof key !== 'number' || typeof value !== 'number') throw new Error("Key and value must be numbers");
    if (this.cache.has(key)) {
      const { node } = this.cache.get(key)!;
      node.value = value;
      this.moveToTail(node);
      return;
    }
    const node = new ListNode(key, value);
    this.cache.set(key, { value, node });
    this.addToTail(node);
    if (this.cache.size > this.capacity) {
      const lru = this.head.next!;
      this.removeNode(lru);
      this.cache.delete(lru.key);
    }
  }

  private addToTail(node: ListNode): void {
    node.prev = this.tail.prev;
    node.next = this.tail;
    this.tail.prev!.next = node;
    this.tail.prev = node;
  }

  private removeNode(node: ListNode): void {
    node.prev!.next = node.next;
    node.next!.prev = node.prev;
  }

  private moveToTail(node: ListNode): void {
    this.removeNode(node);
    this.addToTail(node);
  }
}

export const metadata: ExerciseMetadata = {
  title: "LRU Cache",
  description: "Implements a Least Recently Used (LRU) cache with get and put",
  concepts: ["hash maps", "doubly linked lists"],
  timeComplexity: "O(1) for get/put",
  spaceComplexity: "O(capacity)"
};

export const examples: ExampleCase[] = [
  { input: { operations: [["LRUCache", 2], ["put", 1, 1], ["put", 2, 2], ["get", 1], ["put", 3, 3], ["get", 2], ["put", 4, 4], ["get", 1], ["get", 3], ["get", 4]] }, output: [null, null, null, 1, null, -1, null, -1, 3, 4], description: "Standard LRU with evictions" },
  { input: { operations: [["LRUCache", 1], ["put", 1, 1], ["get", 1], ["put", 2, 2], ["get", 1]] }, output: [null, null, 1, null, -1], description: "Capacity 1" },
  { input: { operations: [["LRUCache", 0]] }, output: new Error("Capacity must be a positive integer"), description: "Invalid capacity" },
  { input: { operations: [["LRUCache", 2], ["put", 1, 1], ["get", 2]] }, output: [null, null, -1], description: "Missing key" }
];

export default { LRUCache, LRUCacheDLL, metadata, examples };