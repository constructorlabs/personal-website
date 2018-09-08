// When the user scrolls the page, execute myFunction
window.onscroll = function() {
  myFunction();
};

// Get the header
const contact = document.getElementById('contact');
const content = document.getElementById('content');

// Get the offset position of the navbar
const offset = 53;

console.log(window.pageYOffset);
// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset > offset) {
    contact.classList.add('sticky');
    content.style.marginTop = '64px';
  } else {
    contact.classList.remove('sticky');
    content.style.marginTop = 0;
  }
}
