// function hardTask() {
//     console.log('Hard task is started');
//     for (let i = 0; i < 10; i++) {
//         console.log(i)

//     }

//     console.log('Hard task is finished')
// }

// console.log('Start');

setTimeout (function (){
    console.log('Async operation is done');
}, 1000);

// hardTask();
// console.log('Finish');

// __________________________________________________

// const getData = new Promise((resolve, reject) => {
//     setTimeout(function() {
//         resolve(10);
//     }, 2000);
// });

// getData
//     .then(data => data + 10)
//     .then(updateData => {
//         console.log(updateData + 30);
//         return updateData; 
//     })
//     .then(updateData => console.log(updateData + 30));

// getData
//     .then(data => data + 10)       
//     .then(updateData => {
//         const result = updateData + 30;
//         console.log(result);
//         return result;             
//     })
//     .then(updateData => console.log(updateData + 30)); 

//     ___________________________________________________

const getData = new Promise ((resolve, reject)=>{
    setTimeout (function(){
        const randomNumber = Math.random();
        if(randomNumber > 0.5){
            resolve(randomNumber)
        } else {
            reject(randomNumber)
        }
    }, 2000)
})
getData
    .then(number => console.log(`Random number: ${number}`))
    .catch(error => console.log(`Error was trigered ${error}`))