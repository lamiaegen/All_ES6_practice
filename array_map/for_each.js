var arr1=[2,5,8,9,3];
arr2=[];
console.log(typeof(arr1.forEach((currentValue)=>{
    arr2.push(currentValue);
})))

console.log("here is the new array",arr2)