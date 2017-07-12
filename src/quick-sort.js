'use strict';

function quickSort(input) {

    if (!Array.isArray(input))
        throw "Expected exception to be thrown.";
    else if (input.length === 0 || input.length === 1) {
        return input;
    }
    else {
        if (input.some(isNaN))
        {
            //quickSortWords(input, 0, input.length);
            //return input;
        }
        else {
        //    quickSortNumbers(input, 0, input.length);
        //    return input;
        }
    }

};

// function quickSortNumbers (array, left, right){

//   var pivot = partition(array, left, right);

//   if(left < pivot - 1) {
//     quickSortNumbers(array, left, pivot - 1);
//   }
//   if(right > pivot) {
//     quickSortNumbers(array, pivot, right);
//   }
//   return array;
// }

// function swap(array, i, j) {
//   var temp = array[i];
//   array[i] = array[j];
//   array[j] = temp;
// }

// function partition (array, left, right){
//   var pivot = right;
//   var i = left;

//   for(var j = left; j < right; j++) {
//     if(array[j] <= array[pivot]) {
//       swap(array, i , j);
//       i = i + 1;
//     }
//   }
//   swap(array, i, j);
//   return i;
// }


//function quickSortWords(inputWords) {

//}
module.exports = quickSort;