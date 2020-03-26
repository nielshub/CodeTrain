const todos = [
  { text: "Corregir la tarea 1", done: false },
  { text: "Preparar bundles", done: false },
  { text: "Pedir neopreno", done: true },
  { text: "Pedir pizza", done: true },
  { text: "Pedir piezas", done: false },
  { text: "Comprar tomates", done: true }
];

const buttonclear = document.getElementById("clear");

const ul = document.getElementById("todos");
const form = document.forms[0];
const textinput = document.querySelector('form input[name="text"]');

buttonclear.addEventListener("click", event => {
  event.preventDefault();
  let todosclear = todos.filter(t => t.done === false);
  // todos = = todos.filter(t => t.done === false); Mejor opcion!
  todos.splice(0, todos.length);
  todosclear.forEach(t => todos.push(t));
  render();
});

form.addEventListener("submit", event => {
  event.preventDefault();
  todos.push({ text: textinput.value, done: false });
  render();
  textinput.value = "";
});

const renderTodo = todo => {
  let li = document.createElement("li");
  li.innerHTML = `
    <label>
      <input type="checkbox" ${todo.done ? "checked" : ""}>
      ${todo.text}
    </label>
  `;
  const label = li.querySelector("label");

  if (todo.done) {
    label.classList.add("checked");
  }

  //
  // Corrección al fallo en clase: el evento que hay que detectar es 'input' que
  // indica cuando ha habito "entrada del usuario" como que el label está
  // asociado al checkbox también produce este evento
  //

  // TODO(hard): No repintar todo sino solo este elemento cuando clicas

  label.addEventListener("input", toggleClassHandler("checked", todo));
  return li;
};

const toggleClassHandler = (_class, todo) =>
  function() {
    todo.done = !todo.done;
    if (this.classList.contains(_class)) {
      this.classList.remove(_class);
    } else {
      this.classList.add(_class);
    }
  };

const render = () => {
  ul.textContent = "";
  ul.append(...todos.map(renderTodo));
};

render();
