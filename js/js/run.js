document.onreadystatechange = function() {
  var state = document.readyState;
  document.getElementById('load-logo').style.animationPlayState = 'running';
  if (state == 'complete') {
    document.getElementById('interactive');
    document.getElementById('load').style.visibility = 'hidden';
    document.getElementById('contents').style.visibility = 'visible';
    document.getElementById('load-logo').style.animationPlayState = 'paused';
  }
};
