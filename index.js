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



/** _.indexOf
* Arguments:
*   1) An array
*   2) A value
* Objectives:
*   1) Return the index of <array> that is the first occurrance of <value>
*   2) Return -1 if <value> is not in <array>
*   3) Do not use [].indexOf()!
* Edge Cases:
*   1) What if <array> has multiple occurances of val?
*   2) What if <val> isn't in <array>?
* Examples:
*   _.indexOf(["a","b","c"], "c") -> 2
*   _.indexOf(["a","b","c"], "d") -> -1
*/


//return index[#] of array at first occurance/iteration of <value>
    //looping through most likely
//return -1 IF <value> !Array.isArray/<array> not the thing
//NO [].indexOf()



function indexOf(array, value){
    for(var i = 0; i <= array.length - 1; i++){
        if(array[i] === value){
            return i; //returning the index number where the match is at
        } 
     } return -1; //have this outside of the for loop because otherwise when iterate it would hit this on the first loop and exit out
 }
 module.exports.indexOf = indexOf;



/** _.contains
* Arguments:
*   1) An array
*   2) A value
* Objectives:
*   1) Return true if <array> contains <value>
*   2) Return false otherwise
*   3) You must use the ternary operator in your implementation.
* Edge Cases:
*   1) did you use === ?
*   2) what if no <value> is given?
* Examples:
*   _.contains([1,"two", 3.14], "two") -> true
*/

 //IF <array> has <value> return TRUE
 //Else return FALSE (<value> is undefined, array does NOT have value)
 //use ternary operator

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

function unique (arr){
    var outputArr = [];
    for(var i = 0; i < arr.length; i++){
        if(-1 === _.indexOf(outputArr, arr[i])){ //indexOf is looking for matches, if NO match then it returns -1. Which means it's NOT in the array. So we can use -1 to determine when to ADD elements into our array
            outputArr.push(arr[i]);          //then return the value of that iterated element in the given array
        }
        }
        return outputArr;
    }
module.exports.unique = unique;
//this one is nifty and head hurter! But DONE!




/** _.filter
* Arguments:
*   1) An array
*   2) A function
* Objectives:
*   1) call <function> for each element in <array> passing the arguments:
*      the element, it's index, <array>
*   2) return a new array of elements for which calling <function> returned true
* Edge Cases:
*   1) What if <function> returns something other than true or false?
* Examples:
*   _.filter([1,2,3,4,5], function(x){return x%2 === 0}) -> [2,4]
* Extra Credit:
*   use _.each in your implementation
*/

    //use function on EACH element in <array> - looping
        //use element, element's index, <array> as arguments
    //RETURN NEW array of elements when <function> returns true 
        //(func outcome === true, then return a NEW array with same values)
    //what do if array returns something other than t/f??? idk
    //special credit if use _.each...eeeeh

function filter (arr, func){
    var outputArr = []; //..think I need a container for the func'd values
    for(var i = 0; i < arr.length; i++){
        if(func(arr[i], i, arr) === true){ //if condition AUTOMATICALLY checks for truthy, so could drop === true
            outputArr.push(arr[i]); //thought this was new array elements? but undefined??
        }
    }
    return outputArr;
}
module.exports.filter = filter;


/** _.reject
* Arguments:
*   1) An array
*   2) A function
* Objectives:
*   1) call <function> for each element in <array> passing the arguments:
*      the element, it's index, <array>
*   2) return a new array of elements for which calling <function> returned false
*   3) This is the logical inverse if _.filter()
* Examples:
*   _.reject([1,2,3,4,5], function(e){return e%2 === 0}) -> [1,3,5]
*/


//use function on EACH element in array = loop
    //use element, element's  index, array as arguments
//RETURN NEW array of elements when using function results in FALSE
    //protip: filter method in reverse


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



/** _.partition
* Arguments:
*   1) An array
*   2) A function
* Objectives:
*   1) Call <function> for each element in <array> passing it the arguments:
*       element, key, <array>
*   2) Return an array that is made up of 2 sub arrays:
*       0) An array that contains all the values for which <function> returned something truthy
*       1) An array that contains all the values for which <function> returned something falsy
* Edge Cases:
*   1) This is going to return an array of arrays.
* Examples:
*   _.partition([1,2,3,4,5], function(element,index,arr){
*     return element % 2 === 0;
*   }); -> [[2,4],[1,3,5]]
}
*/


//use function on EACH element in array
    //use element, key, array as arguments func(element, key, arr)
//RETURN array with 2 sub arrays
    //0 array (1st array) has ALL values for func returned truthy (> 0, true, all else)
    //1 array (2nd array) has ALL values for func returned falsy (null, 0, false, undefined, NaN, "")
        //this is an array WITH arrays within it... so maybe something like: arr = [[1,2,3], ["a","b',"c"], [false, true, NaN]]


function partition (arr, func){
    return [_.filter(arr, func), _.reject(arr, func)]; //referenced back prior methods cause they do the thing of resulting in arrays that correspond to if the condition was true or false..
}
module.exports.partition = partition;

    /* var outputArr = []; //would I need to outputArrs? need to check the test args to see what use
    var outputArr2 = [];
    for(var i = 0; i < arr.length; i++){
        if(arr[i] === true){
            outputArr.push(arr[i]);
        } else if (arr[i] === false){
            outputArr2.push(arr[i]);
        }
    }
    return outputArr; //not sure if I should have two different outputArrs that return for each condition
} */




/** _.map
* Arguments:
*   1) A collection
*   2) a function
* Objectives:
*   1) call <function> for each element in <collection> passing the arguments:
*        if <collection> is an array:
*            the element, it's index, <collection>
*        if <collection> is an object:
*            the value, it's key, <collection>
*   2) save the return value of each <function> call in a new array
*   3) return the new array
* Examples:
*   _.map([1,2,3,4], function(e){return e * 2}) -> [2,4,6,8]
*/


//use func on EACH element in the collection
    //IF an ARRAY    
        //use element, element's index, collection as arguments: func(collection[i], [i], collection)
    //IF an OBJECT
        //use value, key, collection as arguments: func(collection[i]??, [i]?? ,collection)
//make a container array for new value of each function
        //var outputArr = [];
        //outputArr.push(arr[i])???
        //return outputArr;

function map (collection, func){
    var outputArr = [];
   if(Array.isArray(collection) === true){
       for(var i = 0; i < collection.length; i++){
        outputArr.push(func(collection[i], i, collection)); //functions evaluate to their RESULT. so can expect that outcome, and therefore slip it into an array
       }
   } else {
        for(var key in collection){
            outputArr.push(func(collection[key], key, collection)); //so like, indexes and keys or whatever kinda work the same because they're both properties in their collections
        }
   }
    return outputArr;
}
module.exports.map = map;

//re-review this concept...think of mapping like mapping the field values in Salesforce when importing in data



    //for(var i = 0; i < collection.length; i++){
      //  if(Array.isArray(collection) === true){
           // func(collection[i], i, collection);
            //outputArr.push(collection[i]);
       // } else if (object === true /*grab that long arse code to distinigush between arr/obj or finish that prior func to plop in */){
    //         func(/*I'm kinda stumped on the arguments to plug in here...*/);
    //         outputArr2.push(collection[i]); //eeeeh, how would we update the array with the value? guess we could push the obj/key/value into the array still??
    //     }
    // }




/** _.pluck
* Arguments:
*   1) An array of objects
*   2) A property
* Objectives:
*   1) Return an array containing the value of <property> for every element in <array>
*   2) You must use _.map() in your implementation.
* Examples:
*   _.pluck([{a: "one"}, {a: "two"}], "a") -> ["one", "two"]
*/


//RETURN array with property's value for EVERY element in array = looping
    //make a new container??
//use map!


function pluck (arrObj, property){
   return _.map(arrObj, function(element, i, co) {
       // console.log(element, '<-- val')
       return element[property]; //bracket notation calculates what the thing is - so thinking, vs. dot notation which is literally looking for thing as written/verbitum ...need the value at this property.;
   }); //lines 480 - 482 are part of the annoymous/inner function code block
}
module.exports.pluck = pluck;

//revisit to get a firmer grasp on this concept
//for later me, if wanna do for better clarity, could assign the inner function  to it's own var named function to better get it


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


//use function on EVERY element of collection
    //IF collection === array, then use current element[i], element's index i, and collection as arguments
    //IF/else collection is an object then use current value/object[key], current key, and collection as arguments
//IF EVERY element return value is true, return true
//IF ANY of the values return false then return false
//IF NO FUNCTION given, return true if every element === truthy, if any/even one return false then return false
//what do if function results aren't boolean???



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

//need to revisit for deeper understanding, esp. regarding how element comes to be in first if


/** _.some
* Arguments:
*   1) A collection
*   2) A function
* Objectives:
*   1) Call <function> for every element of <collection> with the paramaters:
*       if <collection> is an array:
*        current element, it's index, <collection>
*       if <collection> is an object:
*        current value, current key, <collection>
*   2) If the return value of calling <function> is true for at least one element, return true
*   3) If it is false for all elements, return false
*   4) If <function> is not provided return true if at least one element is truthy, otherwise return false
* Edge Cases:
*   1) what if <function> doesn't return a boolean
*   2) What if <function> is not given?
* Examples:
*   _.some([1,3,5], function(e){return e % 2 === 0}) -> false
*   _.some([1,2,3], function(e){return e % 2 === 0}) -> true
*/


//use function on EVERY element of the collection
    //IF collection is an ARRAY: element, element's index, collection are the arguments
    //IF collection is an Object: current value, current key, collection
//return TRUE if at least ONE element with function called on it is/results  to true
//return false if ALL element return false(so 0 true returns)
//if function not given, return true if at least ONE element is truthy, otherwise return false

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

//for this function used same logic of every (default if return that creates  a function if none, conidtional chain to suss out truthy and falsy results)
   //difference is that not looking for ALL things to amount to either true or false
        //instead looking for SOME truthy-ness...so swapped the true false outcomes and dropped the ! statements


/** _.reduce
* Arguments:
*   1) An array
*   2) A function
*   3) A seed
* Objectives:
*   1) Call <function> for every element in <collection> passing the arguments:
*         previous result, element, index
*   2) Use the return value of <function> as the "previous result"
*      for the next iteration
*   3) On the very first iteration, use <seed> as the "previous result"
*   4) If no <seed> was given, use the first element/value of <collection> as <seed> and continue to the next element
*   5) After the last iteration, return the return value of the final <function> call
* Edge Cases:
*   1) What if <seed> is not given?
* Examples:
*   _.reduce([1,2,3], function(previousSum, currentValue, currentIndex){ return previousSum + currentValue }, 0) -> 6
*/


//reduce will perform an action on the seed through use of iteration
//reduce takes a seed and modifies that seed, which becomes the output (for this function)
//use function on EVERY element in collection
    //Input: array, function, seed (starting/initial element/value that can be applied/passed through repeatedly. So that don't have to repeatedly declare it)
        //EDGE CASE: if NO SEED given then use the first element/value in collection to be seed and keep moving throughout elements
        //Seed could be any kind of data type (WILDCARD), iterate through the seed 
    //Output: function value the iteration for use for next iteration. Return final function (???)


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




/** _.extend
* Arguments:
*   1) An Object
*   2) An Object
*   ...Possibly more objects
* Objectives:
*   1) Copy properties from <object 2> to <object 1>
*   2) If more objects are passed in, copy their properties to <object 1> as well, in the order they are passed in.
*   3) Return the update <object 1>
* Examples:
*   var data = {a:"one"};
*   _.extend(data, {b:"two"}); -> data now equals {a:"one",b:"two"}
*   _.extend(data, {a:"two"}); -> data now equals {a:"two"}
*/


//copy properties from the 2nd object onto/into the first object
    //if has same key then overwrite the value with new one
//if given more objects, then copy their properties to object 1/first object too - but in the order received
//return updated object 1

    //...how to make room for more objects, if given?
    //how to setup a function to take any # of arguments???


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

    //loop through obj1's key and somehow copy it's stuff into a new var container
    //for second obj2 loop through it too and copy it's stuff to new var that has obj1's stuff already there
        //use that bracket notation
        //can treat ...moreobjs like an array


