function outer() {
  let message = "Hello";

  function inner() {
    console.log(message);
  }

  return inner;
}

const closureFunc = outer();
closureFunc(); 
