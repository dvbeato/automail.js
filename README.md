# AUTOMAIL JS [![Build Status](https://travis-ci.org/dvbeato/automail.js.svg)](https://travis-ci.org/dvbeato/automail.js)

Automail JS is a prototype extension for js lang

# Table of extended Functions

1. [Array](#array)

## Array

 - **contains**
```javascript

console.log([1,2,3].contains(2)); // => true
console.log([1,2,3].contains(9)); // => false
```

 - **first**
```javascript

console.log([1,2,3].first()); // => 1
console.log([].first()); // => null
```

 - **last**
```javascript

console.log([1,2,3].last()); // => 3
console.log([].last()); // => null
```

 - **size**
```javascript

console.log([1,2,3].size()); // => 3
console.log([].size()); // => 0
```

 - **isEmpty**
```javascript

console.log([1,2,3].isEmpty()); // => false
console.log([].isEmpty()); // => true
```

 - **removeAt**
```javascript

var array = [1,2,3];
console.log(array.removeAt(1)); // => 2
console.log(array); // => [1,3]
```

 - **remove**
```javascript

var array = [1,2,3];
console.log(array.remove(2)); // => 2
console.log(array); // => [1,3]
```

**[⬆ back to top](#table-of-extended-functions)**
