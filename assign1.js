
question:-1
// // flattenArray([1, [2, [3, [4, 5]]]], 2);
// // Expected output: [1, 2, 3, [4, 5]]

// function flattenArray(arr,depth){
//   return arr.reduce((acc,val)=>{
//     if(Array.isArray(val) && depth>0){
//       return acc.concat(flattenArray(val,depth-1));
//     }
//     return acc.concat(val);
//   },[]);
// }

// console.log(flattenArray([1, [2, [3, [4, 5]]]], 2));





// q1.b// let arr = [1, [2, [3, [4, 5]]]];
// // Expected output: [1, 2, 3, 4, 5]

// function flattenArray(arr){
//   return arr.reduce((acc,val)=>
//     Array.isArray(val) ? acc.concat(flattenArray(val)): acc.concat(val), []);
// }
// console.log(flattenArray(arr));


question:- 2


function flattenObject(obj, parentKey = "") {
  const finalObj = {};
  
  const generateFlatObjects = (obj, parent) => {
    for (let key in obj) {
      const newParent = parent ? `${parent}.${key}` : key; 
      const value = obj[key];
      if (typeof value === 'object' && value !== null) { 
        generateFlatObjects(value, newParent);
      } else {
        finalObj[newParent] = value;
      }
    }
  };
  
  generateFlatObjects(obj, parentKey);
  return finalObj;
}

const input = {
  user: {
    info: {
      name: "Alice",
      age: 25
    },
    preferences: {
      theme: "dark",
      notifications: true
    }
  },
  status: "active"
};

console.log(flattenObject(input, ""));
/*
Expected Output:
{
  "user.info.name": "Alice",
  "user.info.age": 25,
  "user.preferences.theme": "dark",
  "user.preferences.notifications": true,
  "status": "active"
}
*/
