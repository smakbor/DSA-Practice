// class Stack {
//   constructor() {
//     this.stack = [];
//   }
//   push(value) {
//     this.stack.push(value);
//     return this.stack;
//   }
//   pop() {
//     this.stack.pop();
//     return this.stack;
//   }
//   lastElement() {
//     return this.stack[this.stack.length - 1];
//   }
//   size() {
//     return this.stack.length;
//   }
// }
// const stack = new Stack();
// stack.push(3);
// stack.push(4);
// stack.push(6);
// console.log(stack.pop());
// console.log(stack.size());
// console.log(stack.lastElement());

// Merge Sort

const merge = (leftArr, rightArr) => {
  let i = 0;let j = 0;
  let result = [];
  while (i < leftArr.length && j < rightArr.length) {
    if (leftArr[i] < rightArr[j]) {
      result.push(leftArr[i]);
      i++;
    } else {
      result.push(rightArr[j]);
      j++;
    }
  }
  while (i < leftArr.length) {
    result.push(leftArr[i]);
    i++;
  }
  while (j < rightArr.length) {
    result.push(rightArr[j]);
    j++;
  }
  return result;
};
const mergeSort = (array) => {
  if (array.length <= 1) return array;
  let mid = Math.floor(array.length / 2);
  let leftArr = mergeSort(array.slice(0, mid));
  let rightArr = mergeSort(array.slice(mid));
  return merge(leftArr, rightArr);
};
mergeSort([1, 6, 3, 9, 5, 8]);
