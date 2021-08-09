function change()
{
    var c;
    c = confirm('Hello world using function');
    var choice;
    if(c == true){
        choice = "You pressed OK";
    }
    else
        choice  = "Are you sure you want to cancel?";
    alert(choice);
}


function changeColor()
{
    f1 = document.getElementById("first");
    f2 = document.getElementById("second");
    f1.className = "cl1";
    f2.className = "cl2";
}


function changeText()
{
    f1 = document.getElementById("first");
    f2 = document.getElementById("second");
    f1.innerHTML = "Changed text";
    f2.innerHTML = "Again changed text";
}


function changeColorQuick()
{
    document.getElementById("first").style.background = "yellow";
    document.getElementById("first").style.color = "blue";
    document.getElementById("second").style.background = "blue";
    document.getElementById("second").style.color = "yellow";
}


function changeValue()
{
    document.getElementById("ch").value = "New Value";
}
