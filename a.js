var menulist = document.getElementById("menulist");
menulist.style.maxHeight = "0px";
function togglemenu(){
    if(menulist.style.maxHeight == "0px")
        {
            menulist.style.maxHeight = "130px";
        }
    else
        {
            menulist.style.maxHeight = "0px";
        }
}

function myFunction2() {
    var str = new String(" About Us: <br><hr> We are a new company that sells computer components.<br> We are certified seller.<br> We only sell guaranteed 100% brand new computers part.");
    document.write(str.bold());
    document.body.style.fontSize="80px";
    document.body.style.color="black";
    document.body.style.backgroundColor="lightblue"
}

function myFunction4() {
    var str = new String("Contact Us: <br><hr>Phone Number: +639122486657<br>E-mail: philipkhaizer@gmail.com");
    document.write(str.bold());
    document.body.style.fontSize="80px";
    document.body.style.color="black";
    document.body.style.backgroundColor="lightblue"
}

function myFunction6() {
    alert('We are very Sorry, Our Dear Customers. Renovation still ongoing.')
}

var myIndex = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("mySlides");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  myIndex++;
  if (myIndex > x.length) {myIndex = 1}    
  x[myIndex-1].style.display = "block";  
  setTimeout(carousel, 2000);
}
