function makeLime(){

    d = document.getElementById("getThis");
    d.style.backgroundColor = "Lime";

}

function makeYellow(){

    d = document.getElementById("getThis");
    d.style.backgroundColor = "white";
    ctx = d.getContext("2d");
    ctx.fillStyle = "yellow";
    ctx.fillRect(10,10,60,60);
    ctx.fillRect(80,10,60,60);
    ctx.fillStyle = "black";
    ctx.font = "30px Arial";
    ctx.fillText("Hello!",10,100);
    
}