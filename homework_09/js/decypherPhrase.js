function decypherPhrase(keyElement, valueElement){
  let decypherKey = {};
  for (element in keyElement){
    decypherKey[keyElement[element]] = element;
  }
  let result = cypherPhrase(decypherKey, valueElement);
  return result;
}