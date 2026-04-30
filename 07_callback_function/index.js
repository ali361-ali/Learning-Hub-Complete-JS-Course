console.log("we ara learning callback function injavascrit")

const print=()=>
{
    console.log("printing press ")
}

const print2=()=>
{
    console.log("printing press2 ")
}
const print3=()=>
{
    console.log("printing press3 ")
}

const test=(name ,callback)=>{
    console.log("inside the test function ",name)
    callback();
}

test("ali raza",print3)
