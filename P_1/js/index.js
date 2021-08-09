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
