
let Hburger = document.querySelector("#icon");
let Snav = document.querySelector(".smallnav");
let Bnav = document.querySelector("#left-nav");

 function IN(){
    Snav.style.display = "block";
   Bnav.style.display = "none";
 }
 function OUT(){
   Snav.style.display = "none";
   Bnav.style.display = "block";
 }

 let value = 0;
 Hburger.addEventListener("click", function(){
    if(value === 0){
        OUT();
        value = 1;
    }else{
      IN();
        value = 0;
    }
 })