console.log("we are learning scope of variable")

let globalvar=10
let display=()=>
{
    console.log("inside func",globalvar)
    let localvar=90
    console.log("inside function",localvar)

}
display()
console.log("outerfunc",globalvar)
//console.log("outer local var",localvar) is not defined 