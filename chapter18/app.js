//rest paremeter
const data = (...num ) =>{
    ///console.log(num);
    return num.map(number => number*2);
};

const result = data(1,2,3,4,5);
console.log(result);

//spread

const people = {name:'yen', age:26};
const family = {...people, location:'hcm'};
console.log(family);