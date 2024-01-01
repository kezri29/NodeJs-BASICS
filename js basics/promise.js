//promise is being used to handle asynchronous functions
//promise is also used whenever we dont know what response will be given
// network request-success or failure

//basic promise code
const myPromise1 = new Promise(
    (myResolve,myReject) =>{
        myResolve();
})
console.log(myPromise1);

//promise code that sends data
const myPromise2 = new Promise(
    (myResolve,myReject) =>{
        myResolve('Kesarikumaran');
})
myPromise2.then((name)=>{
    console.log(name);
}).catch(()=>{
    console.log('Failed');
})


//async code that sends data
const myPromise3 = new Promise(
    (myResolve,myReject) =>{
        setTimeout(()=>{
            myResolve('Kesarikumaran');
        },2000);        
})
myPromise3.then((name)=>{
    console.log('Hi');
    console.log(name);
}).catch(()=>{
    console.log('Failed');
})


