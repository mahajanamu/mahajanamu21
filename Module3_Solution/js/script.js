// DOM manipulation
// console.log(document.getElementById("title"));
// console.log(document instanceof HTMLDocument);
$(function(){
  $("#navbarToggle").blur(function(event) {
    var screenWidth = window.innerWidth;
    if(screenWidth < 768) {
      $("#collapsable-nav").collapse('hide');
    }
  });

function sayHello () {
	this.textContent="Said it"
  var name =
   document.getElementById("name").value;
   var message = "<h4>You searched for ";

  // document
  //   .getElementById("content")
  //   .textContent = message;
  if (name === "chicken") {

  document
    .getElementById("content")
    .innerHTML = message  + "<a href= '#chicken' >"+ name + "</h4> </a>" ;

  }
  else if (name==="sushi"){
    document
    .getElementById("content").innerHTML =  message + "<a href= '#sushi' >"+ name + "</h4> </a>" ;

  }
  else if (name==="beef"){
    document
    .getElementById("content").innerHTML = message  + "<a href= '#beef' >"+ name + "</h4> </a>" ;

  }

  else{
  document
    .getElementById("content").innerHTML = "<h4>Not Found</h4> " ;  
  }
}
document.querySelector("button")
.addEventListener("click",sayHello);
});