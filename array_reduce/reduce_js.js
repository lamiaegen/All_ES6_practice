var arr1=[2,3,4,5];

var result=arr1.reduce((prevValue,currentValue,index,arr)=>{
    console.log(`here the previous value is ${prevValue} also the current value is ${currentValue}\n`)
    return prevValue+currentValue

},6);
console.log("the final output of this result is",result)