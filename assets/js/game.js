window.setTimeout(function(){


var numberOfSquares=6;	
// var colors =generateRandomColor(numberOfSquares);
var colors=[];
// var pickedColor = pickColorRandom();
var pickedColor;
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay=document.querySelector("#message");
var h1=document.querySelector("h1");
var resetButton=document.querySelector("#reset");
// making a list of button of easy and hard
var modeButtons = document.querySelectorAll(".mode");

// we create afunction init and inside we put everything that needs to run when a page is refreshed
init();
function init()
{
	// setting up mode button listeners
	setupModeButtons();	
	setupSquares();
    reset();

}

function setupModeButtons()
{
	for(var i = 0; i < modeButtons.length; i++) {
	modeButtons[i].addEventListener("click", function() {
		// removing seleted from both the button
		modeButtons[0].classList.remove("selected");
		modeButtons[1].classList.remove("selected");
		// adding to the one which we just clicked one
		this.classList.add("selected");	
		//we are using below is called ternary operators
		this.textContent === "Easy" ?	numberOfSquares = 3 : numberOfSquares = 6;
		reset();
	});
}
}
function setupSquares()
{
	// setting up square listeners
for(var i = 0; i < squares.length; i++){
	// add initial colors to squares
	// squares[i].style.backgroundColor= colors[i];

	//add click listeners to squares
	squares[i].addEventListener("click", function() {
		//grab color of clicked squares
		var clickedColor = this.style.backgroundColor;
		//compare color to pickedColor
		if(clickedColor === pickedColor) {
			messageDisplay.textContent="Correct";
			resetButton.textContent="Play Again?"
			changeColors(clickedColor);
			h1.style.backgroundColor=clickedColor;
		} else {
			this.style.backgroundColor="#232323";
			messageDisplay.textContent="Try Again"
	
		}
		});
}
}
function reset()
{
	// mode buttons that is to select difficulty of the game
	colors=generateRandomColor(numberOfSquares);
	// pick a random color from the array
	pickedColor=pickColorRandom();
	// change colordisplay to match picked color
	colorDisplay.textContent=pickedColor;
	resetButton.textContent="New Colors";
	messageDisplay.textContent="";
	// change colors of square
	for(var i=0;i<squares.length;i++)
	{
		if(colors[i])
		{
			squares[i].style.display="block";
			// above code is to bring back the three colors which go into hiding when we click easy.
            squares[i].style.backgroundColor=colors[i];
		}
		else
		{
			squares[i].style.display="none";
		}
		
	}
	h1.style.backgroundColor="steelblue";
}
resetButton.addEventListener("click",function(){
   reset();
})
function changeColors(color)
{
	// loop through all square
	for(var i=0;i<squares.length;i++)
	{
		// change each color to match given color
		squares[i].style.backgroundColor=color;

	}

}
function pickColorRandom()
{
	var random=Math.floor(Math.random()*colors.length);
	return colors[random];
}
function generateRandomColor(num){
	// make an array
	var arr=[];
	
	for(var i=0;i<num;i++)
	{
		// get random color and push into array
		arr.push(randomColor())
	}
	// return the array
	return arr;
}

function randomColor()
{
	// picking colors
	var r=Math.floor(Math.random()*256);
	var g=Math.floor(Math.random()*256);
	var b=Math.floor(Math.random()*256);
	// on comparison css adds space between the rgb values therefore we add space after comma
	return "rgb(" + r +", " + g + ", " +b + ")";
}

},1)