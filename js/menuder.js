function myFunction() {
  var is_shown = document.getElementById('is-shown').innerHTML;
  if(is_shown == "0") {
    document.getElementById('is-shown').innerHTML = "1";
    document.getElementById('menu-cont').style.display = "block";
    document.getElementById('img-menu').src = "Images/closewhite.png";
  } else if(is_shown == "1") {
    document.getElementById('is-shown').innerHTML = "0";
    document.getElementById('menu-cont').style.display = "none";
    document.getElementById('img-menu').src = "Images/menuiconwhite.png";
  }
}
