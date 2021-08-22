canvas = document.getElementById("can");
var image = null;

function uploadImage(){
  
  var img = document.getElementById("img");
  image = new SimpleImage(img);
  image.drawTo(canvas);
  
}

function doGrey(){
  
  if(image == null)
    alert("No Image");
  else{
    imageGrey = image;
    for(var pixel of imageGrey.values()){
      var tot = pixel.getRed() + pixel.getGreen() + pixel.getBlue();
      var avg = tot / 3;
      pixel.setRed(avg);
      pixel.setGreen(avg);
      pixel.setBlue(avg);
      var ctx = canvas.getContext("2d");
      ctx.clearRect(0,0,canvas.width,canvas.height);
      imageGrey.drawTo(canvas);
    }
  }
}