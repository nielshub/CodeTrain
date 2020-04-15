import Model from "./model";
import View from "./view";
import Presenter from "./presenter";

const model = new Model();
const view = new View();
const presenter = new Presenter(model, view);

window.model = model;

