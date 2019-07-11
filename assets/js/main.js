const measurements = {
  width: window.innerWidth,
  height: window.innerHeight,
  hypotenuse: Math.sqrt(Math.pow(window.innerWidth, 2) + Math.pow(window.innerHeight, 2))
}
function getSideFromHypotenuse(hypotenuse) {
}
$(function() {
  const side = measurements.hypotenuse / 2;
  $('.services .service').css({width: `${side - 96}px`, height: `${side - 96}px`});
  if (measurements.width < measurements.height) {
    $('.services .service:nth-child(1), .services .service:nth-child(4)').css({height: `${side + 96}px`});
  } else {
    $('.services .service:nth-child(2), .services .service:nth-child(3)').css({width: `${side + 96}px`});
  }
  
  [...$('.social li')].reverse().forEach(function(service, index) {
    $(service).css({transitionDelay: `${(index*100)+2400}ms`});
  });

  // console.log(measurements.width);
  // console.log(measurements.height);
  // console.log(measurements.hypotenuse);
  
  // console.log(Math.atan(measurements.height / measurements.width) / (Math.PI / 180));
  // console.log(Math.atan(measurements.width / measurements.height) / (Math.PI / 180));

  
  $('.intro').addClass('animation--start');

  // $('.services .service').css({transform: `rotate(45deg)`});
  // $('.services .service .service__image').css({transform: `rotate(-45deg)`});

  // $('.services .service').css({transform: `skew(-${Math.atan(measurements.width / measurements.height) / (Math.PI / 180)}deg, ${Math.atan(measurements.height / measurements.width) / (Math.PI / 180)}deg)`});
  // $('.services .service .service__image').css({transform: `skew(${Math.atan(measurements.width / measurements.height) / (Math.PI / 180)}deg, -${Math.atan(measurements.height / measurements.width) / (Math.PI / 180)}deg) scale(0.5)`});
});

$(window).on( "load", function() {
});