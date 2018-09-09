// get elements
const contact = document.getElementById('contact');
const content = document.getElementById('content');
const header = document.getElementById('header');
const nav = document.getElementById('nav--main');
const sectionHeaders = Array.from(
  document.getElementsByClassName('section-header')
);

// set scroll offset for mobile (based on height of title and stapline)
const offset = 53;

// define scroll function
const scrollFunction = () => {
  // Add sticky class to header & nav and offset content
  if (window.innerWidth > 767) {
    header.style.position = 'fixed';
    nav.style.position = 'fixed';
    content.style.marginTop = '210px';
    if (window.innerWidth > 960) {
      content.style.marginTop = '140px';
    }
  } else {
    // Add sticky class to the contact button when page top reaches offset position.
    if (window.pageYOffset > offset) {
      contact.classList.add('sticky');
      content.style.marginTop = '64px';
    } else {
      // Remove sticky class when page top leaves offset position.
      contact.classList.remove('sticky');
      content.style.marginTop = 0;
    }
  }
};

// call scroll function on scroll event
window.addEventListener('scroll', scrollFunction);
