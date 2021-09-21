var image1 = null;
var image2 = null;
var Image1 = null;
var Image2 = null;
var canvas1 = document.getElementById("can1");
var canvas2 = document.getElementById("can2");
var canvas3 = document.getElementById("can3");
var canvas4 = document.getElementById("can4");

function crop(newImage,width,height){

    var returnImage = new SimpleImage(width,height);
    for(var px of returnImage.pixels()){

        var x = px.getX();
        var y = px.getY();

        try{
            var changePixel = newImage.getPixel(x,y);
        }

        catch(err){
            continue;
        }

        px.setRed(changePixel.getRed());
        px.setGreen(changePixel.getGreen());
        px.setBlue(changePixel.getBlue());
        
    }

    return returnImage;

}


function uploadImage1(){

    var img = document.getElementById("img1");
    image1 = new SimpleImage(img);
    image1.drawTo(canvas1);

}

function uploadImage2(){

    var img = document.getElementById("img2");
    image2 = new SimpleImage(img);
    image2.drawTo(canvas2);
    
}

function splitPixel(px){

    px.setRed(Math.floor(px.getRed() / 16) * 16)
    px.setGreen(Math.floor(px.getGreen() / 16) * 16)
    px.setBlue(Math.floor(px.getBlue() / 16) * 16)

}

function combineImage(){
    if(image1 == null)
    alert("Please load the image to alter...");
    else if(image2 == null)
    alert("Please load the image to hide...");

    else{

        var h1 = image1.getHeight();
        var h2 = image2.getHeight();
        var height;
        var width;
        if(h1 < h2){
            height = h1;
            width = image1.getWidth();
        }
        else{
            height = h2;
            width = image2.getWidth();
        }  
        Image1 = crop(image1,width,height);
        Image2 = crop(image2,width,height)  

        for(var pixel of Image1.values()){

            var x = pixel.getX();
            var y = pixel.getY();
            try{
                var hidePixel = Image2.getPixel(x,y);
            }
            catch(err){
                continue;
            }
            splitPixel(pixel);
            splitPixel(hidePixel);
            pixel.setRed(pixel.getRed() + (hidePixel.getRed() / 16));
            pixel.setGreen(pixel.getGreen() + (hidePixel.getGreen() / 16));
            pixel.setBlue(pixel.getBlue() + (hidePixel.getBlue() / 16));

        }

        Image1.drawTo(canvas3);

    }

}


function getSplit(px){

    px.setRed(Math.floor(px.getRed() % 16) * 16)
    px.setGreen(Math.floor(px.getGreen() % 16) * 16)
    px.setBlue(Math.floor(px.getBlue() % 16) * 16)

}

function getImage(){

    if(image1 == null)
        alert("Please load the image to alter...");
    else if(image2 == null)
        alert("Please load the image to hide...");
    else{

        for(var pixel of Image1.values()){

            getSplit(pixel);

        }

        Image1.drawTo(canvas4);

    }

}