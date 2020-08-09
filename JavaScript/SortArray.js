/*****

Given an array of integers nums, sort the array in ascending order. Don't use inbuilt functions.

-----------------
Sample Test Cases
-----------------
Test Case 1:

Input: nums = [5,2,3,1]
Output: [1,2,3,5]

*****/

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function(nums) {
    return quickSort(nums, 0, nums.length - 1);    
};

function swap(items, leftIndex, rightIndex){
    var temp = items[leftIndex];
    
    items[leftIndex] = items[rightIndex];
    items[rightIndex] = temp;
}

function partition(items, left, right) {
    var pivot = items[Math.floor((right + left) / 2)]; // Middle
    var i = left;
    var j = right;
    
    while (i <= j) {
        while (items[i] < pivot)
            i++;

        while (items[j] > pivot)
            j--;

        if (i <= j) {
            swap(items, i, j);
            i++;
            j--;
        }
    }
    
    return i;
}

function quickSort(nums, left, right) {
    var index;
    
    if (nums.length > 1) {
        index = partition(nums, left, right);
        
        if (left < index - 1)
            quickSort(nums, left, index - 1);

        if (index < right)
            quickSort(nums, index, right);
    }

    return nums;
}
 
