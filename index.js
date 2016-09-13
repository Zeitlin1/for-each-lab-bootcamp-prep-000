// this lab wasnt working correctly the last time I tried to LEARN.
function iterativeLog(array) {
array.forEach((element, index) => {console.log(`${index}: ${element}`)})
}

function iterate(callback) {
  var array = ["Moe", "Larry", "Curly"]
  array.forEach(callback)
  return array
}

function doToArray(array, callback) {
array.forEach(callback)
}

function log(index, element){
console.log(`${index}: ${element}`)
}
