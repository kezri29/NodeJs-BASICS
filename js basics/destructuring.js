//basic method to have the property value of one obj to a var
const p = {names:'Kesari'};
const name = p.names;
console.log(name);

//using destructuring method
const {names} = p ; //no need for .name extension
console.log(names); //not only for objects but also can be used for arrays

