var forEach = function(object, fn){
  var k = object.length;
  for(let i = 0; i < k; i++) {
  return fn(object[i]);
  }
}

module.exports = {forEach};
