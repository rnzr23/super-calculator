const bodyClass = "flex flex-col bg-gray-900";
const bdy = document.querySelector("body");
bodyClass.split(" ").forEach((cls) => bdy.classList.add(cls));

const calcBodyClass =
    "justify-center max-w-lg rounded overflow-hidden shadow-2xl bg-pink-400 bg-opacity-75 bg-gradient-to-tr from-pink-350 flex";
const calcBody = document.querySelector(".calcBody");
calcBodyClass.split(" ").forEach((cls) => calcBody.classList.add(cls));

const outputClass =
 "flex flex-col w-3/4 h-12 justify-center items-end m-1 bg-blue-200 text-gray-900 font-semibold px-2 border border-black hover:border-blue-500 rounded";
const output = document.querySelector(".output");
outputClass.split(" ").forEach((cls) => output.classList.add(cls));

const previousNumberClass =
    "flex max-w-lg h-1/3 pb-5 pt-1 text-gray-600 text-xs";
const previousNumber = document.querySelector(".previousNumber");
previousNumberClass
  .split(" ")
  .forEach((cls) => previousNumber.classList.add(cls));

const currentNumberClass = "fflex max-w-lg h-2/3 pb-2 text-xl";
const currentNumber = document.querySelector(".currentNumber");
currentNumberClass
  .split(" ")
  .forEach((cls) => currentNumber.classList.add(cls));

const buttons = document.querySelectorAll("button");
buttons.forEach((btn) => {
    addClasses(btn);
});
  
function addClasses(button) {
    const btnNumberClass =  "hover:bg-gray-400 border-gray-400";
    const btnClearClass = "hover:bg-red-500 border-red";
    const btnOpClass = "hover:bg-orange-400 border-orange-400";
    const btnEqClass = "hover:bg-blue-400 border-blue-400";
    const btnDecClass = "hover:bg-blue-400 border-blue-400";
  
    if (button.classList.value === "number") {
      btnNumberClass.split(" ").forEach((cls) => button.classList.add(cls));
    } else if (button.classList.value === "operator") {
      btnOpClass.split(" ").forEach((cls) => button.classList.add(cls));
    } else if (button.classList.value === "clear") {
      btnClearClass.split(" ").forEach((cls) => button.classList.add(cls));
    } else if (button.classList.value === "equal") {
      btnEqClass.split(" ").forEach((cls) => button.classList.add(cls));
    } else if (button.classList.value === "decimal") {
      btnDecClass.split(" ").forEach((cls) => button.classList.add(cls));
    }

    const baseClass =
    "number flex w-12 h-12 justify-center items-center m-1 font-bold py-2 px-2 border hover:border-transparent rounded text-white border-2 text-2xl";
  baseClass.split(" ").forEach((cls) => button.classList.add(cls));
}