var image1;
var image2;


function upload(){

    var img1 = document.getElementById("img");
    image1 = new SimpleImage(img1);
    var img2 = document.getElementById("img");
    image2 = new SimpleImage(img2);
    var canvas = document.getElementById("can1");
    image1.drawTo(canvas);
    
}

function greyScale(){
  
    for(var pixel of image2.values()){
      
      var avg = (pixel.getGreen() + pixel.getRed() + pixel.getBlue()) / 3;
      pixel.setRed(avg);
      pixel.setGreen(avg);
      pixel.setBlue(avg);
      
    }
    
    var canvas = document.getElementById("can2");
    image2.drawTo(canvas);
    
}