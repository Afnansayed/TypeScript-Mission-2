



const printInfo = <T>(user:T) => {
    return {
        courser:"Next lavel web development",
        ...user
    }
}



const student= {
    id: 1,
    name: 'Razin',
    age: 23,
    department: 'CSE',
    shift: 'Day',
}
const student2= {
    id: 1,
    name: 'Razin',
    age: 23,
    department: 'CSE',
    shift: 'Day',
    bike: {
        name:"pulser",
        color:"red"
    }
}

// console.log(student2);



const tuple = <T, X>(value:T , value2:X) => [value , value2];

console.log(tuple<string , number>('Razin' , 23));
console.log(tuple<number , number>(23 , 23));

