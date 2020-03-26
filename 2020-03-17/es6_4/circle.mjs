
export default class Circle {
    constructor(r) {
        this.r = r;
    }
}

export function area(circle) {
    const { r } = circle;
    return Math.PI * r * r;
}

export function circumference(circle) {
    return Math.PI * 2 * circle.r;
}