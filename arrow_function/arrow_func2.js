//arrow function maintain the same value for this outside and inside
//but except arrow function the this inside "callback function " is a global this


//(1) without arrow function problem
var num1={
    dolls : ['barbie','angel','flower'],
    name : "angela",

    printDoll: function(){
      this.dolls.forEach(
          function(doll){
              console.log(this)// in this case this "this " is global this not the object indicates, inside for each function callback the outer this is not accessible, if you want to access this you've to store the 'this' inside a varaible to access
              console.log(`${this.name} loves to play with ${doll}`);
          }
      )
    }
}


//(2). with arrow function

var newOne={

    idols: ["leo","sumi"],
    human: "lamia",
    printLove:function(){
        this.idols.forEach((idol)=>console.log(`${this.human} loves her idol ${idol}`))// here the outer and inner this is okay and same 

    }



}

newOne.printLove();
