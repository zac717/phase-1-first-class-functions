function receivesAFunction(callback) {
    callback();
  }
  function returnsANamedFunction() {
    return function named() {       
      console.log("a named function");
    };
  }
  function returnsAnAnonymousFunction() {
    return function () {
      console.log("power book");
    };
  }