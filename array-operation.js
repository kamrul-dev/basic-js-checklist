// 8. Declare an array. number of elements. 4th position elements update or change, add or remove elements. check whether specific value exists in the array

let arr = [1, 5, 4, 6, 9, 7, 15];

//=========================================
//number of elements
// console.log(arr.length); 

//=========================================

// update 4th position elements
/* arr[3] = 15;
console.log(arr); */

//=====================================

// add  element inside the array
/* arr.push(20);
console.log(arr); */

//====================================
// remove element from an array
/* arr.pop();
console.log(arr); */
//====================================

// check element is exist or not
let check = arr.includes(100);
if(check){
    console.log('found')
}
else{
    console.log('not found');
}

//===============================

