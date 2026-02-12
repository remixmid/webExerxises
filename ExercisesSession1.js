//Exercise 1

let x = "#"
for (let i = 0; i < 7; i++) {
    console.log(x);
    x += "#";
}

//Solution
for (let line = "#"; line.length < 8; line += "#") {
    console.log(line)
}

//Exercise 2

for(let i = 0; i <= 100; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
        console.log("FizzBuzz")
    } else if (i % 3 == 0) {
        console.log("Fizz")
    } else if (i % 5 == 0) {
        console.log("Buzz")
    } else {
        console.log(i)
    }
}

//Solution
for (let n = 1; n <= 100; n++) {
    let output = ""
    if (n % 3 == 0) output += "Fizz"
    if (n % 5 == 0) output += "Buzz"
    console.log(output || n)
}

//Exercise 3

function min(x, y) {
    if (x < y) {
        return x
    } else {
        return y
    }
}

//Solution
function min(a, b) {
    if (a < b) return a
    else return b
}

//Test
console.log(min(0, 10))
console.log(min(0, -10))


//Exercise 4
function countChar(a, b = "B") {
    let count = 0;
    for (let i = 0; i < a.length; i++){
        if (a[i] === b) count++
    }
    return count
}

//Solution
function countChar(string, ch) {
    let counted = 0
    for (let i = 0; i < string.length; i++) {
        if (string[i] == ch) {
            counted += 1
        }
    }
    return counted
}

function countBs(string) {
    return countChar(string, "B")
}

//Test
console.log(countChar("BBC"))
console.log(countChar("kakkerlak", "k"))

//Exercise 5

function range(start, end){
    let output = []
    if (start > end) {
        for (let i = start; i >= end; i--) {
            output.push(i)
        }
    } else {
            for(let i = start; i <= end; i++) {
                output.push(i)
            }
        }
    return output
}

function sum(arr) {
    let result = 0
    for (let i = 0; i < arr.length; i++) {
        result += arr[i]
    }
    return result
}

//Solution
function range(start, end, step = start < end ? 1 : -1) {
    let array = []

    if (step > 0) {
        for (let i = start; i <= end; i += step) array.push(i)
    } else {
        for (let i = start; i >= end; i += step) array.push(i)
    }
    return array
}

function sum(array) {
    let total = 0
    for (let value of array) {
        total += value
    }
    return total
}

//Test
console.log(range(1, 10))
console.log(range(5, 2, -1))
console.log(sum(range(1, 10)))

//Exercise 6

function range(start) {
    return function(end) {
        let output = []
        if (start < end) {
            for(let i = start; i <= end; i++){
                output.push(i)
            }
        } else {
            for (let i = start; i >= end; i--) {
                output.push(i)
            }
        } 
        return output
    }
}

function sum(array) {
    let total = 0
    for (let value of array) {
        total += value
    }
    return total
}

//Solution
function range(start, end, step = start < end ? 1 : -1) {
    if (end === undefined) return end => range(start, end)
    let array = []

    if (step > 0) {
        for (let i = start; i <= end; i += step) array.push(i)
    } else {
        for (let i = start; i >= end; i += step) array.push(i)
    }
    return array
}

//Test
let rangeFrom3To = range(3)
let rangeFrom7To = range(7)

console.log(rangeFrom3To(3))
console.log(rangeFrom3To(8))
console.log(rangeFrom7To(9))

//Exercise 7

function reverseArray(array) {
    let result = []
    for (let i = array.length - 1; i >= 0; i--) {
        result.push(array[i])
    }
    return result
}

function reverseArrayInPlace(array) {
    let buffElement
    for (let i = 0; i < array.length / 2; i++) {
        buffElement = array[array.length - 1 - i]
        array[array.length - 1 - i] = array[i]
        array[i] = buffElement
    }
    return array
}

//Solution
function reverseArray(array) {
    let output = []
    for (let i = array.length - 1; i >= 0; i--) {
        output.push(array[i])
    }
    return output
}

function reverseArrayInPlace(array) {
    for (let i = 0; i < Math.floor(array.length / 2); i++) {
        let old = array[i]
        array[i] = array[array.length - 1 - i]
        array[array.length - 1 - i] = old
    }
    return array
}

//Test
console.log(reverseArray(["A", "B", "C"]))
let arrayValue = [1, 2, 3, 4, 5, 6]
reverseArrayInPlace(arrayValue)
console.log(arrayValue)

//Exercise 8

function arrayToList(array) {
    let list = null;
    for (let i = array.length - 1; i >= 0; i--) {
        list = {value : array[i], rest : list}
    }
    return list;
}

function listToArray(list) {
    let array = [];
    for (let i = list; list; list = list.rest) {
        array.push(list.value);
    }
    return array;
}

function prepend(element, list) {
    return list = {value : element, rest : list};
}

function nth(list, number) {
    if (number == 0) {
        return list.value;
    }
    list = list.rest;
    return nth(list, number - 1);
}

//Solution
function arrayToList(array) {
    let list = null
    for (let i = array.length - 1; i >= 0; i--) {
        list = { value: array[i], rest: list }
    }
    return list
}

function listToArray(list) {
    let array = []
    for (let node = list; node; node = node.rest) {
        array.push(node.value)
    }
    return array
}

function prepend(value, list) {
    return { value, rest: list }
}

function nth(list, n) {
    if (!list) return undefined
    else if (n == 0) return list.value
    else return nth(list.rest, n - 1)
}

//Test
console.log(arrayToList([10, 20]))
console.log(listToArray(arrayToList([10, 20, 30])))
console.log(prepend(10, prepend(20, null)))
console.log(nth(arrayToList([10, 20, 30]), 0))

//exercise 9
function deepEqual(obj1, obj2) {
    if (obj1 === obj2) {
        return true;
    }
    if (obj1 == null || typeof obj1  != "object" || obj2 == null || typeof obj2 != "object") {
        return false;
    }
    let keysObj1 = Object.keys(obj1);
    let keysObj2 = Object.keys(obj2);

    for (let key of keysObj1) {
        if (!keysObj2.includes(key) || deepEqual(obj1[key], obj2[key])) {
            return false;
        }
    }
} 

//Solution
function deepEqual(a, b) {
    if (a === b) return true

    if (a == null || typeof a != "object" || b == null || typeof b != "object") return false

    let keysA = Object.keys(a),
        keysB = Object.keys(b)

    if (keysA.length != keysB.length) return false

    for (let key of keysA) {
        if (!keysB.includes(key) || !deepEqual(a[key], b[key])) return false
    }

    return true
}

//Tests
let obj = { here: { is: "an" }, object: 2 }
console.log(deepEqual(obj, obj))
// → true
console.log(deepEqual(obj, { here: 1, object: 2 }))
// → false
console.log(deepEqual(obj, { here: { is: "an" }, object: 2 }))
// → true