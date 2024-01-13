export class Optional<T> {
  private object: T | null;

  constructor(obj: T | null) {
    this.object = obj;
  }

  get() {
    return this.object;
  }
  isEmpty() {
    return this.object == null;
  }
  isPresent() {
    return this.object != null;
  }
}
