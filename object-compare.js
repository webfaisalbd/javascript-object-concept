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