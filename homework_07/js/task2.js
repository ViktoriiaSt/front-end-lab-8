var isPlaying = confirm('Do you want to play a game?');
var randomNumber = Math.floor(Math.random()*5);
var isPlayingGame = true;
var chosenNumber;
var maxNumberToChoose = 5;
var maxAttachment = 3;
var price = 10;

if( isPlaying == true ) {
	while(isPlayingGame) {
		var randomNumber = Math.floor(Math.random() * 5 );
		chosenNumber = prompt(`Choose number from 0 to ${maxNumberToChoose} \nAttachment left: ${maxAttachment} \nPrice: ${price}$`);
		if ( chosenNumber == randomNumber ) {
			console.log('You win ' + price + '$');
			alert(`You win ` + price + '$')
			isPlaying = confirm('Do you want to play game one more time?');
			if ( isPlaying == true ) {
				isPlayingGame = true;
				price*=3;
				maxNumberToChoose*=2;
			} else {
				console.log('Thank you for game:)');
				isPlayingGame = false;
			}
		} else {
			alert('try one more time');
			chosenNumber = prompt(`Choose number from 0 to 5 \nAttachment left: ${maxAttachment - 1} \nPrice: ${price / 2}$`);
			if ( chosenNumber == randomNumber ) {
				console.log('You win ' + price / 2 + '$');
				alert(`You win ` + price / 2 + '$')
				isPlaying = confirm('Do you want to play game one more time?');
				if ( isPlaying == true ) {
					isPlayingGame = true;
					price*=3;
					maxNumberToChoose*=2;
				} else {
					console.log('Thank you for game=)');
					isPlayingGame = false;
				}
			} else {
				alert('try one more time');
				chosenNumber = prompt(`Choose number from 0 to 5 \nAttachment left: ${maxAttachment - 2} \nPrice: ${(price / 5)}$`);
				if ( chosenNumber == randomNumber ) {
					console.log('You win ' + price / 5 + '$');
					alert(`You win ` + price / 5 + '$')
					isPlaying = confirm('Do you want to play game one more time?');
				if ( isPlaying == true ) {
					isPlayingGame = true;
					price*=3;
					maxNumberToChoose*=2;
				} else {
					console.log('Thank you for game (^^)');
					isPlayingGame = false;
				}
				} else {
					alert('You Loose');
					isPlaying = confirm('Do you want to play game one more time?');
					if ( isPlaying == true ) {
						isPlayingGame = true;
						price*=3;
						maxNumberToChoose*=2;
					} else {
						console.log('Thank you for game!');
						isPlayingGame = false;
					}
				}
			} 
			
		}
	}
} 
else {
	console.log('You did not become a millionaire');
}