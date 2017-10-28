
window.onload = function() {
	drawResults();
};

function drawResults(){
	var NQ = document.getElementById('NQ');
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
	NQ.textContent = "YOUR NQ: " + score;

	var canvas=document.getElementById("canvas");
	var context=canvas.getContext("2d");

	var bar = document.getElementById("resultBar");

	if (score != 0){
		score = score*3-2; //For drawing the bar
	}

	var imgData=context.createImageData(score,43);
	for (var i=0;i<imgData.data.length;i+=4){
		imgData.data[i+0]=255;
		imgData.data[i+1]=159;
		imgData.data[i+2]=188;
		imgData.data[i+3]=255;
	}

	context.putImageData(imgData, 2, 2);
	context.drawImage(bar, 0, 0);
}