
export default class Model {
  constructor() {
    this.todos = [];
  }
  onChange(callback) {
    this._onChange = callback;
  }
  _commit() {
    if (this._onChange) this._onChange();
  }

  // Métodos de modificación
  add(text, done = false) {
    this.todos.push({ text, done });
    this._commit();
  }
  remove(i) {
    this.todos.splice(i, 1);
    this._commit();
  }
  edit(i, newText) {
    this.todos[i].text = newText;
    this._commit();
  }
  toggle(i) {
    this.todos[i].done = !this.todos[i].done;
    this._commit();
  }
}