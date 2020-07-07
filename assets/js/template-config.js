//========================================
// >> AUTO-FIT MAIN
//========================================
const __initsize__ = document.body.getBoundingClientRect().height;
const __autosize__ = () => {
    document.getElementsByTagName("MAIN")[0].style.height = window.innerHeight
        - document.getElementsByTagName("HEADER")[0].getBoundingClientRect().height
        - document.getElementsByTagName("FOOTER")[0].offsetHeight + "px"
}; 

if (document.body.getBoundingClientRect().height < window.innerHeight) { __autosize__(); }
//alert(__initsize__ + " : " +document.body.getBoundingClientRect().height);

//========================================
// >> COMMON MENU
//========================================

// >> MENU SIZING
document.getElementById("menu");
const __menusize__ = () => {
    document.getElementById("menu").style.top = document.getElementsByTagName("NAV")[0].getBoundingClientRect().bottom + "px";
    if (document.body.getBoundingClientRect().height > window.innerHeight)
    {
        document.getElementById("menu").style.height = window.innerHeight - document.getElementsByTagName("NAV")[0].offsetHeight + "px";
    }
    else
    {
        document.getElementById("menu").style.height = window.innerHeight 
            - document.getElementsByTagName("NAV")[0].offsetHeight- document.getElementsByTagName("FOOTER")[0].offsetHeight + "px";
    }
}; __menusize__();

// >> MENU SIZING BY SCROLL
window.onscroll = function() {
    if ((window.innerHeight + window.scrollY) 
            >= document.body.offsetHeight - document.getElementsByTagName("FOOTER")[0].offsetHeight) {

        document.getElementById("menu").style.height 
            = window.innerHeight - (document.getElementsByTagName("NAV")[0].offsetHeight)
                - (document.getElementsByTagName("FOOTER")[0].offsetHeight - (document.body.offsetHeight - (window.innerHeight + window.scrollY))) + "px";
    }
    else {
        document.getElementById("menu").style.height 
            = window.innerHeight - (document.getElementsByTagName("NAV")[0].offsetHeight) + "px";
    }
};

// >> MENU BUTTON CLICK (INCLUDING CONVENIENT CLICK)
const __menuclick__ = (event) => {
    // PREVENT EXITING MENU WHEN CONTENT OF MENU IS CLICKED DUE TO BUBBLING.
    if (event.target.id != "menu-bkgd" && event.target.id != "menu-button") {return;}

    let animate; let opacityBkgd; let widthContent; let opacityContent;
    if (document.getElementById("menu").style.visibility == "hidden")
    {
        opacityBkgd = 0.0; widthContent = 0; opacityContent = 0.0;
        animate = setInterval(function() {
            document.getElementById("menu").style.visibility = "visible";
            if (opacityBkgd == 7 && widthContent == 64 && opacityContent == 10) 
            {
                clearInterval(animate);
            }
            else
            {
                if (opacityBkgd < 7) {opacityBkgd++;}
                if (widthContent < 64) {widthContent += 16;}
                if (opacityContent < 10) {opacityContent++;}
                document.getElementById("menu-bkgd").style.backgroundColor = "rgba(128,128,128,"+(opacityBkgd/10)+")";
                document.getElementById("menu-content").style.width = widthContent + "%";
                document.getElementById("menu-content").style.opacity = opacityContent/10;
            }
        }, 20);
    }
    else
    {
        opacityBkgd = 7; widthContent = 64; opacityContent = 10;
        animate = setInterval(function() {
            if (opacityBkgd <= 0.0 && widthContent <= 0 && opacityContent <= 0.0)
            {
                clearInterval(animate);
                document.getElementById("menu").style.visibility = "hidden";
            }
            else
            {
                if(opacityBkgd > 0) {opacityBkgd--;}
                if(widthContent > 0) {widthContent -= 8;}
                if (opacityContent > 0) {opacityContent--;}
                document.getElementById("menu-bkgd").style.backgroundColor = "rgba(128,128,128,"+(opacityBkgd/10)+")";
                document.getElementById("menu-content").style.width = widthContent + "%";
                document.getElementById("menu-content").style.opacity = opacityContent/10;
            }
        }, 20);
    }
    event.stopPropagation();
};
document.getElementById("menu-button").addEventListener("click", __menuclick__);
document.getElementById("menu-bkgd").addEventListener("click", __menuclick__, true);

//========================================
// >> FUNCTION: RESIZE WINDOW
//========================================
window.addEventListener('resize', event => {
    //alert(document.body.getBoundingClientRect().height + " : " + window.innerHeight);
    if (__initsize__ < window.innerHeight) { __autosize__(); }
    __menusize__();
});