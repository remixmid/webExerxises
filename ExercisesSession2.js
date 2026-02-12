//Exercise 1

function squareList(array) {
    return array.filter(n => n > 0 && n % 1 == 0).map(n => n * n);
}

//Solution
function squareList(array) {
    return array.filter(x => x > 0 && x % 1 === 0).map(x => x * x)
}

//Tests
const squaredIntegers = squareList([-3, 4.8, 5, 3, -3.2])
console.log(squaredIntegers)

//Exercise 2
let arrays = [[1, 2, 3], [4, 5], [6]]

function flattenArrays(array) {
    //return array.reduce((a, b) => a.concat(b));
    return array.reduce((a, b) => [...a, ...b], []);
}

//Solution
console.log(arrays.reduce((flat, current) => [...flat, ...current], []))

//Tests
flattenArrays(arrays)
console.log(flattenArrays(arrays))

//Exercise 3
function loop(n, testFunc, updateFunk, body) {
    if (!testFunc(n)) {
        return;
    }
    body(n);
    loop(updateFunk(n), testFunc, updateFunk, body)
}

//Solution
function loop(start, test, update, body) {
    for (let i = start; test(i); i = update(i)) {
        body(i)
    }
}

//Tests
loop(
    3,
    n => n > 0,
    n => n - 1,
    console.log
)

//Exercise 4
function alphabeticalOrder(array) {
    return [...array].sort((a, b) => (a === b ? 0 : a < b ? -1 : 1));
}

//Solution
function alphabeticalOrder(array) {
    return [...array].sort((a, b) => (a === b ? 0 : a < b ? -1 : 1))
}

//Tests
const letters = ["a", "d", "c", "a", "z", "g"]

console.log(alphabeticalOrder(letters))
// → ["a", "a", "c", "d", "g", "z"]
console.log(letters)
// → [ "a", "d", "c", "a", "z", "g"]

//Exercise 5
function urlSlug(title) {
    return title.trim().split(" ").join("-").toLowerCase();
}

//Solution
function urlSlug(title) {
    return title.toLowerCase().trim().split(" ").join("-")
}

//Tests
console.log(urlSlug("A Mind Needs Books Like A Sword Needs A Whetstone"))
// → a-mind-needs-books-like-a-sword-needs-a-whetstone


//Exercise 6
function checkPositive(array) {
    return array.some(n => n > 0);
}

//Solution
const numbers = [10, 50, 8, 220, 110, 11]

console.log(numbers.some(e => e < 10))
//Checks if in array is value < 10

//Tests
console.log(checkPositive([1, 2, 3, -4, 5]))
// → true
console.log(checkPositive([-1, -2, -3, -4, -5]))
// → false
console.log(checkPositive([1, -2, -3, -4, -5]))
// → true

//Exercise 7
function every(array, test) {
    return !array.some(n => !test(n));
}

//Solution
function every(array, predicate) {
    for (let element of array) {
        if (!predicate(element)) return false
    }
    return true
}

function every2(array, predicate) {
    return !array.some(element => !predicate(element))
}

//Tests
console.log(every([1, 3, 5], n => n < 10))
// → true
console.log(every([2, 4, 16], n => n < 10))
// → false
console.log(every([], n => n < 10))
// → true

