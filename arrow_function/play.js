const searchValue= document.querySelector(".search")
const resultValue= document.querySelector(".result")
const thanksValue= document.querySelector(".thanks")

function show(){
    resultValue.innerHTML=this.value;
    var inputValue=this.value
    setTimeout(function(){
        thanksValue.innerHTML=inputValue;
    },1000)


}

searchValue.addEventListener("keyup",show)