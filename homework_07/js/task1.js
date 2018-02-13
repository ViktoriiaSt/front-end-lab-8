var amountOfRows = (parseFloat(prompt("Enter INTEGER number from 1 to 20 including:",''))).toFixed(2)*1;
if((amountOfRows%(amountOfRows.toFixed(0))==0)&&amountOfRows>0&&amountOfRows<=20){
    for(var k=0; k<amountOfRows;k++){
        var line = "";
        for(var j=0; j<amountOfRows-k; j++){
            line+="   ";
        }
        for(var m=1; m<=k*2+1; m++){
            line+= "[~]";
        }
        console.log(line);
    }
}
else console.error('Incorect data');