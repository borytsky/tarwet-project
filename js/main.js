//efekt parallax 
var pos, intro;
function parallax () {
    pos = window.pageYOffset;
    intro = document.getElementById('intro');
    intro.style.backgroundPosition = "0px " + -1 * pos * .5 + "px";
   }
window.addEventListener('scroll',parallax);
window.addEventListener('mousewheel',parallax);
//hamburger logo dla wersji mobile

$('.hamburger').on('click', function(e) {
  // Prevent link from jumping to the top of the page
  e.preventDefault();
  // If menu is already showing, slide it up. Otherwise, slide it down.
  $('.navi').toggleClass('slide-down');
});