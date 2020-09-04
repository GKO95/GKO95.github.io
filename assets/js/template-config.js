//========================================
// >> AUTO-FIT MAIN
//========================================
var __initsize__;
document.addEventListener("readystatechange", function() {
if (document.readyState == "complete") {

    __initsize__ = document.body.getBoundingClientRect().height;
    //alert(__initsize__ + " : " + window.innerHeight);
    if (window.innerHeight < parseInt(getComputedStyle(document.body).minHeight))
    {
        if (__initsize__ <= parseInt(getComputedStyle(document.body).minHeight))
        {
            document.getElementsByTagName("MAIN")[0].style.height
                = parseInt(getComputedStyle(document.body).minHeight) - document.getElementsByTagName("FOOTER")[0].offsetHeight
                    - document.getElementsByTagName("HEADER")[0].getBoundingClientRect().height + "px";
        }
    }
    else
    {
        if (__initsize__ <= parseInt(getComputedStyle(document.body).minHeight)) 
        {
            document.getElementsByTagName("MAIN")[0].style.height
                = window.innerHeight - document.getElementsByTagName("FOOTER")[0].offsetHeight
                    - document.getElementsByTagName("HEADER")[0].getBoundingClientRect().height + "px";
        }
        else if (__initsize__ < window.innerHeight)
        {
            document.getElementsByTagName("MAIN")[0].style.height
                = window.innerHeight - document.getElementsByTagName("FOOTER")[0].offsetHeight
                    - document.getElementsByTagName("HEADER")[0].getBoundingClientRect().height + "px";

        }
    }

    document.getElementsByTagName("MAIN")[0].style.visibility = "visible";
    document.getElementsByTagName("FOOTER")[0].style.visibility = "visible";
    //alert(__initsize__ + " : " +document.body.getBoundingClientRect().height);

}});

//========================================
// >> COMMON MENU
//========================================
// >> MENU SIZING
const __menusize__ = () => {
    document.getElementById("menu").style.top = document.getElementsByTagName("NAV")[0].getBoundingClientRect().bottom + "px";
    document.getElementById("menu").style.height = window.innerHeight - document.getElementsByTagName("NAV")[0].offsetHeight + "px";

    const MENU_HEIGHT = 80; // PERCENTAGE
    document.getElementById("menu-main").style.height = MENU_HEIGHT + "%";

    const MENU_WIDTH = 88;    // PERCENTAGE

    document.getElementById("menu-main").style.width = MENU_WIDTH + "%";
    if (window.outerWidth * (MENU_WIDTH/100) > 1.5 * window.outerHeight * (MENU_HEIGHT/100) )
    {
        document.getElementById("menu-main").style.width = (1.5 * window.outerHeight * (MENU_HEIGHT/100)) + "px";
    }

    document.getElementById("menu-content").style.height = document.getElementById("menu-main").offsetHeight - document.getElementById("menu-option").offsetHeight
        - parseInt(getComputedStyle(document.getElementById("menu-option")).marginTop) - parseInt(getComputedStyle(document.getElementById("menu-content")).marginBottom)
        - ( parseInt(getComputedStyle(document.getElementById("menu-option")).marginBottom) > parseInt(getComputedStyle(document.getElementById("menu-content")).marginTop)
            ? parseInt(getComputedStyle(document.getElementById("menu-option")).marginBottom) : parseInt(getComputedStyle(document.getElementById("menu-content")).marginTop) ) + "px";

}; 

// >> PREVENT DOCUMENT SCROLLING ON MENU
// SOURCE: https://www.geeksforgeeks.org/how-to-disable-scrolling-temporarily-using-javascript/
const __scrolldisable__ = () => { 
    scrollTop = window.pageYOffset || document.documentElement.scrollTop; 
    scrollLeft = window.pageXOffset || document.documentElement.scrollLeft, 
  
        window.onscroll = function() { 
            window.scrollTo(scrollLeft, scrollTop); 
        }; 
} 
  
const __scrollenable__ = () => { 
    window.onscroll = function() {}; 
} 

// >> MENU BUTTON CLICK (INCLUDING CONVENIENT CLICK)
const __menuclick__ = (event) => {
    const MENU_HEIGHT = parseInt(document.getElementById("menu-main").style.height);

    let animate; let opacityMenuBkgd; let sizeMenuMain; let opacityMenuMain;
    if (document.getElementById("menu").style.visibility == "hidden")
    {
        __scrolldisable__();
        opacityMenuBkgd = 0.0; sizeMenuMain = 0; opacityMenuMain = 0.0;
        animate = setInterval(function() {
            document.getElementById("menu").style.visibility = "visible";
            if (opacityMenuBkgd == 7 && sizeMenuMain == MENU_HEIGHT && opacityMenuMain == 10) 
            {
                clearInterval(animate);
            }
            else
            {
                if (opacityMenuBkgd < 7) {opacityMenuBkgd++;}
                if (sizeMenuMain < MENU_HEIGHT) {sizeMenuMain += 20;}
                if (opacityMenuMain < 10) {opacityMenuMain++;}
                document.getElementById("menu-bkgd").style.backgroundColor = "rgba(128,128,128,"+(opacityMenuBkgd/10)+")";
                document.getElementById("menu-main").style.height = sizeMenuMain + "%";
                document.getElementById("menu-main").style.opacity = opacityMenuMain/10;
            }
        }, 20);
    }
    else
    {
        __scrollenable__();
        opacityMenuBkgd = 7; sizeMenuMain = MENU_HEIGHT; opacityMenuMain = 10;
        animate = setInterval(function() {
            if (opacityMenuBkgd <= 0.0 && sizeMenuMain <= 0 && opacityMenuMain <= 0.0)
            {
                clearInterval(animate);
                document.getElementById("menu").style.visibility = "hidden";
            }
            else
            {
                if(opacityMenuBkgd > 0) {opacityMenuBkgd--;}
                if(sizeMenuMain > 0) {sizeMenuMain -= 10;}
                if (opacityMenuMain > 0) {opacityMenuMain--;}
                document.getElementById("menu-bkgd").style.backgroundColor = "rgba(128,128,128,"+(opacityMenuBkgd/10)+")";
                document.getElementById("menu-main").style.height = sizeMenuMain + "%";
                document.getElementById("menu-main").style.opacity = opacityMenuMain/10;
            }
        }, 20);
    }
};

document.getElementById("menu-button").addEventListener("click", function() {
    // PREVENT EXITING MENU WHEN "menu-main" AND ITS CHILDREN ARE CLICKED DUE TO BUBBLING.
    if ((event.target.id != "menu-bkgd" && event.target.id != "menu-button") || false) {return;}
    __menusize__(); __menuclick__();
});
document.getElementById("menu-bkgd").addEventListener("click", function() {
    // PREVENT EXITING MENU WHEN "menu-main" AND ITS CHILDREN ARE CLICKED DUE TO BUBBLING.
    if ((event.target.id != "menu-bkgd" && event.target.id != "menu-button") || false) {return;}
    __menusize__(); __menuclick__();
});
document.onkeydown = function(e) {
    // CONVENIENT MENU ESCAPE WITH "ESCAPE" BUTTON.
    e = e || window.event;
    if (e.keyCode == 27 && document.getElementById("menu").style.visibility == "visible")
    { __menusize__(); __menuclick__(); }
};

//========================================
// >> FUNCTION: RESIZE WINDOW
//========================================
window.addEventListener('resize', event => {
    document.getElementsByTagName("MAIN")[0].style.height = null;

    __initsize__ = document.body.getBoundingClientRect().height;
    if (window.innerHeight < parseInt(getComputedStyle(document.body).minHeight))
    {
        if (__initsize__ <= parseInt(getComputedStyle(document.body).minHeight))
        {
            document.getElementsByTagName("MAIN")[0].style.height
                = parseInt(getComputedStyle(document.body).minHeight) - document.getElementsByTagName("FOOTER")[0].offsetHeight
                    - document.getElementsByTagName("HEADER")[0].getBoundingClientRect().height + "px";
        }
    }
    else
    {
        if (__initsize__ <= parseInt(getComputedStyle(document.body).minHeight)) 
        {
            document.getElementsByTagName("MAIN")[0].style.height
                = window.innerHeight - document.getElementsByTagName("FOOTER")[0].offsetHeight
                    - document.getElementsByTagName("HEADER")[0].getBoundingClientRect().height + "px";
        }
        else if (__initsize__ < window.innerHeight)
        {
            document.getElementsByTagName("MAIN")[0].style.height
                = window.innerHeight - document.getElementsByTagName("FOOTER")[0].offsetHeight
                    - document.getElementsByTagName("HEADER")[0].getBoundingClientRect().height + "px";
        }
    }
    
    __menusize__();
});