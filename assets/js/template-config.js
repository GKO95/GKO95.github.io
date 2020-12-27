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
    case "post":
        import("./docs-config.js")
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
// >> MENU: CONFIGURATION
//========================================
$(`#toc-button`).show("slow").click(function() {
    $(this).hide("fast")
    $(`#toc-container`).fadeIn()

})

$(`#toc-main`).click(function(event) {event.stopPropagation();})
const closeTOC = () => {
    // $('#toc-container').one('scroll', false).one('mousewheel', false).one('touchmove',false)
    $('#toc-container').fadeOut("fast")
    $(`#toc-button`).show("fast")
}

$(`#toc-container`).click(closeTOC)
$(`#toc-close`).click(closeTOC)
$(document).keydown(function(e) {
    if (e.keyCode == 27 && $(`#toc-container`).is(":visible")) {
        closeTOC();
    }
})

//========================================
// >> SHOW CONTENT UPON RENDERED
//========================================
document.addEventListener("readystatechange", function () {
    if (document.readyState == "complete") {
        $(`body`).css("visibility", "visible")
    }
}); 

//========================================
// >> AUTO-FIT MAIN
//========================================
document.addEventListener("readystatechange", function () {
    if (document.readyState == "complete") {
        $(`main [id*="-content"]`).css("min-height", `${$(window).height() - $(`header`).outerHeight(true) - $(`footer`).outerHeight(true)}px`)
    }
}); 
