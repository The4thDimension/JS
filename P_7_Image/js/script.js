function upload(){

    var img = document.getElementById("img");
    var image = new SimpleImage(img);
    var canvas = document.getElementById("can");
    image.drawTo(canvas);
    
  }