let mode = 6;
let colors = generateRandomColors(mode);
let squares = document.querySelectorAll(".square");
let pickedColor = pickColor();
let colorDisplay = document.getElementById("colorDisplay");
let messageDisplay = document.querySelector("#message");
let h1 = document.querySelector("h1");
let resetButton = document.getElementById("reset");
let easyButton = document.querySelector("#easy");
let hardButton = document.querySelector("#hard");


easyButton.addEventListener("click", function(){
    this.classList.add("selected");
    hardButton.classList.remove("selected");
    mode = 3;
    colors = generateRandomColors(mode);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    for(let i = 0 ; i < squares.length; i++){
        if(colors[i]){
            squares[i].style.backgroundColor = colors[i];
        }else{
            squares[i].style.display = "none";
        }
    }
});

hardButton.addEventListener("click", function(){
    this.classList.add("selected");
    easyButton.classList.remove("selected");
    mode = 6;
    colors = generateRandomColors(mode);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    for(let i = 0 ; i < squares.length; i++){
        if(colors[i]){
            squares[i].style.backgroundColor = colors[i];
            squares[i].style.display = "block";
        }
    }
});

resetButton.addEventListener("click", function(){
    //generate all new colors
    colors = generateRandomColors(mode);
    //pick a new randome color from array
    pickedColor = pickColor();
    //change colors of squares
    colorDisplay.textContent = pickedColor;
    for(let i = 0; i < squares.length; i++){
            squares[i].style.backgroundColor = colors[i];
    };
    h1.style.backgroundColor = "steelblue";
    resetButton.textContent = "New Colors";
});

colorDisplay.textContent = pickedColor;

for(let i = 0; i < squares.length; i++){
    //add initial colors to squares
    squares[i].style.backgroundColor = colors[i];
    //add event listener to squares
    squares[i].addEventListener("click", function(){
    //grab color of clicked square
        let clickedColor = this.style.backgroundColor;
    //compare color of clicked square to picked color
        if(clickedColor === pickedColor){
            messageDisplay.textContent = "Correct!";
            changeColors(clickedColor);
            h1.style.backgroundColor = clickedColor;
            resetButton.textContent = "Play Again";
        } else {
            this.style.backgroundColor = "#232323";
            messageDisplay.textContent = "Try Again";
        }
    });
};

function changeColors(color){
    //loop through all squares
    for(let i = 0; i < squares.length; i++){
    //change each color to match given color
    squares[i].style.backgroundColor = color;
    }
};

function pickColor(){
    //pick random color from colors
    let random = Math.floor(Math.random() * colors.length);
    return colors[random];
};

function generateRandomColors(num){
    //make an arry
    let arr = [];
    //add num random colors to array
    for(let i = 0; i < num; i++){
        //get random color and push into array
        arr.push(randomColor());
    }
    //return array
    return arr;
}

function randomColor(){
    //create rgb string
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    return "rgb(" + r + ", " + g + ", " + b + ")"
}