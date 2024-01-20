class Storage {
  #items;

  constructor(items) {
    this.#items = items;
  }
  getItems() {
    return this.#items;
  }
  setItems(newItems) {
    this.#items = new Storage();
  }
  addItem(newItem) {
    return this.#items.push(newItem);
  }
  removeItem(remItem) {
    this.#items = this.#items.filter((n) => {
      return n != remItem;
    });
  }
}

const storage = new Storage(["Nanitoids", "Prolonger", "Antigravitator"]);
console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator"]
storage.addItem("Droid");
console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]
storage.removeItem("Prolonger");
console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]
