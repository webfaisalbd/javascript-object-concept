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




### `object-loop`

```javascript

const bottle = {
    color: 'yellow',
    hold: 'water',
    price: 50,
    isCLeaned: true
}


// for(const num in numbers) 
// for in use korte hobe-> (object)

// object er property
for(const i in bottle){
    // console.log(i);
}


// object er value
for(const i in bottle){
    // console.log(bottle[i]);
}

// object er property and value 
for(const i in bottle){
    // console.log(i,bottle[i]);
}


// for of er sathe keys use kore object loop kora jay 
const keys = Object.keys(bottle);
console.log(keys);
for(const i of keys){
    console.log(bottle[i])
}


```

---




### `object-compare`

```javascript

const first = { a:1 }
const second= { a: 1}
const third=first;

// object reference integrity 
// if(first == second){
//     console.log("objects are equal");
// }
// else {
//     console.log("objects are different");
// }

// output: objects are different




// after stringify, we can compare but first  object er sob property er position jodi second object er sob property er position er sathe na mile, taile hobe na.

const student1={salary: 10000, dept: "cse"};
const student2={salary: 10000, dept: "cse"};

// console.log(JSON.stringify(student1)); 
// console.log(JSON.stringify(student2)); 

if(JSON.stringify(student1)==JSON.stringify(student2)){
    // console.log("equal"); 
}
else {
    // console.log("not equal");
}



// previous code, just position change
// const student3={salary: 10000, dept: "cse"};
// const student4={dept: "cse",salary: 10000};

// console.log(JSON.stringify(student3));
// console.log(JSON.stringify(student4));

// if(JSON.stringify(student3)==JSON.stringify(student4)){
//     console.log("equal");
// }
// else {
//     console.log("not equal");
// }



function compareObject(object1,object2){
    if(Object.keys(object1).length != Object.keys(object2).length){
        return false;
    }
    for (const key in object1){
        if(object1[key]!= object2[key]){
            return false;
        }
    }
    return true;
}

const human1={salary: 10000, dept: "cse"};
const human2={dept: "cse",salary: 10000};
console.log(compareObject(human1,human2));

```

---





### `this keyword`

> firstSkill normal function er jonno, this output ta, student er all property gula pay 

> secondSkill arrow function er jonno, this output ta, tar immediate level student er all property pay na. tar uporer level pay. eikhane tar uporer level hosse, window. 

> thirdSkill normal function er vitore myArrow namer ekta arrow function ase, arrow function er khetre same rules, this output ta, tar immediate level thirdSkill er  property pay na. tar uporer level  er all property pay. eikhane tar uporer level hosse, student. 

> add() function jodi index.html er kono event er moddhe thake call kora hoy, jmn---> <input type="text" onkeydown="add()"> ; tahole add normal niyome hobe. Jemon-> add() function  window te ase, tai this er output hobe, window.

> add() function jodi index.html er kono event er moddhe thake call kora na hoy, jmn---> <button onclick="console.log(this)">Click Me</button> ; tahole add normal niyome hobe na. eitar output hobe, oi element ta. jemon eikhetre <button onclick="console.log(this)">Click Me</button> hobe output 


```javascript

const student = {
    id: 101,
    name: "faisal",
    firstSkill: function(id,name){
        console.log("My name is "+this.name);
        console.log(this);
    },
    secondSkill: () => {
        console.log(this);
    },
    thirdSkill: function(){
        const myArrow= () => 
            console.log(this);
            myArrow();
        
    }
     
}

function add(){
    console.log(this);
}



```



---


