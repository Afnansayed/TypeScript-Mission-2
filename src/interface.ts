


interface User {
    name: string;
    age: number;
    hobbies: string[] ;
}

interface UserWithRole extends User {
    role: string;
}



const userWithRole: UserWithRole = {
    name: 'Razin',
    age: 23,
    hobbies: ['coding', 'cricket', 'sleeping'],
    role: 'Admin'
}

// console.log(userWithRole);


//! Basicall interface is used to define the shape of an object like type alias. But interface can be extended. Type alias  has also some advantange over interface like type alias can be used in premitive type data. Defining function is more easy with type alias.

// eaxmple 

type Test = string | number | boolean;
const test:Test = 'Razin';

type FunctionType = (name: string , age: number) => string;
const userF: FunctionType = (name ,age) => name

console.log(userF('Razin',4 ));


// but with interface 

interface FunctionInterface {
    (name: string , age: number): string;
}
const userF2: FunctionInterface = (name ,age) => name



// arrat 
type Arr = string[] | number[] | boolean[] ;
const arr:Arr = ['sdf' ,'ert', ];
console.log(arr);


//with interface 

interface Arrinterface{
     [index: number]: string | number | boolean; // little more complex
}

const arr2:Arrinterface = ['sdf' ,'ert', false ];
console.log(arr2);