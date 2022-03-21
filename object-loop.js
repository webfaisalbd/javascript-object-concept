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
