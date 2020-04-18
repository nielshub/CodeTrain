import "./styles.css";

const _make = (type, className) => {
  const elem = document.createElement(type);
  if (className) {
    elem.classList.add(className);
  }
  return elem;
};

export default class View {
  constructor() {
    const root = document.getElementById("root");
    root.append(this._buildTitle(), this._buildForm(), this._buildList());
  }

  setPresenter(presenter) {
    this.presenter = presenter;
  }

  _buildTitle() {
    const h1 = document.createElement("h1");
    h1.textContent = "Todo List";
    return h1;
  }

  _buildForm() {
    const form = document.createElement("form");
    const input = document.createElement("input");
    input.type = "text";
    const submit = document.createElement("button");
    submit.textContent = "Add Todo";
    form.append(input, submit);

    form.addEventListener("submit", (e) => {
      e.preventDefault();
      if (this.presenter) {
        this.presenter.onAdd(input.value);
      }
      input.value = "";
    });

    return form;
  }

  _buildList() {
    let tmpText = "";
    this.ul = _make("ul", "todo-list");

    // Evento de borrado (click a botón en los ítems)
    this.ul.addEventListener("click", (e) => {
      if (e.target.type === "submit") {
        const i = parseInt(e.target.parentElement.id);
        console.log("borrando ", i);
        if (this.presenter) {
          this.presenter.onRemove(i);
        }
      }
      if (e.target.type === "checkbox") {
        const i = parseInt(e.target.parentElement.id);
        console.log("checkeando ", i);
        if (this.presenter) {
          this.presenter.onToggle(i);
        }
      }
    });

    this.ul.addEventListener("input", (e) => {
      if (e.target.contentEditable === "true") {
        tmpText = e.target.innerText;
      }
    });

    this.ul.addEventListener("focusout", (e) => {
      if (tmpText && this.presenter) {
        const i = parseInt(e.target.parentElement.id);
        console.log("Editando ", i, " con texto ", tmpText);
        this.presenter.onEdit(i, tmpText);
        tmpText = "";
      }
    });

    return this.ul;
  }

  _buildTodo(todo, i) {
    const li = _make("li");
    li.id = `${i}`;

    const checkbox = _make("input");
    checkbox.type = "checkbox";
    checkbox.checked = todo.done;

    const text = _make("span");
    text.textContent = todo.text;
    text.contentEditable = true;
    if (todo.done) {
      text.classList.add("done");
    }

    const delButton = _make("button", "delete");
    delButton.innerHTML = "&#x274C;";

    li.append(checkbox, text, delButton);
    return li;
  }

  render(todos) {
    this.ul.textContent = ""; // Truco para vaciar la lista
    this.ul.append(...todos.map(this._buildTodo.bind(this)));
  }
}
