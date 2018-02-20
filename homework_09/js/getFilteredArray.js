function getFilteredArray(array, filteringFunction){
	let newArray = [];
	forEach(array,function(elem){
		if(filteringFunction(elem)){
			newArray.push(elem);
		}
	});
	return newArray;
}