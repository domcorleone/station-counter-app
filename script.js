let count=0
function increment(){
  count +=1
  document.getElementById("count-el").textContent = count;  
}

function save(){
  document.getElementById("entries-el").textContent += document.getElementById("count-el").textContent + " - "
  //after save set counter to zero
  count = 0
  document.getElementById("count-el").textContent = count
  
}