//========================================
// >> LOCAL STORAGE
//========================================
const __LOCAL__ = window.localStorage;

const __initlocal__ = () => {

    if (__LOCAL__.getItem("THEME") == 'dark' || __LOCAL__.getItem("THEME") == 'light') { }
    else { __LOCAL__.setItem("THEME", 'dark'); }

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

}; __initlocal__();

//========================================
// >> SESSION STORAGE
//========================================
const __SESSION__ = window.sessionStorage;

const __initsession__ = () => {

    

}; __initsession__();