const backToTopBtn = document.querySelector(".back-to-top");

window.addEventListener("scroll", trackScroll);

backToTopBtn.addEventListener("click", scrollToTop);

function trackScroll() {
  const scrolled = window.pageYOffset;
  const coords = document.documentElement.clientHeight;

  if (scrolled > coords) {
    backToTopBtn.classList.add("show");
  } else {
    backToTopBtn.classList.remove("show");
  }
}

function scrollToTop() {
  if (window.pageYOffset > 0) {
    window.scrollBy(0, -20); 
    setTimeout(scrollToTop, 0);
  }
}


