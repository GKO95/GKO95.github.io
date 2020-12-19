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
        import("./archive-config.js")
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

//========================================
// >> SHOW CONTENT UPON RENDERED
//========================================
document.addEventListener("readystatechange", function () {
    $(`body`).css("visibility", "visible")
});

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