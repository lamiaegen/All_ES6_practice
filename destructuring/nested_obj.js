var obj1={
    name :'lamia',
    age :'30',
    obj2:{
        education :"engineer",
    },
}

let {obj2:{education: get_edu}}= obj1;

console.log(get_edu);