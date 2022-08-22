var sound = new Audio("../music/walkalone.mp3");
var button = document.getElementById("play-button")
button.style.backgroundColor='black';
button.addEventListener('click',()=>{
	sound.currentTime = 0;
	sound.play();
});