
/*
*# Key Differences

*| Aspect       | Primitive                | Non-Primitive              |
|--------------|--------------------------|----------------------------|
*| Storage      | Stored by value          | Stored by reference        |
*| Mutability   | Immutable                | Mutable                    |
*| Comparison   | Compared by value        | Compared by reference      |
*| Copying      | Value is copied          | Reference is copied        |
*| Examples     | number, string, boolean  | object, array, function    |
*/

//! primitive 

let isActive:boolean = true;

isActive = true;
const name:string = 'My name'
// console.log(name);

let user:undefined = undefined;

 user= undefined

//  console.log(user);


 // symbol
//!need to explore about symbol

// All primitive types:
//*let num: number = 10;
//*let str: string = "hello";
//*let bool: boolean = true;
//*let nul: null = null;
//*let undef: undefined = undefined;
//*let sym: symbol = Symbol("id");
//*let big: bigint = 100n;


// non primitive

//object , array , function

const person:{
    name: string;
    age: number;
   readonly organization: string;  //! we basicall user access modifier
//    organization: 'Abc group'; //* alternative
} = {
    name: 'Afnan sayed razin',
    age: 56,
    organization: 'Abc group'}



    // person.organization = 'read'

    // console.log(person);

    //! function
     function userF (name:string):string{
         return name
    }

    console.log(userF('jddfgh'));


    // const userF2 = (name: string):void => {
    //     return name;
    // }
    const userF2 = (name: string):string => {
        return name;
    }

    //* array
    //* tuple 

    //! const arr:(string | number)[] =['name ' , 345345 ,65 ,undefined , false];
     const arr:(string | number)[] =['name ' , 345345 ,65 ];

    //*  const arr2:[number , string] = ['sdfdf' , 678]
    const arr2:[number , string] = [4546,'dffg' ,]