const todos = [
  { text: "Corregir la tarea 1", done: true },
  { text: "Preparar bundles", done: false }
];

// TODO: Botón de "clear checked" que borra los marcados

const ul = document.getElementById('todos');
const form = document.forms[0];
const textinput = document.querySelector('form input[name="text"]');

form.addEventListener('submit', event => {
  event.preventDefault();
  todos.push({ text: textinput.value, done: false });
  render();
  textinput.value = '';
});

const renderTodo = (todo) => {
  let li = document.createElement('li');
  li.innerHTML = `
    <label>
      <input type="checkbox" ${todo.done ? 'checked' : ''}>
      ${todo.text}
    </label>
  `;
  const label = li.querySelector('label');
  const checkbox = li.querySelector('input[type="checkbox"]');

  if (todo.done) {
    label.classList.add('checked');
  }

  //
  // Corrección al fallo en clase: el evento que hay que detectar es 'input' que
  // indica cuando ha habito "entrada del usuario" como que el label está
  // asociado al checkbox también produce este evento
  //
  checkbox.addEventListener('input', event => {
    console.log(event);
    todo.done = !todo.done;
    // TODO(hard): No repintar todo sino solo este elemento cuando clicas
    console.log(todos);
    render();
  });
  
  return li;
}

const render = () => {
  ul.textContent = '';
  ul.append(...todos.map(renderTodo));
}

render();
