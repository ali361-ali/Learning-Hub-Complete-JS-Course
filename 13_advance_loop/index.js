const phone={
    name:"vivo",
    brand:"vivo y03",
    camera:"20mp",
    ram:"4gb",
    rom:"64gb"
}
///for in
 
for (let key in phone)
{
    console.log(key,phone[key])
}

//for of
let arr=[12,33,44,55,66,77]
for (let key of arr)
{
    console.log(key)
}

//foreach

let arrr=[2,33,44,55,66,777]
arrr.forEach((value,index,arrr)=>console.log(value,index,arrr))

