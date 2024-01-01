var ran1 = Math.ceil((Math.random() * 10)) % 6+1;
var ran2 = Math.ceil((Math.random() * 10)) % 6+1;
var prev = './images/dice';
var end = '.png';

if(ran1>ran2)
{
    document.querySelector("h1").innerHTML="Player 1 win";
}
else if(ran2>ran1)
{
    document.querySelector("h1").innerHTML="Player 2 win";
}
else
{
    document.querySelector("h1").innerHTML="There's a draw";
}

// Get the elements with the 'img1' class
var elements = document.querySelector(".img1");

// Access the first element in the collection (index 0) and set its 'src' attribute
elements.setAttribute("src", prev + ran1 + end);

var elements1 = document.querySelector(".img2");

// Access the first element in the collection (index 0) and set its 'src' attribute
elements1.setAttribute("src", prev + ran2 + end);


