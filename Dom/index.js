var randomimage1 = Math.floor((Math.random() * 6) + 1);

var randomdice = "dice" + randomimage1 + ".png";

var randomfolder = "dice/" + randomdice;

var dicon = document.querySelectorAll("img")[1];

dicon.setAttribute("src", randomfolder);

var image = (Math.floor(Math. random()*6)+1);

var ran= "dice" + image + ".png" ;
var folder = "dice/" + ran ;

var six= document.querySelectorAll("img")[0];

six.setAttribute("src", folder);

if (folder > randomfolder) {
  document.querySelectorAll("p")[0].innerText = "Player 1 WIN 🥳";
} else if (folder === randomfolder) {
  document.querySelectorAll("p")[0].innerText = "Tie";
  document.querySelectorAll("p")[1].innerText = "Tie";
} else {
  document.querySelectorAll("p")[1].innerText = "Player 2 WIN 🥳";
}

function reload(){
  location.reload();
}
