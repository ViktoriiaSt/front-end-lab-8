function reverseNumber(number){
    var reversed = 0;
    while (number != 0) {
        reversed *= 10;
        reversed += number % 10;
        number -= number % 10;
        number /= 10;
    }
    return reversed;
 }
console.log(reverseNumber(123));//321
console.log(reverseNumber(-456));//-654
console.log(reverseNumber(1000));//1