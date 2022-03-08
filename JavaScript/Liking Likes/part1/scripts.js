var item = document.querySelector("span");
var counter = item.innerHTML;
function increaseLikesNumber(){
counter++;
item.innerText=counter;
}