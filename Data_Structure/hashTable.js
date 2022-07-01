class HashgTable {
  constructor(size = 7) {
    this.dataMap = new Array(size);
  }

  // _ Tells other developer taht this method should only be called by other methods...
  _hash(key) {
    let hash = 0;
    // key is a key in the keyvalue obj.... we could say that is a string
    //key = string = "paint"
    for (let i = 0; i < key.length; i++) {
      //charCodeAt ---> is a function that identifies every letter with a number
      // it is multiply by 23 and added to hash
      // hash keeps the count for every loop starting from 0
      // the output is diveded by the dataMap´s length in this case it is 7 and returns the remainder
      hash = (hash + key.charCodeAt(i) * 23) % this.dataMap.length;
    }
    return hash;
    // This is how we are goign to assign an place in the dataMap
    // it will always be a number between 0 and 6
  }

  set(key, value) {
    let index = this._hash(key);
    if (!this.dataMap[index]) {
      this.dataMap[index] = [];
    }
    this.dataMap[index].push([key, value]);
    return this;
  }

  get(key) {
    let index = this._hash(key);
    if (!this.dataMap[index]) return undefined;

    for (let i = 0; i < this.dataMap[index].length; i++) {
      if (this.dataMap[index][i][0] === key) {
        return this.dataMap[index][i][1];
      }
    }
    return undefined;
  }

  keys() {
    let allKeys = [];
    for (let i = 0; i < this.dataMap.length; i++) {
      if (this.dataMap[i]) {
        for (let j = 0; j < this.dataMap[i].length; j++) {
          allKeys.push(this.dataMap[i][j][0]);
        }
      }
    }
    return allKeys;
  }
}

let myHashtable = new HashgTable();
console.log(myHashtable);

myHashtable.set("bolts", 1400);
myHashtable.set("washers", 50);

// Interview example

const isItemIncommon = (array1, array2) => {
  for (let i = 0; i < array1.length; i++) {
    for (let j = 0; j < array1.length; j++) {
      if (array1[i] === array2[j]) return true;
    }
  }
  return false;
};

const array1 = [1, 2, 3, 4];
const array2 = [5, 6, 7, 2];
console.log(isItemIncommon(array1, array2));
// We  can check tthat we have an item in common. However, this is really expensive we have a loop within a loop
// which is transalted into a O(n2)

const isItemIncommon2 = (array1, array2) => {
  const obj = {};
  for (let i = 0; i < array1.length; i++) {
    obj[array1[i]] = true;
  }
  for (let j = 0; j < array2.length; j++) {
    if (obj[array2[j]]) return true;
  }
  return false;
};

// this is a better way of writing this code ... there is not loop within a lopp and therefore it is more efficient
// it would be O(n) ---> loop + loop = 2n ---> we droop constant ---> On
console.log(isItemIncommon2(array1, array2));
