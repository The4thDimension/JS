canvas = document.getElementById("can");
var image = null;
var imageGrey = null;
var imageRed = null;
var imageRedHue = null;
var imageRainbow = null;

function uploadImage(){
  
  img = document.getElementById("img");
  image = new SimpleImage(img);
  imageGrey = new SimpleImage(img);
  imageRed = new SimpleImage(img);
  imageRedHue = new SimpleImage(img);
  imageRainbow = new SimpleImage(img);
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

  if(image == null)
    alert("No image");
  else{

    var imageBlur = new SimpleImage(image.getWidth(),image.getHeight());

    for(var pixel of image.values()){

      var rand = Math.random();
      var x = pixel.getX();
      var y = pixel.getY();
      var blurPixel = imageBlur.getPixel(x,y);

      if(rand == 0){

        blurPixel.setRed(pixel.getRed());
        blurPixel.setBlue(pixel.getBlue());
        blurPixel.setGreen(pixel.getGreen());

      }

      else{

        var xRand = Math.floor((Math.random() * 10) + 1);
        var yRand = Math.floor((Math.random() * 10) + 1);

        try{

          var newPixel = image.getPixel(x + xRand,y + yRand);

        }

        catch(err){

          var newPixel = image.getPixel(x,y);

        }

        finally{

          blurPixel.setRed(newPixel.getRed());
          blurPixel.setBlue(newPixel.getBlue());
          blurPixel.setGreen(newPixel.getGreen());

        }

      }
    }


    var ctx = canvas.getContext("2d");
    ctx.clearRect(0,0,canvas.width,canvas.height);
    imageBlur.drawTo(canvas);
  }
}


function doRedHue(){

  if(imageRedHue == null)
    alert("No Image");
  else{
    for(var pixel of imageRedHue.values()){
      var avg = (pixel.getRed() + pixel.getGreen() + pixel.getBlue()) / 3;
      if(avg < 128)
        pixel.setRed(avg * 2);
      else
        pixel.setRed(255);
      var ctx = canvas.getContext("2d");
      ctx.clearRect(0,0,canvas.width,canvas.height);
      imageRedHue.drawTo(canvas);
    }
  }
}



function doRainbow(){

  if(imageRainbow == null)
    alert("No image");
  else{

    for(var pixel of imageRainbow.values()){

      var avg = (pixel.getRed() + pixel.getGreen() + pixel.getBlue()) / 3;
      var h = imageRainbow.getHeight() / 7;

      if(pixel.getY() < h){

        if(avg < 128){
          pixel.setRed(avg * 2);
          pixel.setBlue(0);
          pixel.setGreen(0);
        }

        else{
          pixel.setRed(255);
          pixel.setGreen(avg * 2 - 255);
          pixel.setBlue(avg * 2 - 255);
        }

      }

      else  if(pixel.getY() < h * 2){

        if(avg < 128){
          pixel.setRed(avg * 2);
          pixel.setBlue(avg * 0.8);
          pixel.setGreen(0);
        }

        else{
          pixel.setRed(255);
          pixel.setGreen(avg * 1.2 - 51);
          pixel.setBlue(avg * 2 - 255);
        }

      }

      else if(pixel.getY() < h * 3){

        if(avg < 128){
          pixel.setRed(avg * 2);
          pixel.setBlue(avg * 2);
          pixel.setGreen(0);
        }

        else{
          pixel.setRed(255);
          pixel.setGreen(255);
          pixel.setBlue(avg * 2 - 255);
        }

      }

      else if(pixel.getY() < h * 4){

        if(avg < 128){
          pixel.setRed(0);
          pixel.setBlue(avg * 2);
          pixel.setGreen(0);
        }

        else{
          pixel.setRed(avg * 2 - 255);
          pixel.setGreen(255);
          pixel.setBlue(avg * 2 - 255);
        }

      }

      else if(pixel.getY() < h * 5){

        if(avg < 128){
          pixel.setRed(0);
          pixel.setBlue(0);
          pixel.setGreen(avg * 2);
        }

        else{
          pixel.setRed(avg * 2 - 255);
          pixel.setGreen(avg * 2 - 255);
          pixel.setBlue(255);
        }

      }

      else if(pixel.getY() < h * 6){

        if(avg < 128){
          pixel.setRed(avg * 0.8);
          pixel.setBlue(0);
          pixel.setGreen(avg * 2);
        }

        else{
          pixel.setRed(avg * 1.2 - 51);
          pixel.setGreen(avg * 2 - 255);
          pixel.setBlue(255);
        }

      }

      else if(pixel.getY() < h * 7){

        if(avg < 128){
          pixel.setRed(avg * 0.6);
          pixel.setBlue(0);
          pixel.setGreen(avg * 1.6);
        }

        else{
          pixel.setRed(avg * 0.4 - 153);
          pixel.setGreen(avg * 2 - 255);
          pixel.setBlue(avg * 0.4 - 153);
        }

      }

    }

    var ctx = canvas.getContext("2d");
    ctx.clearRect(0,0,canvas.width,canvas.height);
    imageRainbow.drawTo(canvas);
  }
}
