//1.get the element we want (maybe document.getElementByID?), attach eventListener
let clickable = document.querySelector("img.clickable");
clickable.addEventListener("click", clickCounter);

//declare counter variable
let count = 0;
console.log("Counter: ", count);

//show clicks in page's tab
let pageTitle = document.querySelector("title");

//click handler - event handler
function clickCounter(){
  count++;
  console.log("Counter: ", count);
  
  //get container, update its contents
  let container = document.querySelector("p#click-counter");
  container.innerHTML = count;

  //show clicks in page's tab
  pageTitle.innerHTML = count;

  // visual indicator
  if (count == 10) {
  	window.alert("You've reached 10 clicks!!")
  } else if (count == 20) {
  	window.alert("You've reached 20 clicks!!")
  }
}

