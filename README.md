# `Javascript Object Concept`

### `create object`

```javascript
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



### `keys values entries seal freeze`

```javascript

const student= {name:'Sakib',id:101, dept: 'cse', batch: 15, major: 'software'}

// find property keys
const allKeys=Object.keys(student);
// console.log(allKeys);


// find property values
const allValues=Object.values(student);
// console.log(allValues);


// find property keys-values pairs 
const allPair=Object.entries(student);
// console.log(allPair);



// delete a property in an object 
delete student.major;
// console.log(student);



// add a property in an object 
student.job=false;
// console.log(student);



// seal an object
// seal korle,
// 1. property delete kora jabe na
// 2. property add kora jabe na
// 3. property value change kora jabe


Object.seal(student);

//try to change id value
student.id=2;

// try to delete job property
delete student.job;

student.cgpa=3.8;
// console.log(student);



// freeze an object
// freeze korle,
// kono kisui kora jabe na. jemon ase, temon e thakbe 
// 1. property delete kora jabe na
// 2. property add kora jabe na
// 3. property value change kora jabe na
Object.freeze(student)

//try to change id value
student.id=5;

// try to delete job property
delete student.job;

student.cgpa=3.8;
console.log(student);



```

---