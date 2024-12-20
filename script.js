
//spread operator(...)
//you can copy an object or array into another object or array using


const person = {
    name: "johnny dep",
    age:60,
    location:"London",
};

const person2 = {...person , hobby:"dance"};
console.log(person2);

//array

const numbers = [1,2,3,4,5,6,7];
const numbers2 = [...numbers,8,9,10];
console.log(numbers2);



//rest parameter(...)

function display(...num){
    console.log(num);

}

display(10,2);
display(10,20,30);
display(10,20,30,40);

//rest parameter returns the output as an array;

//write a function that calculation 


function sumAll(...number) {
//   console.log(num);
let sum = 0;
for(let n of number){
    sum += n;
}
return sum;
 
}

console.log(sumAll(10, 20, 30, 40));