// ===============================

const merge = (array1, array2) => {
  let combined = [];
  let i = 0;
  let j = 0;

  while (i < array1.length && j < array2.length) {
    if (array1[i] < array2[j]) {
      combined.push(array1[i]);
      i++;
    } else {
      combined.push(array2[j]);
      j++;
    }
  }
  while (i < array1.length) {
    combined.push(array1[i]);
    i++;
  }
  while (j < array2.length) {
    combined.push(array2[j]);
    j++;
  }
  return combined;
};

const arr1 = [1, 3, 7, 8];
const arr2 = [2, 4, 5, 6];

// ------------------------------------   MERGE AND SORT ARRAY -------------------

const mergeSort = (arr) => {
  if (arr.length === 1) return arr;

  let mid = Math.floor(arr.length / 2);
  let leftArr = arr.slice(0, mid);
  let rightArr = arr.slice(mid);

  return merge(mergeSort(leftArr), mergeSort(rightArr));
};

const arr3 = [3, 1, 4, 2];
