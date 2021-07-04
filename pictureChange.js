window.onscroll = () => changeMenu();

function changeMenu() {
  let scrollBarPosition = window.pageYOffset | document.body.scrollTop;

  if (scrollBarPosition === 200) {
    document.getElementById("logo--img").src = "images/luke_coffee.png";
    console.log("Position reached.");
  }
}
