

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
        audio.preload;
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
function bajar(value){
        var audio = document.getElementById("miAudio");
        audio.volume -= value;
}