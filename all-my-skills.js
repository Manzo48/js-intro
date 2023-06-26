let arr = [1,2,3,4,5, 'name'];
const a = 2;
let arr2 = []
for (key of arr){
    if (typeof key === "number"){
        arr2.push(key * a)
    }
}
console.log(arr2)