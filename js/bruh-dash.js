var global = window || GLOBAL;

/****************************************************************************************
 * Function signatures have been intentionally left out of the comments describing what *
 * each function does so that you can have practice looking up documentation. Please    *
 * Reference the documentation at [ https://lodash.com/docs/4.17.4 ] You should have    *
 * documentation up in a browser window at all times when working on projects!          *
 ****************************************************************************************/

global.bruhdash = {

  // returns the first element of an array
  first: function (array) {
      return array.shift();
  },

  // returns the last element of an array
  last: function (array) {
      return array.pop();
  },

  // returns the index of the first matching element from left to right
  indexOf: function (array, x) {
    return array.indexOf(x);
  },

  // returns the index of the first matching element from right to left
  lastIndexOf: function (array, x) {
    return array.lastIndexOf(x);
  },

  // returns an array with all elements except for the last element
  initial: function (array) {
    array.pop();
    return array;
  },
  
  // returns an array with all falsey values removed
  compact: function (array) {
    var newArray = [];
    for(var i = 0; i < array.length; i++){
      if(array[i]){
        newArray.push(array[i]);
      }
        //false, null, 0, "", undefined, and NaN
        // array[i] !== false || array[i] !== null || array[i] !== 0 || array[i] !== "" || array[i] !== undefined || array[i] !== NaN) {
      }
      return newArray;
    },
  

  // creates a slice of an array from the start index up to but not including the end index
  slice: function (array,x,y) {
    var newArray = [];
    for(var i = x; i < y; i++){
      newArray.push(array[i]);
    }
    return newArray;
  },

  // returns a slice of array with n elements dropped from the beignning
  drop: function(array, n){
    var newArray = [];
    if(n === 0){
      newArray.push(array);
    }else{
    for(var i = (0+n); i < array.length; i++){
      newArray.push(array[i]);
    }
  }
    return newArray;
  },

  // returns a slice of array with n elements dropped from the end
  dropRight: function() {

  },

  // creates a slice of an array with n elements taken from the beginning
  take: function () {

  },

  // creates a slice of an array with n elements taken from the end
  takeRight: function () {

  },

  // fills elements of array with specified value from the start index
  // up to but not including the end index
  fill: function() {

  },

  // removes all given values from an array
  pull: function (array, value) {

    // PASSES BUT NOT CORRECT
    // for(var i = 0; i < array.length; i++){
    //   array.splice(value,1);
    // }
    // return array;
  },

  // removes elements of an array corresponding to the given indices
  pullAt: function () {

  },

  // creates an array excluding all the specified values
  without: function() {

  },

  // returns an array with specified values excluded
  difference: function(array1, array2) {
    var array = [];
    array1.sort();
    array2.sort();
    console.log(array1);
    console.log(array2);
    for(var i = 0; i < array1.length; i++){
      for(var x = 0; x <array2.length; x++){
        if(array1[i] === array2[x]){
          console.log(array1[i]);
          console.log(array2[x]);
          break;
        }else if(array2[x] >= array1[i]){
          array.push(array1[i]);
          break;
        }
      }    
    }
    console.log(array);
    return array;
  },

  /*******************
   *  STRETCH GOALS! *
   *******************/ 

  // creates an array of grouped elements
  zip: function () {

  },

  // creates an array of grouped elements in their pre-zip configuration
  unzip: function () {
    
  },

  // creates an array of elements into groups of length of specified size
  chunk: function(){

  },

  // iterates over elements of a collection and invokes iteratee for each element
  // Note: this should work for arrays and objects
  forEach: function() {

  },

  // creates an array of values by running each element in collection thru the iteratee
  // Note: this should work for arrays and objects
  map: function() {

  },

  /*************************
   *  SUPER STRETCH GOALS!  *
   *************************/ 

  // iterates over elements of a collection and returns all elements that the predicate returns truthy for
  // Note: this should work for arrays and objects
  filter: function() {

  },

  // Reduces the collection to a value which is the accumulated result of running each element
  // in the collection through an iteratee
  // Note: this should work for arrays and objects
  reduce: function() {
    
  }
};
