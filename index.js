var cnt = document.querySelectorAll(".drum").length
var arr = document.querySelectorAll(".drum")

document.addEventListener("keydown",soundplay1);
function soundplay1(event) {
    soundplay(event.key);
}
for (var i = 0; i < cnt; i++) {
    // console.log(i);
    document.querySelectorAll(".drum")[i].addEventListener("click",function (){soundplay(this.innerHTML)});

  }

function soundplay(input) {
    
    // var input = this.innerHTML;
    console.log(input);
    switch (input) {
        case "w":
            var sound = new Audio('sounds/crash.mp3');
            sound.play();
            break;
        case "a":
            var sound = new Audio('sounds/kick-bass.mp3');
            sound.play();
            break;
        case "s":
            var sound = new Audio('sounds/snare.mp3');
            sound.play();
            break;
        case "d":
            var sound = new Audio('sounds/tom-1.mp3');
            sound.play();
            break;
        case "j":
            var sound = new Audio('sounds/tom-2.mp3');
            sound.play();
            break;
        case "k":
            var sound = new Audio('sounds/tom-3.mp3');
            sound.play();
            break;
        case "l":
            var sound = new Audio('sounds/tom-4.mp3');
            sound.play();
            break;
        default :
            var sound = new Audio('sounds/crash.mp3');
            sound.play();
            break;



    }


}
  

