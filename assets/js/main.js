const measurements = {
  width: window.innerWidth,
  height: window.innerHeight,
  hypotenuse: Math.sqrt(Math.pow(window.innerWidth, 2) + Math.pow(window.innerHeight, 2))
}
window.addEventListener('load', e => {
  [...document.querySelectorAll('.social li')].reverse().forEach(function(service, index) {
    service.style.animationDelay = `${(index*100)+24000+600}ms`;
  });
  document.querySelector('body').classList.add('status--animation-start');
});