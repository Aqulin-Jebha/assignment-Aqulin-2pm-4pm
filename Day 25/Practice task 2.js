function outer(){
    let count=0;
    return function (){
        count++;
        console.log(count);
        
    };
}

outer();