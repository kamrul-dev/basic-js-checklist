// 10. You have an array of number . display only the numbers bigger than 80


let numbers = [2, 4, 12, 80, 81, 90, 100];
for(let i = 0; i <= numbers.length; i++){
    let elements = numbers[i];
    if(elements > 80){
        console.log(numbers[i]);
    }
}