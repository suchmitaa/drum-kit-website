
var numberOfButtons=document.querySelectorAll(".drum").length;

for(var i=0;i<numberOfButtons;i++){

    document.querySelectorAll(".drum")[i].addEventListener("click",handleClick);
}

function handleClick(){
    
    //var audio=new Audio('sounds/tom-1.mp3');
    //audio.play();
    
    var buttonText=this.innerHTML;

    switch(buttonText){

        case "w":
             var tom1=new Audio('sounds/tom-1.mp3');
             tom1.play();
             break;


        case "a":
             var tom2=new Audio('sounds/tom-2.mp3');
             tom2.play();
             break;

        case "s":
             var tom3=new Audio('sounds/tom-3.mp3');
             tom3.play();
             break;

        
        case "d":
             var tom4=new Audio('sounds/tom-4.mp3');
             tom4.play();
             break; 

        case "j":
             var crash=new Audio('sounds/crash.mp3');
             crash.play();
             break;

        case "k":
             var kick=new Audio('sounds/kick-bass.mp3');
             kick.play();
             break; 

        case "l":
             var snare=new Audio('sounds/snare.mp3');
             snare.play();
             break;

  
    } 

    addAnimation(buttonText);


} 

document.addEventListener("keydown",function(event){ //anonymous function - the parameter event has the key which is pressed

     switch(event.key){ //.key is a property which retrives the pressed key

          case "w":
               var tom1=new Audio('sounds/tom-1.mp3');
               tom1.play();
               break;
  
  
          case "a":
               var tom2=new Audio('sounds/tom-2.mp3');
               tom2.play();
               break;
  
          case "s":
               var tom3=new Audio('sounds/tom-3.mp3');
               tom3.play();
               break;
  
          
          case "d":
               var tom4=new Audio('sounds/tom-4.mp3');
               tom4.play();
               break; 
  
          case "j":
               var crash=new Audio('sounds/crash.mp3');
               crash.play();
               break;
  
          case "k":
               var kick=new Audio('sounds/kick-bass.mp3');
               kick.play();
               break; 
  
          case "l":
               var snare=new Audio('sounds/snare.mp3');
               snare.play();
               break;
  
  
      } 

      addAnimation(event.key);
  
}); 

function addAnimation(key){

     var activeButton=document.querySelector("."+key);

     activeButton.classList.add("pressed");

     setTimeout(function(){
          activeButton.classList.remove("pressed");
     },100);

}