function rest_argue(){
   return arguments;
}

var obj2=rest_argue(1,2,3,4,5);
var result=Object.values(obj2);
console.log(result);

for (i of result){
    console.log(i);
}