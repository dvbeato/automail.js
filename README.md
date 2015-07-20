# AUTOMAIL JS [![Build Status](https://travis-ci.org/dvbeato/automail.js.svg)](https://travis-ci.org/dvbeato/automail.js)

Automail JS is a prototype extension for js lang

# Installation

* Bower
```bower install -S automail```

# Table of extended Functions

1. [Array](#array)
1. [String](#string)

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

## String

 - **contains**
```javascript

console.log('automail'.contains('mail')); // => true
console.log('autoMail'.contains('mail')); // => false

// case insensitive
console.log('autoMail'.contains('mail', true)); // => true
```

 - **capitalize**
```javascript

console.log('automail'.capitalize()); // => 'Automail'
```

 - **startsWith**
```javascript

console.log('automail'.startsWith('auto')); // => true
console.log('AutoMail'.startsWith('auto')); // => false

// case insensitive
console.log('AutoMail'.startsWith('auto', true)); // => true
```

**[⬆ back to top](#table-of-extended-functions)**
