// Scrollup btn
let scrollToTop = document.getElementById("scrollToTop");
let circle = document.querySelector(".progress-ring__circle");
let radius = circle.r.baseVal.value;
let circumference = 2 * Math.PI * radius;
circle.style.strokeDasharray = ${circumference} ${circumference};
circle.style.strokeDashoffset = circumference;

function setProgress(percent) {
  let offset = circumference - (percent / 100) * circumference;
  circle.style.strokeDashoffset = offset;
}

window.addEventListener("scroll", () => {
  let scrollTop = window.scrollY;
  let docHeight = document.documentElement.scrollHeight - window.innerHeight;
  let scrollPercent = (scrollTop / docHeight) * 100;

  setProgress(scrollPercent);

  if (scrollTop > 200) {
    scrollToTop.classList.add("show");
  } else {
    scrollToTop.classList.remove("show");
  }
});
scrollToTop.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});