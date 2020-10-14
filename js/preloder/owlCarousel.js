
// Wrap every letter in a span
var textWrapper = document.querySelector('.ml6 .letters');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({loop: true})
  .add({
    targets: '.ml6 .letter',
    translateY: ["1.1em", 0],
    translateZ: 0,
    duration: 750,
    delay: (el, i) => 50 * i
  }).add({
    targets: '.ml6',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
  });
//preloader
window.addEventListener("load", () => {
    const preload = document.querySelector(".preload");
    preload.classList.add("preload-finish");
  });
// scroll bar

let progress = document.querySelector("#progressbar");

let totalHeight = document.body.scrollHeight - window.innerHeight;

window.onscroll = function(){
  let progressHeight = (window.pageYOffset / totalHeight) * 100;
  progress.style.height = progressHeight + "%";
}
// mouseMove Hear

// document.addEventListener("mousemove", function(e){
//   let body = document.querySelector('body');
//   let heart = document.createElement('h6');
//   let x = e.offsetX;
//   let y = e.offsetY;
//   heart.style.left = x + "px";
//   heart.style.top = y + "px";
//   let size = Math.random() * 100;
//   let opacity = Math.random() * 1;
//   heart.style.opacity = opacity;
//   heart.style.width = size + "px";
//   heart.style.height = size + "px";
//   body.appendChild(heart);

//   setTimeout(function() {
//     heart.remove()
//   },900)
// })