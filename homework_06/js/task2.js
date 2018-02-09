var koefEuroToUAH = 33.8565;
var koefDollarToUAH = 27.4609;
var amountOfEuro = parseFloat(prompt("Iput amount of euro please: ", '')); 
var amountOfDollar = parseFloat(prompt("Iput amount of dollar please: ", '')); 

if(amountOfEuro>=0&&amountOfDollar>=0)
    {
        var euroToUAH = (amountOfEuro*koefEuroToUAH).toFixed(2);
        var dollarToUAN = (amountOfDollar*koefDollarToUAH).toFixed(2);
        var koefEuroToDollar = (koefEuroToUAH/koefDollarToUAH).toFixed(2);

        console.log(amountOfEuro+" euros are equal "+euroToUAH+" UAH, "+amountOfDollar+" dollars are equal "+dollarToUAN+" UAH, one euro is equal "+koefEuroToDollar+" dollars.");
    }
else console.log('Incorect data');
