function resize() {
  var sizediff = document.getElementById('banner').clientHeight;
  var elements = document.getElementsByTagName('body');
  var size = elements[0].clientHeight-sizediff;
  if(size > 232) {
    document.getElementById('side').style.height = size+"px";
  } else {
    document.getElementById('content').style.height = 232+"px";
  }
}
