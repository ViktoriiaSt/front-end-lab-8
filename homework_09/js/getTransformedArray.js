function getTransformedArray(array, transformingFunction){
	let newArray = [];
	forEach(array,function(elem){
		newArray.push(transformingFunction(elem));
	});
	return newArray;
}