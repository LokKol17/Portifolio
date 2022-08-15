function testCallBack(){
    console.log("log before use setTimeout function");
    setTimeout(()=>{
        console.log("inside timeout");
    },5000);
    console.log("log after use setTimeout function");
}

testCallBack();