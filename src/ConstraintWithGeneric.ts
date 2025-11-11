// Constraint -> ser strict rules for generic

type MustNeeded ={
    name: string,
    id: number
}

const printInfo = <T extends MustNeeded>(user:T) => {
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

const student3= {
    name: 'Razin',
    hasWatch: true,
    id: 1
}


console.log(printInfo(student3));