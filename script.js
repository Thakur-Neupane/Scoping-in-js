let output = document.getElementById("output");
let output2 = document.getElementById("output2");

// Scoping
// 1)Global Scope
// const globalVar = "Global Variable";
// const globalFunction = () => (output2.innerText = "Global Function");

// const testScope = () => (output2.innerHTML = letName);
// testScope();

// var varName = "Global var 2";
// let letName = "Global var 3";

// // 2. Functional Scope
// const function1 = () => {
//   const func1Var = "Function Var";
//   var func2Var = "Var Var";
//   let letVar2 = "let VAr";

//   output2.innerText = func1Var;

//   const innerFunction = () => {
//     output2.innerText = func1Var;
//   };
//   innerFunction();
// };
// function1();
// innerFunction();

// Block Scope
if (true) {
  var blockVar = "BlockVariable";
}
output2.innerText = blockVar;

// 4 Lexical Scope
// function inside function
const outerFunction = () => {
  const outerFuncConst = "Outer Function";

  const innerFunction1 = () => {
    const outerFuncConst = "Outer Function";
  };
  const innerFunction2 = () => {
    const outerFuncConst = "Outer Function";
  };
};
