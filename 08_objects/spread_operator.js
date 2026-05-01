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