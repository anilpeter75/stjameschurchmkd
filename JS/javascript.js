$('.carousel').carousel({
    interval: 2000
  })


window.onscroll = function() {scrollFunction()};
function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementById("navbar").style.padding = "10px 5px";
    document.getElementById("logo").style.fontSize = "10px";
  } else {
    document.getElementById("navbar").style.padding = "10px 10px";
    document.getElementById("logo").style.fontSize = "15px";
  }
}