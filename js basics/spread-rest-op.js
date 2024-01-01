// spread operator is used to copy values of one array item or object to another array or object
//spread operator format -> [...arr_name/object_name]

//using slice() to copy array
const t1 = ['Hi','Hello','Bye'];
const t2 = t1.slice(); //slice is used to copy one array to another
t2.push('Nigga');
console.log(t1);
console.log(t2);

//using spread operator to copy values of one array to another
const t3 = [...t1];
console.log(t3);
t2.push("Nigga");
console.log(t3);

//before using rest operator to pass arguments
const a1 = (arg1,arg2,arg3) => {
    return [arg1,arg2,arg3];
}
console.log(a1(1,2,3));
console.log(a1(1,2,3,4)); // 4 does not get returned because only 3 agrguments accepted

//after using rest operator to pass arguments
const a2 = (...args) =>{
    return args;
}
console.log(a2(1,2,3,4,5,6));
