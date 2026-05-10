let str="aliraza rajar"

//length
console.log(str.length)

//toUpperCase
// string are immutable
console.log(str)

console.log(str.toLocaleUpperCase())
console.log(str)

//toLowertCase
// string are immutable 
let arr1="ALI RAZA "
console.log(arr1)
console.log(arr1.toLocaleLowerCase())
console.log(arr1)

//Includes

let arr2="aliraza"
console.log(arr2)
console.log(arr2.includes('p'));
console.log(arr2.includes('a'));


// INDEX OF


let s="ali raza"
console.log(s)
console.log(s.indexOf('o'))
console.log(s.indexOf('i'))


/// trim
let st="   ali      raza     "
console.log(st)
console.log(st.trim())


//substring

let str1="mastery course of javascript on youtube channel"
let substring=str1.substring(5,16)
console.log(substring)

//slice

let str2="ali raza rajar"
console.log(str2.slice(3,7))


///replace 
let str3="ali"
console.log(str3.replace("ali","raza"))
console.log(str3)

//split

let str4="ali raza rajar"
console.log(str4.split("   ,  "))
console.log(str4)

//charAt

let str5="aliraza"
console.log(str5.charAt(0))