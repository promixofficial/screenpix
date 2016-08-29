chrome.app.runtime.onLaunched.addListener(function() {
  chrome.app.window.create('chrome-app/screenpix.html', {
  //chrome.app.window.create('public/index.html', {
  	frame: "none",
    innerBounds: {
    	'width': 250,
      'height': 150,
    	minWidth: 140,
    	minHeight: 40
    },
    alwaysOnTop: true
  });
});