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



