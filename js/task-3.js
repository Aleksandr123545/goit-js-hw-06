class StringBuilder {
  #value;

  constructor(value) {
    this.#value = value;
  }
  getValue() {
    return this.#value;
  }
  setValue() {
    this.#value = new StringBuilder();
  }

  padStart(a) {
    this.#value = a + this.#value;
  }

  padEnd(b) {
    this.#value = this.#value + b;
  }

  padBoth(c) {
    this.#value = c + this.#value + c;
  }
}

const builder = new StringBuilder(".");
console.log(builder.getValue()); // "."
builder.padStart("^");
console.log(builder.getValue()); // "^."
builder.padEnd("^");
console.log(builder.getValue()); // "^.^"
builder.padBoth("=");
console.log(builder.getValue()); // "=^.^="
