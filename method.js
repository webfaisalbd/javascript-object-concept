const student = {
    // property 
    id:101,
    major: "mathematics",
    subject: ['english','bangla','calculus'],
    bestFriend: {
        name: 'Sakib',
        major:'software'
    },
    balance: 40000,
    // method
    takeExam: function(){
        console.log(this.bestFriend.name+" is  "+'taking exam');
    },
    // method
    treatDey: function(cost,tips){
        this.balance=this.balance-cost-tips;
        return this.balance;
    }

}

// student.takeExam(); 
console.log(student.treatDey(500,50));