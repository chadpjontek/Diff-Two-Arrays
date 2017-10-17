function diffArray(arr1, arr2) {
    var newArr = [];
    var arr1Dif = [];
    var arr2Dif = [];
    //loop through arr2 and use indexOf() to find differences between arr1
    for (var i = 0; i < arr2.length; i++) {
        var index = arr1.indexOf(arr2[i]);
        // if there is a difference then slice it and add to new array
        if (index === -1) {
            var slice = arr2.slice(i, i + 1);
            arr2Dif = arr2Dif.concat(slice);
        }
    }
    // loop through arr2 and use indexOf() to find differences between arr1
    for (var i = 0; i < arr1.length; i++) {
        var index = arr2.indexOf(arr1[i]);
        // if there is a difference then slice it and add to new array
        if (index === -1) {
            var slice = arr1.slice(i, i + 1);
            arr1Dif = arr1Dif.concat(slice);
        }
    }
    // concat differences
    return newArr = arr1Dif.concat(arr2Dif);
}
// examples
diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]); // returns [4]
diffArray([], ["snuffleupagus", "cookie monster", "elmo"]); // returns ["snuffleupagus", "cookie monster", "elmo"]
diffArray(["andesite", "grass", "dirt", "dead shrub"], ["andesite", "grass", "dirt", "dead shrub"]); // returns []
diffArray([1, "calf", 3, "piglet"], [7, "filly"]); // returns [1, "calf", 3, "piglet", 7, "filly"]
diffArray([1, "calf", 3, "piglet"], [1, "calf", 3, 4]); // returns ["piglet", 4]