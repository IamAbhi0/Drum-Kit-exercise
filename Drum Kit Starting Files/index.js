// alert("Welcome to drum!")



let a=[]
for (let i = 0; i <7; i++) {
    console.log(i);
    a.push(i);

document.querySelectorAll("button");

document.querySelectorAll("button")[i].addEventListener("click",Music)

function Music()  {
//     this 

 
    // if (i==0){ 
    // var audio=new Audio('sounds/tom-1.mp3');
    // audio.play(); }
     
    
    // if  (i==1){
    //  var audio1=new Audio('sounds/tom-3.mp3')
    //  audio1.play();
    //  ;
    // }
    // if  (i==2){
    //  var audio1=new Audio('sounds/kick_bass.mp3')
    //  audio1.play();
    

    // }
    // if  (i==3){
    //  var audio1=new Audio('sounds/snare.mp3')
    //  audio1.play();
    

    // }
    // if  (i==4){
    //  var audio1=new Audio('sounds/tom-4.mp3')
    //  audio1.play();
   

    // }
    // if  (i==5){
    //  var audio1=new Audio('sounds/crash.mp3')
    //  audio1.play();
    

    // }
    // if  (i==6){
    //  var audio1=new Audio('sounds/tom-2.mp3')
    //  audio1.play();
   
     
    // }

let letters=(this.innerHTML);


    switch (letters) {
      case "w":
       var tom1=new Audio('sounds/tom-1.mp3');
         tom1.play();

    break;

    case "a":
       var tom3=new Audio('sounds/tom-3.mp3');
           tom3.play();
    break;

    case "l":
    var tom2=new Audio('sounds/tom-2.mp3');
    tom2.play();
    break;
     
    case "s":
    var audio1=new Audio('sounds/snare.mp3')
     audio1.play();
    break;

    case"d":
 var audio1=new Audio('sounds/snare.mp3')
     audio1.play();

    break;
    case"j":
  var audio1=new Audio('sounds/tom-4.mp3')
     audio1.play();

    break;
    case"k":
 var audio1=new Audio('sounds/crash.mp3')
     audio1.play();

    break;
    case"l":
  var audio1=new Audio('sounds/tom-2.mp3')
     audio1.play();

    break;
    default:
    }


}

}






document.addEventListener("keypress", function (event) {
    console.log(event);
    key=(event.key);
    if (key=='w'){
        var tom01=new Audio('sounds/tom-1.mp3')
        tom01.play();
    
        document.querySelector(".w").classList.add("ShadowonButton")
        
     setTimeout(function(){
      document.querySelector(".w").classList.remove("ShadowonButton")
     },200)  
        }

    else if(key=='d'){
      var jaudio=new Audio('sounds/tom-4.mp3')
     jaudio.play();
     
     document.querySelector(".d").classList.add("ShadowonButton")
        
     setTimeout(function(){
      document.querySelector(".d").classList.remove("ShadowonButton")
     },200)  
         

    }
    

    else if (key=='j'){
   var daudio=new Audio('sounds/snare.mp3')
     daudio.play();
    document.querySelector(".j").classList.add("ShadowonButton")
        
     setTimeout(function(){
      document.querySelector(".j").classList.remove("ShadowonButton")
     },200)  


    }


    else if (key=='k'){
     var kaudio=new Audio('sounds/crash.mp3')
     kaudio.play(); 
     document.querySelector(".k").classList.add("ShadowonButton")
    setTimeout(function(){
      document.querySelector(".k").classList.remove("ShadowonButton")
     },200) 
    }

    
    else if (key=='a'){
        var Aaudio=new Audio('sounds/tom-3.mp3')
        Aaudio.play();
       document.querySelector(".a").classList.add("ShadowonButton")
        
     setTimeout(function(){
      document.querySelector(".a").classList.remove("ShadowonButton")
     },200)

    }


    else if (key=='s'){
        var Saudio=new Audio('sounds/snare.mp3')
        Saudio.play();
  document.querySelector(".s").classList.add("ShadowonButton")
        
     setTimeout(function(){
      document.querySelector(".s").classList.remove("ShadowonButton")
     },200)   }

    else if (key=='l'){
        var Laudio=new Audio('sounds/tom-2.mp3')
        Laudio.play();
    document.querySelector(".l").classList.add("ShadowonButton")
        
     setTimeout(function(){
      document.querySelector(".l").classList.remove("ShadowonButton")
     },200)  
    }    

} )




   