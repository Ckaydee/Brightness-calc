// LUMINENCE CALCULATOR
document.getElementById("btn").addEventListener("click" , seriesCalc);
document.getElementById("light").addEventListener("click" , lighten);
document.getElementById("dark").addEventListener("click" , darken);
document.getElementById("reset").addEventListener("click" , reset);
document.getElementById("clearBtn").addEventListener("click" , clearInputs);

function clearInputs(){
    document.getElementById("r-in").value = "";
    document.getElementById("g-in").value = "";
    document.getElementById("b-in").value = "";
}

function lighten(){
    document.getElementById("html").style.backgroundColor = "white";
    document.getElementById("body").style.backgroundColor = "lightGrey";
    document.getElementById("body").style.color = "black";
    document.getElementById("btn").style.backgroundColor = "white";
    document.getElementById("btn").style.color = "black";
    document.getElementById("r-in").style.backgroundColor = "lightGrey";
    document.getElementById("r-in").style.color = "black";
    document.getElementById("g-in").style.backgroundColor = "lightGrey";
    document.getElementById("g-in").style.color = "black";
    document.getElementById("b-in").style.backgroundColor = "lightGrey";
    document.getElementById("b-in").style.color = "black";
    document.getElementById("light").style.backgroundColor = "white";
    document.getElementById("light").style.color = "black";
    document.getElementById("dark").style.backgroundColor = "white";
    document.getElementById("dark").style.color = "black";
    document.getElementById("reset").style.backgroundColor = "white";
    document.getElementById("reset").style.color = "black";
    
}

function darken(){
    document.getElementById("html").style.backgroundColor = "black";
    document.getElementById("body").style.backgroundColor = "rgb(94, 90, 90)";
    document.getElementById("body").style.color = "white";
    document.getElementById("btn").style.backgroundColor = "black";
    document.getElementById("btn").style.color = "white";
    document.getElementById("r-in").style.backgroundColor = "black";
    document.getElementById("r-in").style.color = "white";
    document.getElementById("g-in").style.backgroundColor = "black";
    document.getElementById("g-in").style.color = "white";
    document.getElementById("b-in").style.backgroundColor = "black";
    document.getElementById("b-in").style.color = "white";
    document.getElementById("light").style.backgroundColor = "black";
    document.getElementById("light").style.color = "white";
    document.getElementById("dark").style.backgroundColor = "black";
    document.getElementById("dark").style.color = "white";
    document.getElementById("reset").style.backgroundColor = "black";
    document.getElementById("reset").style.color = "white";
}

function reset(){
    document.getElementById("html").style.backgroundColor = "black";
    document.getElementById("body").style.backgroundColor = "white";
    document.getElementById("body").style.color = "black";
    document.getElementById("btn").style.backgroundColor = "rgb(61, 61, 61)";
    document.getElementById("btn").style.color = "white";
    document.getElementById("r-in").style.backgroundColor = "white";
    document.getElementById("r-in").style.color = "black";
    document.getElementById("g-in").style.backgroundColor = "white";
    document.getElementById("g-in").style.color = "black";
    document.getElementById("b-in").style.backgroundColor = "white";
    document.getElementById("b-in").style.color = "black";
    document.getElementById("light").style.backgroundColor = "rgb(61, 61, 61)";
    document.getElementById("light").style.color = "white";
    document.getElementById("dark").style.backgroundColor = "rgb(61, 61, 61)";
    document.getElementById("dark").style.color = "white";
    document.getElementById("reset").style.backgroundColor = "rgb(61, 61, 61)";
    document.getElementById("reset").style.color = "white";

}

function seriesCalc(){
// INPUT
    let r = +document.getElementById("r-in").value;
    let g = +document.getElementById("b-in").value;
    let b = +document.getElementById("g-in").value;
 // PROCESS
    let lumin = Math.sqrt((0.299 * r ** 2) + (0.587 * g ** 2) + (0.114 * b ** 2));
// OUTPUT   
    document.getElementById("result").innerHTML = lumin;
}



