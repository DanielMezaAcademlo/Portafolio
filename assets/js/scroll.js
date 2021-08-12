const header = document.getElementById("main-header");

function scrollHeaderTop() {
  //   console.log(window.scrollY);
  if (window.scrollY > 500) {
    header.classList.add("fixed-header");
  } else if (window.scrollY === 0) {
    header.classList.remove("fixed-header");
  }
}

document.addEventListener("scroll", scrollHeaderTop);
// document.onscroll = scrollHeaderTop;
