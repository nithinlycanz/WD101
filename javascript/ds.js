let items = ["apple", "banana", "orange", "grape", "kiwi"];
// so we are calling the array with the index to get them in order as a callback as forEach
let logfruits = (value , index) => {
    let n = index + 1 ;
    console.log(n + ". "+ value)
}
let lol = items.forEach(logfruits); // apple banana orange grape kiwi
console.log(lol); // undefined
