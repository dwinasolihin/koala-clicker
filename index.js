//1.get the element we want (maybe document.getElementByID?), attach eventListener
let clickable = document.querySelector("img.clickable");
clickable.addEventListener("click", clickCounter);

//declare counter variable
let count = 0;
console.log("Counter: ", count);

//click handler - event handler
function clickCounter(){
  count++;
  console.log("Counter: ", count);
  
  //get container, update its contents
  let container = document.querySelector("p#click-counter");
  container.innerHTML = count;
}

