canvas = document.getElementById("can");
var image = null;
var imageGrey = null;
var imageRed = null;

function uploadImage(){
  
  img = document.getElementById("img");
  image = new SimpleImage(img);
  imageGrey = new SimpleImage(img);
  imageRed = new SimpleImage(img);
  image.drawTo(canvas);
  
}

function doGrey(){
  
  if(imageGrey == null)
    alert("No Image");
  else{
    for(var pixel of imageGrey.values()){
      var avg = (pixel.getRed() + pixel.getGreen() + pixel.getBlue()) / 3;
      pixel.setRed(avg);
      pixel.setGreen(avg);
      pixel.setBlue(avg);
      var ctx = canvas.getContext("2d");
      ctx.clearRect(0,0,canvas.width,canvas.height);
      imageGrey.drawTo(canvas);
    }
  }
}

function doRed(){

  if(imageRed == null)
    alert("No Image");
  else{
    for(var pixel of imageRed.values()){
      pixel.setRed(255);
      var ctx = canvas.getContext("2d");
      ctx.clearRect(0,0,canvas.width,canvas.height);
      imageRed.drawTo(canvas);
    }
  }
}

function doReset(){
  if(image == null)
    alert("No Image");
  else{
    var ctx = canvas.getContext("2d");
    ctx.clearRect(0,0,canvas.width,canvas.height);
    image.drawTo(canvas);
  }
}