var canvas;
var context;
var logoHeight = 30;
var nqHeight = 350;
var barHeight = 375;
var scaleHeight = 450;
var evaluationHeight = 535;

window.onload = function() {
	drawResults();
};

function drawResults(){
	var evText = document.getElementById('evaluation');
	var score = localStorage.getItem("score");

	if (score <= 25){
		evText.textContent = "Yeah nice one head to the submit page if you feel like helping out";
	}else if (score <= 75){
		evText.textContent = "You know your way around a meme or two, but don't get too cocky...";
	} else if (score <= 125){
		evText.textContent = "Looks like you're just a regular old knuckle-dragging normie. Better luck next time!";
	} else if (score <= 175){
		evText.textContent = "I feel sorry for you... and your parents.";
	} else{
		evText.textContent = "You did this on purpose right?";
	}
	canvas=document.getElementById("canvas");
	context=canvas.getContext("2d");

	drawBG();

	var logo = document.getElementById("mediumLogo");
	context.drawImage(logo, 93, logoHeight);

	context.font = "bold 3em Montserrat";
	context.fillText("YOUR NQ: " + score, 198, nqHeight);

	if (score != 0){
		score = score*3-2; //For drawing the bar
	}

	var pinkBar=context.createImageData(score,43);
	for (var i=0;i<pinkBar.data.length;i+=4){
		pinkBar.data[i+0]=255;
		pinkBar.data[i+1]=159;
		pinkBar.data[i+2]=188;
		pinkBar.data[i+3]=255;
	}
	context.putImageData(pinkBar, 62, barHeight + 2);

	var bar = document.getElementById("resultBar");
	context.drawImage(bar, 60, barHeight);

	context.font = "bold 1.25em Montserrat";
	context.fillText("WOKE", 25, scaleHeight);
	context.fillText("NORMIE", 318, scaleHeight);
	context.fillText("TURBO", 620, scaleHeight);
	context.fillText("NORMIE", 615, scaleHeight + 22)
};

function drawBG(){
	var background=context.createImageData(720,510);
	for (var i=0;i<background.data.length;i+=4){
		background.data[i+0]=255;
		background.data[i+1]=255;
		background.data[i+2]=255;
		background.data[i+3]=255;
	}
	context.putImageData(background, 0, 0);
};

function getImage(){
	var getImgButton = document.getElementById("shareButton");
	var shareInfo = document.getElementById("shareInfo");
	getImgButton.style.display = 'none';
	shareInfo.style.display = '';
}