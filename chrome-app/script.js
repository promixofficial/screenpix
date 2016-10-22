window.addEventListener('resize', setWindowSize);
document.onkeydown = KeyPress;

window.addEventListener("wheel", function(event){
  console.log(event)
});

var wh = document.getElementById('width'),
    ht = document.getElementById('height'),
    rule = document.getElementById('rule'),
    zoom = 1;

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
  wh.innerHTML = myWidth * zoom;
  ht.innerHTML = myHeight * zoom;
  setRuleSize();
}

function setRuleSize(){
  rule.style.transform = `scale(${1/zoom})`;
}


function KeyPress(e) {
      var evtobj = window.event? event : e
      if (evtobj.keyCode == 90 && evtobj.ctrlKey) getZoom();;
}


function getZoom(){
  var zoomValue = parseInt(window.prompt('Enter a zoom value in %', 100));
  if(isNaN(zoomValue)){
    zoomValue = 100;
  }
  zoom = zoomValue/100;
  setWindowSize();
}

document.getElementById("pmx-btn-close").onclick = function() {
	window.close();
}
