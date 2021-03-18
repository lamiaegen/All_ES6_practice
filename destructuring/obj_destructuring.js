var obj1={
    name :'lamia',
    class: 'hsc',
    house : 'mirpur'


}

let {name}= obj1 //unchange name
console.log(name);

//alias version
let {name:title}=obj1;
console.log(title)