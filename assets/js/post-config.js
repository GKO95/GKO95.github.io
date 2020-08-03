const __HEADER__   = document.getElementsByTagName("HEADER")[0];
const __FOOTER__   = document.getElementsByTagName("FOOTER")[0];
const __MAIN__     = document.getElementsByTagName("MAIN")[0];
const __NAV__      = document.getElementsByTagName("NAV")[0];
const __CONTENT__  = document.getElementById("post-content");

const __mMAIN__    = document.getElementById("menu-main");
const __mCONTENT__ = document.getElementById("menu-content");
const __mOPTION__  = document.getElementById("menu-option");

//========================================
// >> MAIN: CATEGORIZATION
//========================================
const Raw2Chapter = () => { // >> "docs-content" INITIALLY HIDDEN!

    document.getElementById("title").style.paddingTop = __NAV__.offsetHeight + "px";

    let elem; let section;
    let length = __CONTENT__.children.length;
    for (let index = 0; index < length; index++)
    {
        // DISTINGUISH CHAPTERS BY "H1" TAG WITH "SECTION"
        if (__CONTENT__.children[0].tagName == "H1")
        {
            section = document.createElement("SECTION");
            section.setAttribute("class", "post-chapter");
            section.style.display = "display";
            __CONTENT__.appendChild(section);
        }
        else if (__CONTENT__.children[0].className == "post-chapter") 
        { break; }

        elem = document.createElement(__CONTENT__.children[0].tagName);
        // RETAIN HIGHLIGHTER-ROUGE STYLE
        if (__CONTENT__.children[0].className.split(" ")[1] == "highlighter-rouge")
        {
            elem.setAttribute("class", __CONTENT__.children[0].className);
        }
        // RETAIN ID FOR TABLE OF CONTENT
        else if (__CONTENT__.children[0].id != "") {
            elem.setAttribute("id", __CONTENT__.children[0].id);
        }
        __CONTENT__.lastChild.appendChild(elem);
        __CONTENT__.lastChild.lastChild.innerHTML = __CONTENT__.children[0].innerHTML;

        __CONTENT__.removeChild(__CONTENT__.children[0]);
    }

    // >> "docs-content" RESTRUCTURED & READY!
    __MAIN__.children[0].style.visibility = "visible";
    
}; Raw2Chapter();

//========================================
// >> MENU: ORGANIZATION
//========================================
const MenuDesign = () => {

}; MenuDesign();

//========================================
// >> FUNCTION: RESIZE WINDOW
//========================================
window.addEventListener('resize', event => {

});

