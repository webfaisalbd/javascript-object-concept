# `Javascript Object Concept`

### `create object`

```
// 1.object literal 
const student = { name: 'Faisal', id: 16141111, department: 'cse'}



// 2.object constructor
const person = new Object();

// pass korte hobe, onno kono object k
const human = Object.create(student)
// console.log(human.name);



// 3.class diye object 
class People {
    constructor(name,id){
        this.name=name;
        this.id=id;
    }
}
const people1= new People("Human",65677)
// console.log(people1);



// 4.function diye object
// function diye class er kaj ta kore fela
function Manush(name){
    this.name=name;
}
const man=new Manush('Golam Kader');
console.log(man);


```

---

