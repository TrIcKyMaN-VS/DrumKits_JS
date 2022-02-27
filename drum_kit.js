for(let i=0; i<document.querySelectorAll(".drum").length;i++){

    document.querySelectorAll(".drum")[i].addEventListener("click", function(){
         // alert("clicked")
//     var audio = new Audio('./Drum Kit Completed/sounds/crash.mp3')
//     audio.play();

    // this.style.color = "white"
    let buttonName = this.innerHTML;

    makeSound(buttonName);

    btnAnimations(buttonName);
    })
}

document.addEventListener('keypress', function(event){
    makeSound(event.key)
    // alert(".dnclknds")
});
// function playSound() {
   
// }
  
    function makeSound(key  ){


    // switch(buttonName){ //old
    switch(key){ //new
        case "w":
            var audio = new Audio('./Drum Kit Completed/sounds/tom-1.mp3')
            audio.play();
            break;
        case "a":
            var audio = new Audio('./Drum Kit Completed/sounds/tom-2.mp3')
            audio.play();
            break;
        case "s":
            var audio = new Audio('./Drum Kit Completed/sounds/tom-3.mp3')
            audio.play();
            break;
        case "d":
            var audio = new Audio('./Drum Kit Completed/sounds/tom-4.mp3')
            audio.play();
            break;
        case "j":
            var audio = new Audio('./Drum Kit Completed/sounds/snare.mp3')
            audio.play();
            break;
        case "k":
            // this.style.color = "yellow";
            var audio = new Audio('./Drum Kit Completed/sounds/crash.mp3')
            audio.play();
            // this.style.color = "green";
            break;
        case "L":
            var kb = new Audio('./Drum Kit Completed/sounds/kick-bass.mp3')
            kb.play();
            break;
        

           // default
    }
}

// btn ani


function btnAnimations(ckey){
    var activeBtn = document.querySelector("." + ckey)
    activeBtn.classList.add("pressed")

    setTimeout(function(){
        activeBtn.classList.remove("pressed")
    }, 200)
}