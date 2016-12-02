Zesty Sambar

Writing functions to learn how they operate.

.capitalize - Capitalizes the first letter of a string.

  ("the cake is a lie.").capitalize = "The cake is a lie."

.forEach - Applies a function to each element of a collection.

  var array = [1,2,3]
  var plus1 = function(num){return num += 1;}

  array.forEach(plus1) = [2,3,4]

.map - Creates a new array of elements of a collection that have had a function applied to each.

  array.map(plus1) = [2,3,4] (in a new array)

.nth - Returns the Nth index of a given array.

  array.nth(1) = 2

.once - Allows the only for the single implementation of a given function.



.repeat - Repeats a given string a specified amount of times.

  var string1 = "abc"

  string1.repeat(3) = "abcabcabc"

.take - Given an array, returns an Array to a specified index.

  array(2) = [1,2]

License: MIT
