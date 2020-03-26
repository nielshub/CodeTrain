
import Circle, { area as a, circumference } from './circle.mjs';

const c = new Circle(10);
console.log(c);
console.log(a(c));
console.log(circumference(c));
