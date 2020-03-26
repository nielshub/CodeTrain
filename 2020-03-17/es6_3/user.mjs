
export default class User {
    constructor(first, last, age) {
        this.first = first;
        this.last = last;
        this.age = age;
    }

    toJSON() {
        const { first, last, age } = this;
        JSON.stringify({ first, last, age });
    }
}
