# Array
* JS arrays are zero-indexed
* length will return the count

# Methods

## from
* method creates a new, shallow-copied Array
* Syntax `Array.from(arrayLike[, mapFn[, thisArg]])`

## isArray
* Will return true if it is array otherwise false

# Mutator methods
These methods modify the array

## copyWithin
* Copies a sequence of array elements within the array, Array length won' change
* Syntax `arr.copyWithin(target[, start[, end]])`

## fill
* fills all the elements of an array from a start index to an end index with a static value
* Syntax `arr.fill(value[, start[, end]])`

## pop
* Removes the last element from an array and returns that element

## push
* adds one or more elements to the end of an array and returns the new length of the array

## reverse
* Reverses the order of the elements of an array

## shift
* method removes the first element from an array and returns that removed element

## unshift
* adds one or more elements to the beginning of an array and returns the new length of the array

## sort
* method sorts the elements of an array in place and returns the array
* default sort order is UTF-16 code units values
* Syntax `arr.sort([compareFunction])`

## splice
* changes the contents of an array by removing or replacing existing elements and/or adding new elements.
* `array.splice(start[, deleteCount[, item1[, item2[, ...]]]])`
* return an array containing the deleted elements

# Accessor methods

methods do not modify the array and return some representation of the array

# concat
* Returns a new array that is this array joined with other arrays and/or value