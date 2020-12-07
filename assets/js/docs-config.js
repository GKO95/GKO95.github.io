const __HEADER__   = document.getElementsByTagName("HEADER")[0];
const __FOOTER__   = document.getElementsByTagName("FOOTER")[0];
const __MAIN__     = document.getElementsByTagName("MAIN")[0];
const __NAV__      = document.getElementsByTagName("NAV")[0];
const __CONTENT__  = document.getElementById("docs-content");

const __mMAIN__    = document.getElementById("menu-main");
const __mCONTENT__ = document.getElementById("menu-content");
const __mOPTION__  = document.getElementById("menu-option");

//========================================
// >> MAIN: IMAGE WRAPPER FOR HTML
//========================================
const ImageWrapper = () => {

    for (let img of __CONTENT__.getElementsByTagName("IMG"))
    {
        img.setAttribute("src", "./."+img.getAttribute("src"));
    }

}; ImageWrapper()

//========================================
// >> PLUGIN: SELECT CATEGORY
//========================================
const SelectCategory = () => {

    let category;
    switch(__CATEGORY__)
    {
        case "Programming":
            category = "PRGMING";
            break;
        case "Library":
            category = "LIBRARY";
            break;
    }

    return category;
}

//========================================
// >> PLUGIN: SWITCH LANGUAGE
//========================================
const SwitchLanguage = () => {

    let category = SelectCategory();

    // >> SWITCH LANGUAGE
    let button = document.createElement("A");
    button.style.backgroundImage = "url(/assets/images/logo/logo-language.png)";
    if (__LANGUAGE__ == "en") 
    {
        __LOCAL__.setItem("LANG", 'en');
        path = "./../../ko/"+category+"_"+__PAGENAME__+"/";
    }
    else if (__LANGUAGE__ == "ko")
    {
        __LOCAL__.setItem("LANG", 'ko');
        path = "./../../en/"+category+"_"+__PAGENAME__+"/";
    }
    button.setAttribute("href", path); button.setAttribute("title", "Swtich language");
    document.getElementById("navigation-logo").appendChild(button);

}; SwitchLanguage();

//========================================
// >> MENU: CONFIGURATION
//========================================
const MenuDesign = () => {

    // >> TOP-SIDE
    let category = SelectCategory();
    const STYLETEXT = getComputedStyle(document.getElementById("menu-bkgd")).backgroundColor.slice(0,-4);

    document.getElementById("menu-title").innerText = category + ": " + __PAGENAME__;

    let button; let path;

    // >> VIEW RAW DOCUMENT
    button = document.createElement("A");
    button.style.backgroundImage = `url(/assets/images/logo/logo-code4${__LOCAL__.getItem("THEME")}.png)`;
    path = "https://github.com/GKO95/GKO95.github.io/blob/master/_docs/"+__CATEGORY__.toLowerCase()+"/"+__LANGUAGE__.toLowerCase()+"/"+category+"_"+__PAGENAME__+".md";
    button.setAttribute("href", path); button.setAttribute("title", "View raw in GitHub");
    document.getElementById("menu-select").appendChild(button);

    // >> BOTTOM-SIDE
    for (let index = 0; index < 2; index++) 
    {
        document.getElementById("menu-content").appendChild(document.createElement("SECTION"));
        document.getElementById("menu-content").getElementsByTagName("SECTION")[index].style.height = "100%";
    }

    document.getElementById("menu-content").getElementsByTagName("SECTION")[0].style.float = "left";
    document.getElementById("menu-content").getElementsByTagName("SECTION")[1].style.float = "right";

    document.getElementById("menu-content").getElementsByTagName("SECTION")[0].style.width = "50%";
    document.getElementById("menu-content").getElementsByTagName("SECTION")[1].style.width = "50%";

    document.getElementById("menu-content").getElementsByTagName("SECTION")[0].style.backgroundColor = "inherit";
    if (__LOCAL__.getItem("THEME")=='Light')
        document.getElementById("menu-content").getElementsByTagName("SECTION")[1].style.backgroundColor = "rgb(232,232,232)";
    else
        document.getElementById("menu-content").getElementsByTagName("SECTION")[1].style.backgroundColor = "rgb(32,32,32)";

    let anchor, submenu, sector;
    for (let chapter of __CONTENT__.children)
    {
        if (chapter.tagName != "H1")
        {
            if (chapter.tagName != "H2" && chapter.tagName != "H3") continue;
        }
        else
        {            
            sector = chapter.id
            submenu = document.createElement("SECTION");
            submenu.setAttribute("class", sector)
            submenu.style.display = "none";
            document.getElementById("menu-content").getElementsByTagName("SECTION")[1].appendChild(submenu);

            anchor = document.createElement("A");
            anchor.style.cursor = "pointer";
            anchor.innerHTML = chapter.innerHTML;
            anchor.addEventListener("click", function() {
                for (let group of document.getElementById("menu-content").getElementsByTagName("SECTION")[1].children)
                {
                    if (group.className != chapter.id)
                    { group.style.display = "none"; continue; }
                        
                    if (group.style.display == "none")
                    { group.style.display = "block"; }
                    else
                    { group.style.display = "none"; }
                }
            });
            document.getElementById("menu-content").getElementsByTagName("SECTION")[0].appendChild(anchor);
        }

        anchor = document.createElement("A");
        anchor.style.cursor = "pointer";
        anchor.innerHTML = chapter.innerHTML;
        anchor.setAttribute("href","#"+chapter.id);
        anchor.addEventListener("click", function() {
            window.onscroll = function() {}; 
            opacityMenuBkgd = 7; sizeMenuMain = 80; opacityMenuMain = 10;
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
                    document.getElementById("menu-bkgd").style.backgroundColor = `${STYLETEXT}, ${(opacityMenuBkgd/10)})`;
                    document.getElementById("menu-main").style.height = sizeMenuMain + "%";
                    document.getElementById("menu-main").style.opacity = opacityMenuMain/10;
                }
            }, 20);
        });
        switch(chapter.tagName)
        {
            case "H1":
                anchor.style.float = "none";
                anchor.style.margin = "16px 16px 8px 16px"; anchor.style.fontStyle = "bold"; anchor.style.fontSize = "1.6em";
                anchor.style.borderBottom = (__LOCAL__.getItem("THEME") == 'Light') ? "solid black 2px" : "solid white 2px"; 
                break;
            case "H2":
                anchor.style.margin = "4px 0px 4px 24px"; anchor.style.fontStyle = "normal"; anchor.style.fontSize = "1.0em";
                break;
            case "H3":
                anchor.style.margin = "2px 0px 2px 64px"; anchor.style.fontStyle = "italic"; anchor.style.fontSize = "0.8em";
                break;
        }
        document.getElementById("menu-content").getElementsByClassName(sector)[0].appendChild(anchor);
    }

}; MenuDesign();

//========================================
// >> FUNCTION: RESIZE WINDOW
//========================================
window.addEventListener('resize', event => {

});
