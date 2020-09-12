//========================================
// >> LOCAL STORAGE
//========================================
const __LOCAL__ = window.localStorage;

const __initlocal__ = () => {

    if (__LOCAL__.getItem("THEME") == 'Dark' || __LOCAL__.getItem("THEME") == 'Light') { }
    else { __LOCAL__.setItem("THEME", 'Dark'); }

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
    let bkgdColor = (theme == 'Light') ? 255 : 32;   // BACKGROUND COLOR = CONDITION ? LIGHT : DARK
    let textColor = (theme == 'Light') ? 0 : 255;   // FONT COLOR = CONDITION ? LIGHT : DARK
    document.styleSheets[0].insertRule(`body { background-color: rgb(${bkgdColor}, ${bkgdColor}, ${bkgdColor}); color: rgb(${textColor}, ${textColor}, ${textColor}) }`);

    textColor = (theme == 'Light') ? 144 : 192;   // HYPERLINK COLOR = CONDITION ? LIGHT : DARK
    document.styleSheets[0].insertRule(`a { color: rgb(${textColor}, ${textColor}, ${textColor}); }`);

    bkgdColor = (theme == 'Light') ? 224 : 48;  // CODE COLOR = CONDITION ? LIGHT : DARK
    document.styleSheets[0].insertRule(`code { background-color: rgb(${bkgdColor}, ${bkgdColor}, ${bkgdColor}); }`);

    //bkgdColor = (theme == 'Light') ? "gainsboro" : "#272822;";  // CODE COLOR = CONDITION ? LIGHT : DARK
    //document.styleSheets[0].insertRule(`.highlight pre, .highlight .hll { background-color: ${bkgdColor}; }`);

    bkgdColor = (theme == 'Light') ? 224 : 40;  // MENU COLOR = CONDITION ? LIGHT : DARK
    document.styleSheets[0].insertRule(`#menu-main { background-color: rgb(${bkgdColor}, ${bkgdColor}, ${bkgdColor}); }`);

    bkgdColor = (theme == 'Light') ? 0 : 128;  // MENU BACKGROUND = CONDITION ? LIGHT : DARK
    document.styleSheets[0].insertRule(`#menu-bkgd { background-color: rgba(${bkgdColor}, ${bkgdColor}, ${bkgdColor}, 0); }`);
    
    bkgdColor = (theme == 'Light') ? 240 : 24;  // MENU OPTION & BLOCKQUOTE = CONDITION ? LIGHT : DARK
    textColor = (theme == 'Light') ? 64 : 200;
    let brdrColor = (theme == 'Light') ? 80 : 224;
    document.styleSheets[0].insertRule(`#menu-option { background-color: rgb(${bkgdColor}, ${bkgdColor}, ${bkgdColor}); }`);
    document.styleSheets[0].insertRule(`blockquote { background-color: rgb(${bkgdColor}, ${bkgdColor}, ${bkgdColor});
        border-left-color: rgb(${brdrColor}, ${brdrColor}, ${brdrColor}); color: rgb(${textColor}, ${textColor}, ${textColor}); }`);

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
