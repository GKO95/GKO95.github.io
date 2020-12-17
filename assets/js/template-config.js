const enumTHEME = {
    DARK: 0,
    LIGHT: 1
}

const enumLANG = {
    KOREAN: 0,
    ENGLISH: 1
}

const GetCONFIG = () => {
    return parseInt(window.localStorage.getItem("CODE"))
}

const SetCONFIG = (code = 0) => {
    window.localStorage.setItem("CODE", `${code}`)
}

const GetTHEME = () => {
    return ((0b0001 & parseInt(window.localStorage.getItem("CODE"))) >> 0)
}

const SetTHEME = (theme = enumTHEME.DARK) => {
    window.localStorage.setItem("CODE", `${(GetCONFIG() & 0b1110) | (0b0001 & (theme << 0))}`)
}

const GetLANG = () => {
    return ((0b0010 & parseInt(window.localStorage.getItem("CODE"))) >> 1)
}

const SetLANG = (lang = enumLANG.KOREAN) => {
    window.localStorage.setItem("CODE", `${(GetCONFIG() & 0b1101) | (0b0010 & (lang << 1))}`)
}

//========================================
// >> LOCAL STORAGE
//========================================
if (isNaN(GetCONFIG())) { SetCONFIG() }
if (window.localStorage.length != 1) {
    let config = GetCONFIG()
    if (config > 0xFF) { config &= 0xFF }
    else if (config == null || isNaN(config)) { config = 0 }
    window.localStorage.clear();
    SetCONFIG(config);
}

//========================================
// >> SELECT THEME
//========================================
if (GetTHEME() == enumTHEME.DARK) document.documentElement.setAttribute("dark", "true")

//========================================
// >> IMPORT SCRIPT
//========================================
switch($(`body`).attr("id"))
{
    case "home":
        import("./home-config.js")
        break;
    case "docs":
        import("./docs-config.js")
        break;
    case "post":
        import("./post-config.js")
        break;
    case "archive":
        break;
    default:
        break;
}

//========================================
// >> SWITCH LANGUAGE
//========================================
$(`#nav-lang`).click(function() {
    if (GetLANG() == enumLANG.ENGLISH) {
        SetLANG(enumLANG.KOREAN)
    } else {
        SetLANG(enumLANG.ENGLISH)
    }
    location.reload();
})

//========================================
// >> SWITCH THEME
//========================================
$(`#nav-theme`).click(function() {
    if (GetTHEME() == enumTHEME.LIGHT) {
        SetTHEME(enumTHEME.DARK)
    } else {
        SetTHEME(enumTHEME.LIGHT)
    }
    location.reload();
})

/*
// PRE-INITIALIZATION
let bkgdColor = (GetTHEME == enumTHEME.LIGHT) ? "rgb(255, 255, 255)" : "rgb(32, 32, 32)";   // BACKGROUND COLOR = CONDITION ? LIGHT : DARK
let textColor = (GetTHEME == enumTHEME.LIGHT) ? "rgb(0, 0, 0)" : "rgb(255, 255, 255)";   // FONT COLOR = CONDITION ? LIGHT : DARK
let brdrColor = (GetTHEME == enumTHEME.LIGHT) ? "rgb(80, 80, 80)" : "rgb(224, 224, 224)";

bkgdColor = (GetTHEME == enumTHEME.LIGHT) ? "rgb(224, 224, 224)" : "rgb(40, 40, 40)";  // MENU COLOR = CONDITION ? LIGHT : DARK
document.styleSheets[0].insertRule(`
    #menu-main { 
        background-color: ${bkgdColor}; 
    }
`);

bkgdColor = (GetTHEME == enumTHEME.LIGHT) ? "rgb(0, 0, 0, 0)" : "rgb(128, 128, 128, 0)";  // MENU BACKGROUND = CONDITION ? LIGHT : DARK
document.styleSheets[0].insertRule(`
    #menu-bkgd { 
        background-color: ${bkgdColor}; 
    }
`);

bkgdColor = (GetTHEME == enumTHEME.LIGHT) ? "rgb(240, 240, 240)" : "rgb(24, 24, 24)";  // MENU OPTION & BLOCKQUOTE = CONDITION ? LIGHT : DARK
textColor = (GetTHEME == enumTHEME.LIGHT) ? "rgb(64, 64, 64)" : "rgb(200, 200, 200)";
document.styleSheets[0].insertRule(`
    #menu-option { 
        background-color: ${bkgdColor}; 
    }
`);
*/


/*
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
        - (parseInt(getComputedStyle(document.getElementById("menu-option")).marginBottom) > parseInt(getComputedStyle(document.getElementById("menu-content")).marginTop) ? parseInt(getComputedStyle(document.getElementById("menu-option")).marginBottom) : parseInt(getComputedStyle(document.getElementById("menu-content")).marginTop));

    $(`#menu-content`).css("height", `${contentHeight}px`)
};

// >> THEME SELECTION
const __menuThemeSelect__ = (theme) => {
    let button = $(`<a></a>`)
    let attrCaption, bkgdImage
    switch (theme) {
        case enumTHEME.DARK:
        default:
            attrCaption = "Switch to Light theme"
            bkgdImage = `url(/assets/images/logo/logo-themeLight4${theme}.png)`
            button.click(function () {
                SetTHEME(enumTHEME.LIGHT)
                location.reload()
            })
            break;
        case enumTHEME.LIGHT:
            attrCaption = "Switch to Dark theme"
            bkgdImage = `url(/assets/images/logo/logo-themeDark4${theme}.png)`
            button.click(function () {
                SetTHEME(enumTHEME.DARK)
                location.reload()
            })
            break;
    }
    button.attr("title", `${attrCaption}`).css("background-image", `${bkgdImage}`)
    $(`#menu-select`).append(button)
}; __menuThemeSelect__(GetTHEME);

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
            $(`#menu`).css("visibility", "visible")
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
                $(`#menu`).css("visibility", "hidden")
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
*/