function sum(a,b,c){
    return a+b+c;
}

function curry(func,...arg){
    if(arg.length>=func.length){
        return func(...arg)
    }else{
        return (...arg1)=> curry(func,...arg,...arg1)
    }
}

let sum1=curry(sum);
console.log(sum1(1)(2)(3));
console.log(sum1(1,2)(3));
