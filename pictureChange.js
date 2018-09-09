window.onscroll = () => changeMenu();

function changeMenu() {
  let scrolledCount = 0;
  var scrollBarPosition = window.pageYOffset | document.body.scrollTop;

  // At specifiv position do what you want
  if (scrollBarPosition === 300) {
    document.getElementById("logo--img").src = "images/luke_coffee.png";
  }
}
