function cypherPhrase(objElement, strElement) {
	var newArray = getTransformedArray(strElement, function(i) {
		return objElement[i] || i;
	});
	return newArray.join("");
}