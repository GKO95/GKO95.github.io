const config = new class { constructor() { if (isNaN(this.GetCONFIG())) { this.SetCONFIG(0); } if (window.localStorage.length !== 1) 
{ let config = this.GetCONFIG(); if (config > 0xFF) { config &= 0xFF; } else if (config == null || isNaN(config)) { config = 0; } 
window.localStorage.clear(); this.SetCONFIG(config); } this.value = this.GetCONFIG() } value = 0; THEME = { LIGHT: 0, DARK: 1 }; 
LANG = { KOREAN: 0, ENGLISH: 1 }; GetCONFIG(sess = true) { return (sess ? parseInt(window.localStorage.getItem("CODE")) : this.value) }
SetCONFIG(code = 0) { this.value = code; window.localStorage.setItem("CODE", `${this.value}`) } GetTHEME(theme = this.THEME.LIGHT)
{ return ((0b0001 & this.value) >> 0) === theme } SetTHEME(theme = this.THEME.LIGHT) { this.value = (this.value & 0b1110) | (0b0001 & (theme << 0)); 
window.localStorage.setItem("CODE", `${this.value}`) } GetLANG(lang = this.LANG.KOREAN) { return ((0b0010 & this.value) >> 1) === lang}
SetLANG(lang = this.LANG.KOREAN) { this.value = (this.value & 0b1101) | (0b0010 & (lang << 1)); window.localStorage.setItem("CODE", `${this.value}`) } };

//========================================
// >> SELECT THEME
//========================================
if (config.GetTHEME(config.THEME.DARK)) document.documentElement.setAttribute("dark", "true")
else document.documentElement.setAttribute("dark", "false")

//========================================
// >> SWITCH THEME
//========================================
$(`#nav-theme`).click(function() {
    if (config.GetTHEME()) {
        config.SetTHEME(config.THEME.DARK)
    } else {
        config.SetTHEME(config.THEME.LIGHT)
    }
    location.reload();
})

//========================================
// >> SELECT LANGUAGE
//========================================
if (config.GetLANG(config.LANG.ENGLISH)) document.documentElement.setAttribute("lang", "en")
else document.documentElement.setAttribute("lang", "ko")

//========================================
// >> SWITCH LANGUAGE
//========================================
$(`#nav-lang`).click(function() {
    if (config.GetLANG()) {
        config.SetLANG(config.LANG.ENGLISH)
        if (document.location.pathname.includes("/docs/")) {
            window.location = $(location).attr('pathname').replace("/docs/ko.","/docs/en.")
        } else document.location.reload();
    } else {
        config.SetLANG(config.LANG.KOREAN)
        if (document.location.pathname.includes("/docs/")) {
            window.location = $(location).attr('pathname').replace("/docs/en.","/docs/ko.")
        } else document.location.reload();
    }
})

//========================================
// >> IMPORT SCRIPT
//========================================
switch(location.pathname.split('/')[1])
{
    case "":
        import("./home.js")
        break;

    case "docs":
        import("./docs.js")
        break;

    case "blog":
        import("./blog.js")
        break;

    default:
        break;
}

//========================================
// >> RENDERING
//========================================
document.addEventListener("readystatechange", function () {
    if (document.readyState == "complete") {
        $(`body`).css("visibility", "visible")
    }
}); 
