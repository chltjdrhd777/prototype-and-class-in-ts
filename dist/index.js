"use strict";
/*interface him {
    name: string;
    age : number;
    gender : string;
}*/
Object.defineProperty(exports, "__esModule", { value: true });
class him {
    constructor(name, age, gender) {
        this.name = name;
        this.age = age;
        this.gender = gender;
    }
}
//class is a function that uses prototype object. 
//In my understanding, first, prototype is object which is made when I set any function. For example, when I make "function a(){}", then there is also prototype which contains constructor and _proto_.
//one chain(or connection ) is realized. For example, in "const person = new a();" var person has _proto_, and new a(); possesses a object called "a.prototype". I can freely add some property like any object such as "a.prototype.name = "jon". 
//because "var person" and "new a()" have "_proto_" they are connected. In other words, I can use the property of a.prototype. for example, person.name = "jon"
//class is a kind of preset of prototype. if I use a constructor by class him, it means such constructors would inherit the property of class him.
/*const person = {
    name: "anderson",
    age:20,
    gender: "male"
}*/
const lynn = new him("Lynn", 18, "female");
const sayHi = (person) => {
    return `Hello ${person.name}, you are ${person.gender}, you are a ${person.age}`;
};
console.log(sayHi(lynn));
//# sourceMappingURL=index.js.map