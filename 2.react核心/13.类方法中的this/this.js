function a(){
    console.log(this);
}

let b={
    test:a,
    b:'bb',
    test1(){
        a();
    },
    test2(){
        console.log(this);
    }
}

b.test();
b.test1();

let c={
    cc:b.test,
    tt:'tt'
}
c.cc();

(function test1(a) {a()})(b.test2)

// 直接让一个全局函数执行
// 将一个全局函数加到一个对象上作为属性执行
// 两种情况下的this指向并不相同