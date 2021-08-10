function setColor(){

    var canvas = document.getElementById("canv");
    var col = document.getElementById("col");
    var color = col.value;
    canvas.style.backgroundColor = color;

  }
  
  
  function setSquare(){

    var canvas = document.getElementById("canv");
    var val = document.getElementById("num");
    number = val.value;
    var ctx = canvas.getContext("2d");
    ctx.clearRect(0,0,canvas.width,canvas.height);
    ctx.fillStyle = "yellow";
    ctx.fillRect(10,10,number,number);
    
  }