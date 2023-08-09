function permutecount(word){
	const alphabetDictionary = {};

	// Loop through the alphabet characters and set the values to 0
	for (let i = 65; i <= 90; i++) {
	const letter = String.fromCharCode(i);
	alphabetDictionary[letter] = 0;
	}

	// Output the generated dictionary
	console.log(alphabetDictionary);
	
}
permutecount("now");