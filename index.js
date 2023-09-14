
    var n = document.querySelectorAll(".drum").length;
    document.querySelectorAll(".drum")[0].classList[0];
    for( var i=0; i<n;i++){
    
    document.querySelectorAll(".drum")[i].addEventListener("click",function(){
       var instrument = this.innerHTML;
       check(instrument);
       buttonAnimation(instrument);
    //    if (instrument === 'w'){
    //     var audio = new Audio("sounds/tom-1.mp3");
    //     audio.play();
    //    }
    //    else if(instrument === 'a'){
    //     var audio = new Audio("sounds/tom-2.mp3");
    //     audio.play();
    //    }
    //    else if(instrument === 's'){
    //     var audio = new Audio("sounds/tom-3.mp3");
    //     audio.play();
    //    }
    //    else if(instrument === 'd'){
    //     var audio = new Audio("sounds/tom-4.mp3");
    //     audio.play();
    //    }
    //    else if(instrument === 'j'){
    //     var audio = new Audio("sounds/snare.mp3");
    //     audio.play();
    //    }
    //    else if(instrument === 'k'){
    //     var audio = new Audio("sounds/crash.mp3");
    //     audio.play();
    //    }
    //    else if(instrument === 'l'){
    //     var audio = new Audio("sounds/kick-bass.mp3");
    //     audio.play();
    //    }
    });}
function check(SendParameter){
    switch(SendParameter){
        case("w"):
        var audio = new Audio("sounds/tom-1.mp3");
        audio.play();
        break;
        case "a":
            var audio = new Audio("sounds/tom-2.mp3");
            audio.play();
            break;
        
        case "s":
            var audio = new Audio("sounds/tom-2.mp3");
            audio.play();
            break;
        
        case "d":
            var audio = new Audio("sounds/tom-4.mp3");
            audio.play();
            break;

        case "j":
            var audio = new Audio("sounds/snare.mp3");
            audio.play();
            break;
        case "k":
            var audio = new Audio("sounds/crash.mp3");
            audio.play();
            break; 
        case "l":
            var audio = new Audio("sounds/kick-bass.mp3");
            audio.play();
            break;   
    }
};
document.addEventListener("keydown",function(event){
    // alert(event.key+" is pressed");
    check(event.key);
    buttonAnimation(event.key);
});

function buttonAnimation(key){
    var keyAnimation = document.querySelector("."+key);
    keyAnimation.classList.add("pressed");
    setTimeout(function(){keyAnimation.classList.remove("pressed");},100);
}
    