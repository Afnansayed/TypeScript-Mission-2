


type funInterFace = (value: string | number) => string | number;
const getTypeOutput:funInterFace = (value) => {
       
    if(typeof value === 'string'){
        console.log(value , 'the type is string');
    }else if(typeof value === 'number'){
        console.log(value , 'the type is number');
    }else{
        console.log(value , 'the type is not string or number');
    }
    return value;
};

console.log((getTypeOutput('Afnan Sayed Razin') as string).split(' ').join('-'));
const num=(getTypeOutput(23) as number).toFixed(2);
console.log(num);