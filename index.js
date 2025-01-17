'use strict';

// YOU KNOW WHAT TO DO //

/**
 * each: Designed to loop over a collection, Array or Object, and applies the 
 * action Function to each value in the collection.
 * 
 * @param {Array or Object} collection: The collection over which to iterate.
 * @param {Function} action: The Function to be applied to each value in the 
 * collection
 * @returns { Arrays or Object}
 */
function each(collection, action) {
    if(Array.isArray(collection)) {
        for(var i = 0; i < collection.length; i++) {
            action(collection[i], i, collection);
        }
    } else {
        for (var key in collection) {
            action(collection[key], key, collection);
        }
    }
}
module.exports.each = each;



/**
 * identity: designed to accept a value that takes in any data type and return the input value.
 * @param {any value} value: 
 * @returns {any value} value: returns value unchanged.
 */
function identity (value){
    return value;
}
module.exports.identity = identity;



/**
 * typeOf: Designed to return as a string what type of data the inputted value is.
 * @param {Any Value} value: to determine type of data it is.
 * @returns {String}
 */
function typeOf(value){
    if(typeof value !== "object"){
        return typeof value;
    } else if (Array.isArray(value)){
        return "array";
    } else if (typeof value === "object" && Array.isArray(value) !== true && value !== null && !(value instanceof Date)){
        return "object";
    } else if (value === null){
        return "null";
    } else {
        return "date";
    }
}
module.exports.typeOf = typeOf;



/**
 * first: Designed to take an array and a number. It looks within the array
 * at the given first index, which should be the input number. It looks 
 * at the first index and onward, based on the input number. Returns the 
 * values at the first index and onward based on number. If the input number
 * is not a number, it returns the first element in the array. If an array 
 * is not inputted, it returns an empty array.  
 * @param {Array} arr: The array to pull the first value at index and onward from. 
 * @param {Number} num: The number by which how many values from the first index to pull from.
 * @returns {Array} arr: Returns the values from first index, an empty array, or first element.
 */
function first(arr, num){
if(!Array.isArray(arr) || num <= 0){
      return [];
  } else if(num === undefined || num === NaN){
      return arr[0];
  } else if (num > arr.length) {
      return arr;
  } else {
    return arr.slice(0, num);
  }
}
module.exports.first = first;



/** _.last
* Arguments:
*   1) An array
*   2) A number
* Objectives:
*   1) If <array> is not an array, return []
*   2) If <number> is not given or not a number, return just the last element in <array>.
*   3) Otherwise, return the last <number> items of <array>
* Edge Cases:
*   1) What if <number> is negative?
*   2) What if <number> is greater than <array>.length?
* Examples:
*   _.last("ponies", 2) -> []
*   _.last(["a", "b", "c"], "ponies") -> "c"
*   _.last(["a", "b", "c"], 1) -> "c"
*   _.last(["a", "b", "c"], 2) -> ["b", "c"]
*/

/**
 * last: Designed to take an array and a number. It looks within the array
 * at the last index, which should be the input number. It looks 
 * at the last index and backwards, based on the input number. Returns the 
 * values at the last index and backwards based on number. If the input number
 * is not a number, it returns the last element in the array. If an array 
 * is not inputted, it returns an empty array.  
 * @param {Array} arr: The array to pull the last value at index and backwards from. 
 * @param {Number} num: The number by which how many values from the last index to pull from. 
 * @returns {Array} arr: Returns the values from last index, an empty array, or last element.
 */
function last (arr, num){
if(!Array.isArray(arr) || num < 0){
    return [];
} else if (num === undefined || num === NaN){
    return arr[arr.length - 1];
} else if (num > arr.length) {
    return arr;
} else {
    return arr.slice(-num); //using - before a number/parameter with slice will remove everything before that number
    }
}
module.exports.last = last;



/**
 * indexOf: Designed to iterate through an array until first match is found
 * with value. Returns the matched value's index ((["a","b","c"], "c") -> 2).
 * If value is not in the array returns -1.
 * @param {Array} arr: the array to iterate through to look for a match.
 * @param {Any Value} value: the value to match within the array. 
 * @returns { Index } i: returns the index number for where match is at with value.
 */
function indexOf(arr, value){
    for(var i = 0; i <= arr.length - 1; i++){
        if(arr[i] === value){
            return i;
        } 
     } return -1; 
 }
 module.exports.indexOf = indexOf;



 /**
  * contains: Designed to iterate through an array to check if given value
  * is present in the array. Returns either true or false based on outcome.
  * On each iteration uses ternary to see if value is within the given array.
  * @param {Array} array: the array to iterate through to look for given value.
  * @param {Any Value} value: the value that's being looked for in array.
  * @returns {Boolean} true or false
  */
function contains (array, value){
    for(var i = 0; i <= array.length; i++){ //includes doesn't need i, for some reason
       return array.includes(value) ? true : false;  //I don't know why  return array[i] === value ? true : false;  couldn't pass one of the tests...
    }
} 
module.exports.contains = contains;


/** _.each
* Arguments:
*   1) A collection
*   2) A function
* Objectives:
*   1) if <collection> is an array, call <function> once for each element
*      with the arguments:
*         the element, it's index, <collection>
*   2) if <collection> is an object, call <function> once for each property
*      with the arguments:
*         the property's value, it's key, <collection>
* Examples:
*   _.each(["a","b","c"], function(e,i,a){ console.log(e)});
*      -> should log "a" "b" "c" to the console
*/

//if <collection> === array, run <function> ONCE on EACH element that has arguments (element, index, <collection>)
//if <collection> === object, run <function> ONCE on EACH property that has arguments (property's value, key, <collection>)


_.each = function (collection, func){
    if(Array.isArray(collection) === true){
        for(var i = 0; i < collection.length; i++)
        func(collection[i], i , collection);
    } else {
        for(var key in collection){
           func(collection[key], key, collection)
        }
    }   
}

//
//Is this actually complete? No returns? pulled from class example...not done yet, reference either notes or recording from 10/26 to see code example
//



/** _.unique
* Arguments:
*   1) An array
* Objectives:
*   1) Return a new array of all elements from <array> with duplicates removed
*   2) Use _.indexOf() from above
* Examples:
*   _.unique([1,2,2,4,5,6,5,2]) -> [1,2,4,5,6]
*/


//return NEW ARRAY with ALL elements from <array> && remove duplicates
    //~~need to loop...when looping need to check for duplicate elements...then remove 'em
//need to use _.indexOf(), this returns the index number of when first hit value or -1 if not in the array

//underscore's version of unique uses === AND returns just the 1st value of it and not the second
    //look for match;
        //push 1st instance to new array
    //keep going, so don't return (??)
    //if match again IGNORE
//can I slice out i when there is a match??

//only pull

//var container for nabbed 1st values, then loop to grab those 1st values with an if statement (if not in array then add, if in array/theres a match then do nothing)

/**
 * unique: Designed to take in an array and return an array with only unique
 * elements within it (so removes duplicates). Iterates through given array,
 * on each iteration uses indexOf's output/return to determine which elements
 * in the given array to push into output array. If indexOf finds a match, it
 * does nothing. However, if there is not a match (indicated by its return of -1), 
 * then the conditional statement is true and the iteration then pushes the value
 * at the index/that element's value into the output array. Thus only pushing in
 * unique elements/values and removing duplicates.
 * @param {Array} arr: the array to iterate through and pull out nonduplcate values from.
 * @returns {Array} outputArr: the array collecting the nonduplicated elements/values.
 */
function unique (arr){
    var outputArr = [];
    for(var i = 0; i < arr.length; i++){
        if(-1 === _.indexOf(outputArr, arr[i])){ 
            outputArr.push(arr[i]);          
        }
        }
        return outputArr;
    }
module.exports.unique = unique;



/**
 * filter: Designed to iterate through a given array and on each iteration
 * perform a function that that pushes the value at the iterated index into
 * the output array, to create a filter. Uses the condition of if the given
 * function's results to truthy using it's arguments of the array value/element at index,
 * that index number, and the given array then push the value at the iteration
 * into the output array.
 *   filter([1,2,3,4,5], function(x){
 *      return x%2 === 0;
 *   }) -> [2,4]
 * @param {Array} arr: the array to iterate through to get values to push into output array.
 * @param {Function} func: the action to apply to determine if the outcome is truthy/which elements to filter.
 * @returns {Array} outputArr: where the collected truthy values from iteration are pushed into. Filtered values.
 */
function filter (arr, func){
    var outputArr = []; 
    for(var i = 0; i < arr.length; i++){
        if(func(arr[i], i, arr) === true){ //if condition AUTOMATICALLY checks for truthy, so could drop === true
            outputArr.push(arr[i]); 
        }
    }
    return outputArr;
}
module.exports.filter = filter;



/**
 * reject: Designed to iterate through given array, performing the given 
 * function upon the iteration and takes the element/iterated value, index,
 * and array as arguments. Pushes the rejected or falsey elements/values at i
 * into the output array (if the element's result from the function is falsey, 
 * so not true, or rejected, then it's collected). This is the inverse of the 
 * filter function. 
 *   reject([1,2,3,4,5], function(e){
 *      return e%2 === 0;
 *   }) -> [1,3,5]
 * @param {Array} arr: the array to iterate through to get values to push into output array.
 * @param {Function} func: the action to apply to determine if the outcome is falsy/which elements to reject.
 * @returns {Array} outputArr: where the collected falsey values from iteration are pushed into. Rejected values.
 */
function reject (arr, func){
    var outputArr = []; 
    for(var i = 0; i < arr.length; i++){
        if(func(arr[i], i, arr) === false){
            outputArr.push(arr[i]);
        }
    }
    return outputArr;
}
module.exports.reject = reject;



/**
 * partition: Designed to take an array and a function that determines what action to take. 
 * Returns two arrays based on result of the given function, one array has the truthy values/elements 
 * (filtered array. > 0, true, all else) and the other has the falsey values/elements (rejected array. 
 * Those values that result in false from the given function. null, 0, false, undefined, NaN, ""). 
 * 
 *   partition([1,2,3,4,5], function(element,index,arr){
 *     return element % 2 === 0;
 *   }); -> [[2,4],[1,3,5]]
 * @param {Array} arr: the given array to use function on to pull truthy and falsy values into two arrays. 
 * @param {Function} func: the action to apply to determine if the outcome is truthy or falsy/which elements to filter or reject.
 * @returns {Array, Array} filter array, reject array: returns an array of arrays - truthy values, falsey values
 */
function partition (arr, func){
    return [filter(arr, func), reject(arr, func)]; //referenced back prior methods cause they do the thing of resulting in arrays that correspond to if the condition was true or false..
}
module.exports.partition = partition;



/**
 * map: Designed to take a collection of either an array or object and use a function on each element
 * within the collection. Returns the result of the function into an output array. Determines type of
 * collection (either array or object), then applies the function on each element within the 
 * given collection. Pushes the results of the function at each iteration into the output array
 * that is returned.
 *  map([1,2,3,4], function(e){
 *      return e * 2;
 *  }) -> [2,4,6,8]
 * @param {Array or Object} collection: either the array or object to iterate through and apply given function to.
 * @param {Function} func: the action to take upon each element in the array as iterate through it.
 * @returns {Array} outputArr: binds all of the results of the function into a new array to be returned at end of iteration.
 */
function map (collection, func){
    var outputArr = [];
   if(Array.isArray(collection) === true){
       for(var i = 0; i < collection.length; i++){
        outputArr.push(func(collection[i], i, collection)); 
       }
   } else {
        for(var key in collection){
            outputArr.push(func(collection[key], key, collection)); 
        }
   }
    return outputArr;
}
module.exports.map = map;



/** _.pluck
* Arguments:
*   1) An array of objects
*   2) A property
* Objectives:
*   1) Return an array containing the value of <property> for every element in <array>
*   2) You must use _.map() in your implementation.
* Examples:
*   
*/


/**
 * pluck: Designed to pluck out values of properties within a given array of objects. Iterates
 * through array of objects using map (map discerns if collection is an array or object, returns
 * the results of the iteration mapped out). Returns a list as an array of the desired value(s) at
 * the given property.
 *      pluck([{a: "one"}, {a: "two"}], "a") -> ["one", "two"]
 * @param {Array of Objects} arrObj: the array to iterate through with map to look for values at given property.
 * @param {} property: the property to look within the objects in the array to pluck out values from.
 * @returns {Array} element[property]: the value(s) returned from the matched given property.
 */
function pluck (arrObj, property){
   return _.map(arrObj, function(element, i, co) {
       return element[property]; //bracket notation calculates what the thing is, is a placeholder rather than literal 
   });
}
module.exports.pluck = pluck;



/** _.every
* Arguments:
*   1) A collection
*   2) A function
* Objectives:
*   1) Call <function> for every element of <collection> with the paramaters:
*      if <collection> is an array:
*          current element, it's index, <collection>
*      if <collection> is an object:
*          current value, current key, <collection>
*   2) If the return value of calling <function> for every element is true, return true
*   3) If even one of them returns false, return false
*   4) If <function> is not provided, return true if every element is truthy, otherwise return false
* Edge Cases:
*   1) what if <function> doesn't return a boolean
*   2) What if <function> is not given?
* Examples:
*   _.every([2,4,6], function(e){return e % 2 === 0}) -> true
*   _.every([1,2,3], function(e){return e % 2 === 0}) -> false
*/



/**
 * every: Designed to use function on every element in a collection with iteration - 
 * if an array uses current value, current index, and collection (for loop) as parameters or if an
 * object uses current value, current key, and collection as parameters instead (for in loop).
 * Returns true if list/return values are all truthy. If any list items/return values are falsey
 * returns false. Returns true if no function and all elements/values are truthy - otherwise falsey.
 *     every([2,4,6], function(e){return e % 2 === 0}) -> true
*      every([1,2,3], function(e){return e % 2 === 0}) -> false
 * @param {Array or Object} collection: a list that is either an array or object which we test each element for truthy or falsey.
 * @param {Function} func: the function that is our test upon the collection to determine truthy or falsey of values/elements.
 * @returns {Boolean} true or false: if all elements are truthy from function returns true, else if returns false, or if no function returns true if all truthy or false if any falsey.
 */
function every (collection, func){
    if(!func === true){ //we are checking if func is falsy with !func, if it is FALSY/ === true, then do...
     func = function(element){
        return element;
     }     
    } //this is a default if statement, so that when hit other coniditional chain, have func already "defined"

    if(Array.isArray(collection)){
        for(var i = 0; i < collection.length; i++){
            if(!func(collection[i], i, collection)){ //for this function, we're checking if it's RESULT isn't TRUTHY/is falsy - so the result ends being falsy
                return false;
            } 
        } 
        return true;
    } else {
        for(var key in collection){
            if(!func(collection[key], key, collection)){
                return false;
            }
        }
        return true;
    }
}
module.exports.every = every;



/**
 * some: Designed to use function on every element in the given collection with iteration - 
 * if an array uses current value, current index, and collection (for loop) as parameters or if an
 * object uses current value, current key, and collection as parameters instead (for in loop).
 * Returns true if any list/return values are truthy. If all list items/return values are falsey then
 * returns false. Returns true if no function and any/at least one elements/values are truthy 
 * - otherwise falsey. TLDR: anything truthy return true, need all to be falsey to get false.
 *   some([1,3,5], function(e){return e % 2 === 0}) -> false
*   _some([1,2,3], function(e){return e % 2 === 0}) -> true
 * @param {Array or Object} collection: a list that is either an array or object which we test each element for truthy or falsey.
 * @param {Function} func: the function that is our test upon the collection to determine truthy or falsey of values/elements.
 * @returns {Boolean} true or false: true or false or element: if any elements are truthy from function returns true, else if all returns false, or if no function returns true if any truthy.
 */
function some (collection, func){
    if(!func === true){ //we are checking if func is falsy with !func, if it is FALSY/ === true, then do...
        func = function(element){
           return element;
        }     
       } //this is a default if statement, so that when hit other coniditional chain, have func already "defined"
   
       if(Array.isArray(collection)){
           for(var i = 0; i < collection.length; i++){
               if(func(collection[i], i, collection)){ 
                   return true;
               } 
           } 
           return false;
       } else {
           for(var key in collection){
               if(func(collection[key], key, collection)){
                   return true;
               }
           }
           return false;
       }
   }
module.exports.some = some;



/**
 * reduce: Designed to iterate through a given array and apply given function and returns a single value, seed. 
 * The given function uses the previous result(seed), element, and index as its arguments. Start of next 
 * iteration uses seed as the previous result. If no seed given then it's set as the zeroth index value/element
 * of the given array for iteration. Basically takes several given values from an array and reduces
 * them down to a single value, seed.
 *      reduce([1,2,3], function(previousSum, currentValue, currentIndex){ return previousSum + currentValue }, 0) -> 6
 * @param {Array} arr: the given collection to iterate through and have function performed upon on each iteration. 
 * @param {Function} func: action to take place upon each element/value in the collection array. Takes seed, value at iteration, and index as arguments.
 * @param {Number} seed: If given stores the previous value from iteration. If no seed given then it's set to the first element in the array.
 * @returns {Number} seed:
 */
function reduce (arr, func, seed){
   if(seed === undefined){
     seed = arr[0];
       for(var i = 1; i < arr.length; i++){  //start iterating at 1 because no seed given so move to the next element
           seed = func(seed, arr[i], i);
             }
       } else {
           for (var i = 0; i < arr.length; i++){
               seed = func(seed, arr[i], i);
           }
       }
    return seed;
}
module.exports.reduce = reduce;



/**
 * extend: Designed to make a copy by reference (so changes to original values are reflected) of 
 * given objects. Adds key values to the output object. However, if same key in output object as in
 * given object, the recent object will replace/overwrite the value at that same key. Can use/take
 * any number of objects to add to output object copy, in the order given/received.
 *    var data = {a:"one"};
*     extend(data, {b:"two"}); -> data now equals {a:"one",b:"two"}
*     extend(data, {a:"two"}); -> data now equals {a:"two"}
 * @param {Object} obj1: copied object that is referenced in output object to build/add upon.
 * @param  {...Objects} moreObjs: any number of given objects to be iterated through for adding into output object as a copy by reference.
 * @returns {Object} outputObj: the returned copy of the combined given objects, once iterated through as an object collection.
 */
function extend (obj1, ...moreObjs){ //use rest parameter, which is an array thingie
var outputObj = obj1;
for(var i = 0; i < moreObjs.length; i++){
    var currentObj = moreObjs[i]; //created to help clarify what working with
    for(var key in currentObj){ //pulling i/index here to pinpoint iterated obj arguments that are fed in
        outputObj[key] = currentObj[key];//assign the iterated key to my container obj and PULL the value of the currentObj[key] into it (need the obj name and [key], because that gets the properties)
    }
}
    return outputObj;
}
module.exports.extend = extend;


