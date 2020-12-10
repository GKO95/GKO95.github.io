//========================================
// >> AUTO-FIT MAIN
//========================================
var __initSize__;
document.addEventListener("readystatechange", function () {
    if (document.readyState == "complete") {

        __initSize__ = document.body.getBoundingClientRect().height;
        //alert(__initSize__ + " : " + window.innerHeight);
        if (window.innerHeight < parseInt(getComputedStyle(document.body).minHeight)) {
            if (__initSize__ <= parseInt(getComputedStyle(document.body).minHeight)) {
                $(`main`).css("height", `${parseInt(getComputedStyle(document.body).minHeight) - $(`#footer`).get(0).offsetHeight - $(`#header`).get(0).getBoundingClientRect().height}px`)
            }
        }
        else {
            if (__initSize__ <= parseInt(getComputedStyle(document.body).minHeight) && __initSize__ < window.innerHeight) {
                $(`main`).css("height", `${window.innerHeight - $(`#footer`).get(0).offsetHeight - $(`#header`).get(0).getBoundingClientRect().height}px`)
            }
        }

        document.getElementsByTagName("MAIN")[0].style.visibility = "visible";
        document.getElementsByTagName("FOOTER")[0].style.visibility = "visible";
        //alert(__initSize__ + " : " +document.body.getBoundingClientRect().height);
    }
});

//========================================
// >> COMMON MENU
//========================================
// >> MENU SIZING
const __menuSizing__ = () => {
    const MENU_HEIGHT = 80;
    const MENU_WIDTH = 88;
    $(`#menu`).css({"top" : `${$(`#navigation`).get(0).getBoundingClientRect().bottom}px`, "height" : `${window.innerHeight - $(`#navigation`).get(0).offsetHeight}px`})
    $(`#menu-main`).css({"width" : `${MENU_WIDTH}%`, "height" : `${MENU_HEIGHT}%`})

    if (window.outerWidth * (MENU_WIDTH / 100) > 1.5 * window.outerHeight * (MENU_HEIGHT / 100)) {
        $(`#menu-main`).css("width", `${1.5 * window.outerHeight * (MENU_HEIGHT / 100)}px`)
    }
    else if (window.innerWidth < parseInt(getComputedStyle(document.body).minWidth)) {
        $(`#menu-main`).css("width", `${parseInt(getComputedStyle(document.body).minWidth) * (MENU_WIDTH / 100)}px`)
    }

    let contentHeight = document.getElementById("menu-main").offsetHeight - document.getElementById("menu-option").offsetHeight
        - parseInt(getComputedStyle(document.getElementById("menu-option")).marginTop) - parseInt(getComputedStyle(document.getElementById("menu-content")).marginBottom)
        - (parseInt(getComputedStyle(document.getElementById("menu-option")).marginBottom) > parseInt(getComputedStyle(document.getElementById("menu-content")).marginTop)
            ? parseInt(getComputedStyle(document.getElementById("menu-option")).marginBottom) : parseInt(getComputedStyle(document.getElementById("menu-content")).marginTop));

    $(`#menu-content`).css("height", `${contentHeight}px`)
};

// >> THEME SELECTION
const __menuThemeSelect__ = (theme) => {
    let button = $(`<a></a>`)
    let attrCaption, bkgdImage
    switch (theme) {
        case "Dark":
        default:
            attrCaption = "Switch to Light theme"
            bkgdImage = `url(/assets/images/logo/logo-themeLight4${theme}.png)`
            button.click(function () {
                __LOCAL__.setItem("THEME", "Light")
                location.reload()
            })
            break;
        case "Light":
            attrCaption = "Switch to Dark theme"
            bkgdImage = `url(/assets/images/logo/logo-themeDark4${theme}.png)`
            button.click(function () {
                __LOCAL__.setItem("THEME", "Dark")
                location.reload()
            })
            break;
    }
    button.attr("title", `${attrCaption}`).css("background-image", `${bkgdImage}`)
    $(`#menu-select`).append(button)
}; __menuThemeSelect__(__LOCAL__.getItem("THEME"));

// >> PREVENT DOCUMENT SCROLLING ON MENU
// SOURCE: https://www.geeksforgeeks.org/how-to-disable-scrolling-temporarily-using-javascript/
const __scrollDisable__ = () => {
    scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,

        window.onscroll = function () {
            window.scrollTo(scrollLeft, scrollTop);
        };
}

const __scrollEnable__ = () => {
    window.onscroll = function () { };
}

// >> MENU BUTTON CLICK (INCLUDING CONVENIENT CLICK)
const __menuclick__ = (event) => {
    const MENU_HEIGHT = parseInt(document.getElementById("menu-main").style.height);
    const STYLETEXT = getComputedStyle(document.getElementById("menu-bkgd")).backgroundColor.slice(0, -4);

    let animate; let opacityMenuBkgd; let sizeMenuMain; let opacityMenuMain;
    if (document.getElementById("menu").style.visibility == "hidden") {
        __scrollDisable__();
        opacityMenuBkgd = 0.0; sizeMenuMain = 0; opacityMenuMain = 0.0;
        animate = setInterval(function () {
            document.getElementById("menu").style.visibility = "visible";
            if (opacityMenuBkgd == 7 && sizeMenuMain == MENU_HEIGHT && opacityMenuMain == 10) {
                clearInterval(animate);
            }
            else {
                if (opacityMenuBkgd < 7) { opacityMenuBkgd++; }
                if (sizeMenuMain < MENU_HEIGHT) { sizeMenuMain += 20; }
                if (opacityMenuMain < 10) { opacityMenuMain++; }
                document.getElementById("menu-bkgd").style.backgroundColor = `${STYLETEXT}, ${(opacityMenuBkgd / 10)})`;
                document.getElementById("menu-main").style.height = sizeMenuMain + "%";
                document.getElementById("menu-main").style.opacity = opacityMenuMain / 10;
            }
        }, 20);
    }
    else {
        __scrollEnable__();
        opacityMenuBkgd = 7; sizeMenuMain = MENU_HEIGHT; opacityMenuMain = 10;
        animate = setInterval(function () {
            if (opacityMenuBkgd <= 0.0 && sizeMenuMain <= 0 && opacityMenuMain <= 0.0) {
                clearInterval(animate);
                document.getElementById("menu").style.visibility = "hidden";
            }
            else {
                if (opacityMenuBkgd > 0) { opacityMenuBkgd--; }
                if (sizeMenuMain > 0) { sizeMenuMain -= 10; }
                if (opacityMenuMain > 0) { opacityMenuMain--; }
                document.getElementById("menu-bkgd").style.backgroundColor = `${STYLETEXT} ${(opacityMenuBkgd / 10)})`;
                document.getElementById("menu-main").style.height = sizeMenuMain + "%";
                document.getElementById("menu-main").style.opacity = opacityMenuMain / 10;
            }
        }, 20);
    }
};

document.getElementById("menu-button").addEventListener("click", function () {
    // PREVENT EXITING MENU WHEN "menu-main" AND ITS CHILDREN ARE CLICKED DUE TO BUBBLING.
    if ((event.target.id != "menu-bkgd" && event.target.id != "menu-button") || false) { return; }
    __menuSizing__(); __menuclick__();
});
document.getElementById("menu-bkgd").addEventListener("click", function () {
    // PREVENT EXITING MENU WHEN "menu-main" AND ITS CHILDREN ARE CLICKED DUE TO BUBBLING.
    if ((event.target.id != "menu-bkgd" && event.target.id != "menu-button") || false) { return; }
    __menuSizing__(); __menuclick__();
});
document.onkeydown = function (e) {
    // CONVENIENT MENU ESCAPE WITH "ESCAPE" BUTTON.
    e = e || window.event;
    if (e.keyCode == 27 && document.getElementById("menu").style.visibility == "visible") { __menuSizing__(); __menuclick__(); }
};

//========================================
// >> FUNCTION: RESIZE WINDOW
//========================================
window.addEventListener('resize', () => {
    $(`main`).css("height", null)

    __initSize__ = document.body.getBoundingClientRect().height;
    if (window.innerHeight < parseInt(getComputedStyle(document.body).minHeight)) {
        if (__initSize__ <= parseInt(getComputedStyle(document.body).minHeight)) {
            $(`main`).css("height", `${parseInt(getComputedStyle(document.body).minHeight) - $(`#footer`).get(0).offsetHeight - $(`#header`).get(0).getBoundingClientRect().height}px`)
        }
    }
    else {
        if (__initSize__ <= parseInt(getComputedStyle(document.body).minHeight) && __initSize__ < window.innerHeight) {
            $(`main`).css("height", `${window.innerHeight - $(`#footer`).get(0).offsetHeight - $(`#header`).get(0).getBoundingClientRect().height}px`)
        }
    }

    __menuSizing__();
});
