

function iniciar(){
    var audio = document.getElementById("miAudio");
    var button = document.getElementById("iniciar");
    if(audio.paused) {
        audio.play();
        button.textContent = "||";
    } else {
        audio.pause();
        button.textContent= "PLAY";
    }
}
function reiniciar(){
        var audio = document.getElementById("miAudio");
        audio.currentTime = 0
}
function adelantar(value){
        var audio = document.getElementById("miAudio");
        audio.currentTime+= value;
}
function atrasar(value){
        var audio = document.getElementById("miAudio");
        audio.currentTime-= value;
}
function subir(value){
        var audio = document.getElementById("miAudio"); 
        audio.volume += value;
}    
function stop(){
    var audio = document.getElementById("miAudio");
    audio.load();
}
    
    

function bajar(value){
        var audio = document.getElementById("miAudio");
        audio.volume -= value;
}