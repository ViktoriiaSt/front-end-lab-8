var firstSide = parseFloat(prompt("Iput fisrst side please: ", '')); 
var secondSide = parseFloat(prompt("Iput second side please: ", '')); 
var thirdSide = parseFloat(prompt("Iput third side please: ", '')); 

if(firstSide>0&&secondSide>0&&thirdSide>0&&(((firstSide+secondSide)>thirdSide)||((firstSide+thirdSide)>secondSide)||((secondSide+thirdSide)>firstSide)))
    {
        var halfOfPerimeter = (firstSide + secondSide + thirdSide)/2;
        var square = Math.sqrt(halfOfPerimeter*(halfOfPerimeter-firstSide)*(halfOfPerimeter-secondSide)*(halfOfPerimeter-thirdSide)).toFixed(2)*1;
        if((Math.pow(firstSide,2)==Math.pow(secondSide,2)+Math.pow(thirdSide,2)) || (Math.pow(secondSide,2)==Math.pow(firstSide,2)+Math.pow(thirdSide,2)) || (Math.pow(thirdSide,2)==Math.pow(secondSide,2)+Math.pow(firstSide,2))){
            print("right triangle", square);
        }
        else if(firstSide==secondSide==thirdSide){
                print("equilateral", square);
            }
        else if((firstSide==secondSide&&firstSide!=thirdSide) || (firstSide==thirdSide&&firstSide!=secondSide) || (secondSide==thirdSide && secondSide!=firstSide)){
                    print("isosceles", square);
                }
        else if(firstSide!=secondSide&&firstSide!=thirdSide&&secondSide!=thirdSide){
                    print("scalene", square);
                }
    }
    else{
        console.log("Incorrect data");
    }

function print(typeOfTriangle, squre){
    console.log("Type of triangle is "+typeOfTriangle+" and square is "+squre);
}