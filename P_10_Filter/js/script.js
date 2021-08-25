canvas = document.getElementById("can");
var image = null;
var imageGrey = null;
var imageRed = null;
var imageBlur = null;

function uploadImage(){
  
  img = document.getElementById("img");
  image = new SimpleImage(img);
  imageGrey = new SimpleImage(img);
  imageRed = new SimpleImage(img);
  imageBlur = new SimpleImage(img);
  image.drawTo(canvas);
  
}

function doGrey(){
  
  if(imageGrey == null)
    alert("No Image");
  else{
    document.getElementById("can").style.filter = "none";
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
    document.getElementById("can").style.filter = "none";
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
    document.getElementById("can").style.filter = "none";
    var ctx = canvas.getContext("2d");
    ctx.clearRect(0,0,canvas.width,canvas.height);
    image.drawTo(canvas);
  }

}

function doBlur(){

  if(imageBlur == null)
    alert("No image");
  else{
    document.getElementById("can").style.filter = "blur(8px)";
  }
}






  /*filter: blur(8px);*/

/*One of my failed attempts to do the blur feature manually*/



/*A loop which doesn't work*/



/*for(var y = 0;y <= height;y = y + 3){
      yCount = y;
      for(var x = 0;x <= width;x = x + 3){
        xCount = x;
        for(var i = 0;i < 3;i++){
          for(var j = 0;j < 3;j++){
              var pixel = imageBlur.getPixel(xCount,yCount);
              red = red + pixel.getRed();
              blue = blue + pixel.getBlue();
              green = green + pixel.getGreen();
              yCount = yCount + 1;
          }
          xCount = xCount + 1;
          yCount = y;
        }
        xCount = x;
        yCount = y;
        for(var i = 0;i < 3;i++){
          for(var j = 0;j < 3;j++){
            var pixel = imageBlur.getPixel(xCount,yCount);
            pixel.setRed(red / 9);
            pixel.setBlue(blue / 9);
            pixel.setGreen(green / 9);
            yCount = yCount + 1;
          }
          xCount = xCount + 1;
          yCount = y;
        }
      }
    }*/



/*Resources for the loop which doesn't work



    var red = 0;
    var green = 0;
    var blue = 0;
    var xCount = 0;
    var yCount = 0;
    var height = imageBlur.getHeight();
    var width = imageBlur.getWidth();*/