console.log("we are learning objects in javascript")

const person={
     name:"ali raza",
     rollno:100044,
     phone:"vivo y03",
     salary:100000
}
console.log(person.name)

const smartphone={
    name:"vivo",
    camera:"128px",
    baattery:"5000mah",
    rom :"64gb",
    ram:"4gb ",
    charger:"5000mah"
}
console.log(smartphone)

const smartphone2={
    ...smartphone,
    name:"galaxy"
}
console.log("smartphone 2 is ",smartphone2)