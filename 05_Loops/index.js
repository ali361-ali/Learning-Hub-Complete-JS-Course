//loops

const { use } = require("react")

//for loop

for(let i=0;i<5;i++ )
{
    console.log("ali raza ",i)
}

let n =3
for(let i=1;i<=10;i++){
    console.log(`${n}X${i} =`,n*i)
}


// while loop

let o=0
while(o<6)
{
    console.log(o)
    o++;
}

// do while loop

let l=9 
do{
    console.log("ali raza");
    l++
}while(l<5);


let sum=0
for(let j=0;j<5;j++)
{
    sum=sum+j;
}
console.log("sum is ",sum)
console.log("loops is ended")

// for of : used for strings and arrays

let str ="government college burewala"
let size=0
for (let k of str)
{
    console.log("k",k)
size++;
}
console.log("size of ",size)

//for in :used for objects

let student =
{
    name:"ali raza",
    rollno:100044,
    cgpa:3.5,
    semester:"5th"
};

for (let i in student){
    console.log("i",i,"values",student[i])
}

for(let h=0;h<1000;h++)
{
    if(h%2===0)
    {
console.log("h is",h)
    }
}
for(let h=0;h<1000;h++)
{
    if(h%2!==0)
    {
console.log("h is",h)
    }
}

//game number guess

// let Gamenum=50
// let useNum=prompt("guess the game number");
// while(useNum!=Gamenum)
// {
//     useNum=prompt("you entered wrong number .gues again")
// }
// console.log("congratulation")

//strings

