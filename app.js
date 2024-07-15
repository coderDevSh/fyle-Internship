
document.addEventListener('DOMContentLoaded', function () {
  // Bootstrap carousel
  var myCarousel = new bootstrap.Carousel(document.getElementById('myCarousel'), {
    interval: 2000, 
    wrap: false 
  });

  var dots = document.querySelectorAll('.dot');


  setInterval(function() {
    var activeDot = document.querySelector('.dot.active');
    var nextDot = activeDot.nextElementSibling || dots[0]; 

   
    dots.forEach(function(dot) {
      dot.classList.remove('active');
    });
    nextDot.classList.add('active');

   
    var index = Array.from(nextDot.parentNode.children).indexOf(nextDot);
    myCarousel.to(index);
  }, 2000); 

  // Update active dot based on slide change
  myCarousel.on('slide.bs.carousel', function (event) {
    var activeDot = document.querySelector('.dot.active');
    activeDot.classList.remove('active');

    var targetDot = dots[event.to];
    targetDot.classList.add('active');
  });

 
  var carouselElement = document.getElementById('myCarousel');
  carouselElement.addEventListener('mouseenter', function () {
    myCarousel.pause();
  });

  carouselElement.addEventListener('mouseleave', function () {
    myCarousel.cycle();
  });
});


// <--------------->
function changeImage(clickedDiv) {
  var mainImage = document.getElementById('main-image');
  var newText = clickedDiv.textContent.trim(); // Get the text content of clicked div

  // Set the new image 
  switch (newText) {
    case 'Genderless Kei – Japan’s Hot':
      mainImage.src="./images/japan2.jpg";
      break;
    case 'Better Strategy & Quality':
      mainImage.src = "./images/image_oe28ow.png";
      break;
    case 'Genderless Kei – Tokyo’s Hot':
      mainImage.src = "./images/japan3.jpg";
      break;
    default:
      
      break;
  }

  
  var textContents = document.querySelectorAll('.text-content');
  textContents.forEach(function(div) {
    div.classList.remove('active');
  });

  
  clickedDiv.classList.add('active');
}
