
console.log("we are learning array in javascript")

let arr=["aliraza",100,4,4.4,"@"]
let number =["ali",111,33,34,445,666,99
]



number.push("rajara") 
number.shift()
number.unshift("6112l")
number.pop()
console.log(arr.length)

console.log(number[5])
console.log(arr)

for(let i=0;i<number.length;i++)
{
    console.log(number[i])
}
//find
let arrr=[1,2,3,4,5,6]
let arrr2=[7,8,9]
let found=arrr.find((el)=>el>5);
console.log(found);


//includes
console.log(arrr.includes(5))


//merged
let merged=arrr.concat(arrr2);
console.log(merged)

let arrrr=["bannana","cherry","apple"]
let joined=arrrr.join(",               p")
console.log(joined)

///splicee 

let ar=[16,21,13,2,15,7,3,99]

ar.splice(3,3,"ali")
console.log(ar)
//slice 
let sliced=ar.slice(2,5)
console.log(sliced)

//sort

let ar1=[16,21,13,2,15,7,3,99]
ar1.sort((a,b)=>a-b)
console.log(ar1)
//find index 
let index=ar1.findIndex((el)=>el>10)
console.log(index)

//from

let str ="aliraza";
let a=Array.from(str)
console.log(a)
console.log(Array.isArray([1,2,3,5]))
console.log(Array.isArray("ali"))

