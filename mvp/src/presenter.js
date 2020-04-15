export default class Presenter {
  constructor(model, view) {
    this.model = model;
    this.view = view;
    this.view.setPresenter(this);
    this.model.onChange(this.onModelChange.bind(this));
  }

  onModelChange() {
    this.view.render(this.model.todos);
  }

  onAdd(text) {
    if (text) {
      this.model.add(text);
    }
  }

  onRemove(i) {
    this.model.remove(i);
  }
}
