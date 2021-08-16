var fgImg = null;
var bgImg = null;
var canvas1 = document.getElementById("can1");
var canvas2 = document.getElementById("can2");

function fgImage(){

    var img = document.getElementById("fgImage");
    fgImg = new SimpleImage(img);
    fgImg.drawTo(canvas1);

}

function bgImage(){

    var img = document.getElementById("bgImage");
    bgImg = new SimpleImage(img);
    bgImg.drawTo(canvas2);
    
}

function clearScreen(){

    var ctx1 = canvas1.getContext("2d");
    ctx1.clearRect(0,0,canvas1.width,canvas1.height);
    var ctx2 = canvas2.getContext("2d");
    ctx2.clearRect(0,0,canvas2.width,canvas2.height);

}

function toGreen(){

    var height;
    var width;

    if(fgImg == null || !fgImg.complete()){

        alert("Image not found...");
        return;

    }

    else if(bgImg == null || !bgImg.complete()){

        alert("Image not found...");
        return;
        
    }

    else{

        if(fgImg.getHeight() < bgImg.getHeight()){

            height = fgImg.getHeight();

        }

        else{

            height = bgImg.getHeight();

        }

        if(fgImg.getWidth() < bgImg.getWidth()){

            width = fgImg.getWidth();

        }

        else{

            width = bgImg.getWidth();

        }

        var output = new SimpleImage(width,height);
        var out1 = output;
        
        for(var pixel of out1.values()){

            var x = pixel.getX();
            var y = pixel.getY();
            var fgpixel = fgImg.getPixel(x,y);
            
            if(fgpixel.getGreen() > fgpixel.getBlue() + fgpixel.getRed()){

                var bgpixel = bgImg.getPixel(x,y);
                output.setPixel(x,y,bgpixel);

            }

            else{

                output.setPixel(x,y,fgpixel);

            }

        }

        clearScreen();
        output.drawTo(canvas1);
        alert("Congrats... You have successfully merged two wierd images into a single ultra wierd image.. Keep it up... :)");

    }

}