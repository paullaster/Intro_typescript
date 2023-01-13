//Arrays in typescript should be of the same type: but they also use union type
let numArray =[1, 2]
numArray.forEach((el) => {
    console.log("Item "+el);
})

//tuples:
let t1: [id:number, name:string] = [1, "ochieng"];

//enums
const enum Sizes {Small, Medium, Large, XLarge};

let s1: Sizes = Sizes.Small;
console.log (s1);