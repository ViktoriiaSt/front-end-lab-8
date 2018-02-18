 function getClosestToZero(...numbers){
    let x = 0;
    return numbers.sort((a,b) => Math.abs(x - a) > Math.abs(x - b) ) [0];
}
console.log(getClosestToZero(9, 5, -4, -9); );//-4