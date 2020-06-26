const nav = document.getElementById("navigation");
const toc = document.getElementById("default-toc");

toc.style.top = nav.offsetHeight + "px";
toc.style.margin = 5 + "px " + 10 + "px " + 5 + "px " + 10 + "px";
toc.style.width = 50 + "px";
toc.style.height = 50 + "px";

toc.children[0].style.backgroundImage = "url('/assets/images/logo-toc.png')";
toc.children[0].style.backgroundPosition = "center";
toc.children[0].style.backgroundRepeat = "no-repeat";
toc.children[0].style.backgroundSize = 36 + "px";
