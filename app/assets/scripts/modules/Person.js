///////////// function syntax //////////////
// function Person(fullName, favColor) {
//     this.name = fullName;
//     this.favoriteColor = favColor;
//     this.greet = function () {
//         console.log("Hello, my name is " + this.name + " and my favourite color is " + this.favoriteColor + ".")
//     }
// }

///////////// class syntax //////////////
class Person {
    constructor(name, favoriteColor) {
        this.name = name;
        this.favoriteColor = favoriteColor;
    }
    greet() {
        console.log("Hello, my name is " + this.name + " and my favourite color is " + this.favoriteColor + ".");
    }
}


export default Person