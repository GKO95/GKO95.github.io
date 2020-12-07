//========================================
// >> LOCAL STORAGE
//========================================
const __LOCAL__ = window.localStorage;

const __initlocal__ = () => {

    if (__LOCAL__.getItem("THEME") == 'Dark' || __LOCAL__.getItem("THEME") == 'Light') { }
    else { __LOCAL__.setItem("THEME", 'Light'); }

    if (__LOCAL__.getItem("LANG") == 'ko' || __LOCAL__.getItem("LANG") == 'en') { }
    else { __LOCAL__.setItem("LANG", 'ko'); }

    if (__LOCAL__.length > 2)
    {
        let theme = __LOCAL__.getItem("THEME");
        let lang  = __LOCAL__.getItem("LANG");
        
        __LOCAL__.clear();
        __LOCAL__.setItem("THEME", theme);
        __LOCAL__.setItem("LANG", lang);
    }

    const theme = __LOCAL__.getItem("THEME");

    // PRE-INITIALIZATION
    let bkgdColor = (theme == 'Light') ? "rgb(255, 255, 255)" : "rgb(32, 32, 32)";   // BACKGROUND COLOR = CONDITION ? LIGHT : DARK
    let textColor = (theme == 'Light') ? "rgb(0, 0, 0)" : "rgb(255, 255, 255)";   // FONT COLOR = CONDITION ? LIGHT : DARK
    document.styleSheets[0].insertRule(`body { background-color: ${bkgdColor}; color: ${textColor}; }`);
    document.styleSheets[0].insertRule(`blockquote a { color: ${textColor}; }`);

    textColor = (theme == 'Light') ? "rgb(144, 144, 144)" : "rgb(192, 192, 192)";   // HYPERLINK COLOR = CONDITION ? LIGHT : DARK
    document.styleSheets[0].insertRule(`a { color: ${textColor}; }`);

    bkgdColor = (theme == 'Light') ? "rgb(224, 224, 224)" : "rgb(48, 48, 48)";  // CODE COLOR = CONDITION ? LIGHT : DARK
    document.styleSheets[0].insertRule(`code { background-color: ${bkgdColor}; }`);

    //bkgdColor = (theme == 'Light') ? "gainsboro" : "#272822;";  // CODE COLOR = CONDITION ? LIGHT : DARK
    //document.styleSheets[0].insertRule(`.highlight pre, .highlight .hll { background-color: ${bkgdColor}; }`);

    bkgdColor = (theme == 'Light') ? "rgb(224, 224, 224)" : "rgb(40, 40, 40)";  // MENU COLOR = CONDITION ? LIGHT : DARK
    document.styleSheets[0].insertRule(`#menu-main { background-color: ${bkgdColor}; }`);

    bkgdColor = (theme == 'Light') ? "rgb(0, 0, 0, 0)" : "rgb(128, 128, 128, 0)";  // MENU BACKGROUND = CONDITION ? LIGHT : DARK
    document.styleSheets[0].insertRule(`#menu-bkgd { background-color: ${bkgdColor}; }`);
    
    bkgdColor = (theme == 'Light') ? "rgb(240, 240, 240)" : "rgb(24, 24, 24)";  // MENU OPTION & BLOCKQUOTE = CONDITION ? LIGHT : DARK
    textColor = (theme == 'Light') ? "rgb(64, 64, 64)" : "rgb(200, 200, 200)";
    let brdrColor = (theme == 'Light') ? "rgb(80, 80, 80)" : "rgb(224, 224, 224)";
    document.styleSheets[0].insertRule(`#menu-option { background-color: ${bkgdColor}; }`);
    document.styleSheets[0].insertRule(`blockquote { background-color: ${bkgdColor}; border-left-color: ${brdrColor}; color: ${textColor}; }`);

}; __initlocal__();

//========================================
// >> SESSION STORAGE
//========================================
const __SESSION__ = window.sessionStorage;

const __initsession__ = () => {

    if (__SESSION__.getItem("onSession") == null)
    {
        __SESSION__.setItem("onSession",'');
    }

}; __initsession__();
