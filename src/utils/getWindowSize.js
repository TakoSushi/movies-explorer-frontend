

function getWindowSize({ getWindowSize }) {
  let throttled = false;
  const delay = 250;

  window.addEventListener('resize', function() {
    if (!throttled) {

      let windth = window.innerWidth;
      let height = window.innerHeight;

      throttled = true;

      setTimeout(function() {
        throttled = false;
      }, delay);
    }  
  }); 
}
