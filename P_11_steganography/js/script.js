var image1 = null;
var image2 = null;
var image3 = null;
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

        catch{
            continue;
        }

        px.setRed(changePixel.getRed());
        px.setGreen(changePixel.getGreen());
        px.setBlue(changePixel.getBlue());
        
    }

    return returnImage;

}

function cropImage(image1,image2){

    var h1 = image1.getHeight();
    var h2 = image2.getHeight();
    if(h1 < h2){

        var width = image1.getWidth();
        alert(h1);
        alert(width);
        //return crop(image2,width,h1);

    }

    else{

        var width = image2.getWidth();
        alert(h2);
        alert(width);
        //return crop(image1,width,h2);

    }

}

function uploadImage1(){

    var img = document.getElementById("img1");
    image1 = new SimpleImage(img);
    image1.drawTo(canvas1);
    if(image2 != null){
        image3 = cropImage(image1,image2);
        //image3.drawTo(canvas3);
    }

}

function uploadImage2(){

    var img = document.getElementById("img2");
    image2 = new SimpleImage(img);
    image2.drawTo(canvas2);
    if(image1 != null){
        image3 = cropImage(image1,image2);
        //image3.drawTo(canvas3);
    }
    
}

function splitPixel(px){

    px.setRed(Math.floor(px.getRed() / 16) * 16)
    px.setGreen(Math.floor(px.getGreen() / 16) * 16)
    px.setBlue(Math.floor(px.getBlue() / 16) * 16)

}

/*function combineImage(){

    if(image1 == null)
        alert("Please load the image to alter...");
    else if(image2 == null)
        alert("Please load the image to hide...");
    else{

        var h1 = image1.getHeight();
        var h2 = image2.getHeight();
        var w1 = image1.getWidth();
        var w2 = image2.getWidth();
        var height;
        var width;
        if(h1 < h2)
            height = h1;
        else
            height = h2;
        if(w1 < w2)
            width = w1;
        else
            width = w2;
        var image3 = new SimpleImage(width,height);

        for(var newPixel of image3.values()){

            var x = newPixel.getX();
            var y = newPixel.getY();
            var pixel = image1.getPixel(x,y);
            var hidePixel = image2.getPixel(x,y);
            splitPixel(pixel);
            splitPixel(hidePixel);
            newPixel.setRed(pixel.getRed() + (hidePixel.getRed() / 16));
            newPixel.setGreen(pixel.getGreen() + (hidePixel.getGreen() / 16));
            newPixel.setRed(pixel.getBlue() + (hidePixel.getBlue() / 16));

        }

        image3.drawTo(canvas3);

    }

}*/

function combineImage(){

    if(image1 == null)
        alert("Please load the image to alter...");
    else if(image2 == null)
        alert("Please load the image to hide...");
    else{

        for(var pixel of image1.values()){

            var x = pixel.getX();
            var y = pixel.getY();
            try{
                var hidePixel = image2.getPixel(x,y);
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

        image1.drawTo(canvas3);

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

        for(var pixel of image1.values()){

            getSplit(pixel);

        }

        image1.drawTo(canvas4);

    }

}