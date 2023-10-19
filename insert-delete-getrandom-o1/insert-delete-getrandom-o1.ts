class RandomizedSet {
  private randomSet: Set<number>;
  constructor() {
    this.randomSet = new Set();
  }

  insert(val: number): boolean {
    if (this.randomSet.has(val)) {
      return false;
    }
    this.randomSet.add(val);

    return true;
  }

  remove(val: number): boolean {
    if (this.randomSet.has(val)) {
      this.randomSet.delete(val);
      return true;
    }

    return false;
  }

  getRandom(): number {
    const randomIndex = Math.floor(Math.random() * this.randomSet.size);
    return [...this.randomSet][randomIndex];
  }
}
