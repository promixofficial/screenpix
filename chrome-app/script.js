window.addEventListener('resize', setWindowSize);
var wh = document.getElementById('width'),
    ht = document.getElementById('height');

function setWindowSize() {
  if (typeof (window.innerWidth) == 'number') {
    myWidth = window.innerWidth;
    myHeight = window.innerHeight;
  } else {
    if (document.documentElement && (document.documentElement.clientWidth || document.documentElement.clientHeight)) {
      myWidth = document.documentElement.clientWidth;
      myHeight = document.documentElement.clientHeight;
    } else {
      if (document.body && (document.body.clientWidth || document.body.clientHeight)) {
        myWidth = document.body.clientWidth;
        myHeight = document.body.clientHeight;
      }
    }
  }
  wh.innerHTML = myWidth;
  ht.innerHTML = myHeight;
}

document.getElementById("pmx-btn-close").onclick = function() {
	window.close();
}
