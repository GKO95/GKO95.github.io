const __HEADER__  = document.getElementsByTagName("HEADER")[0];
const __MAIN__    = document.getElementsByTagName("MAIN")[0];
const __FOOTER__  = document.getElementsByTagName("FOOTER")[0];
const __NAV__     = document.getElementsByTagName("NAV")[0];

const __MENU__    = document.getElementById("menu-content");
const __CONTENT__ = document.getElementById("docs-content");

//========================================
// >> MAIN: SIMPLIFIED
//========================================
const __TITLE__   = document.getElementById("title");
__TITLE__.style.paddingTop = __NAV__.offsetHeight + "px";

if (__CONTENT__.children[0].tagName == "H1")
{ __CONTENT__.children[0].style.marginTop = 0 + "px"; }

const Raw2Chapter = () => {

    let elem; let __CHAPTER__;
    let elements = __CONTENT__.children.length;
    for (let index = 0; index < elements; index++)
    {
        // DISTINGUISH CHAPTERS BY "H1" TAG WITH "SECTION"
        if (__CONTENT__.children[0].tagName == "H1")
        {
            __CHAPTER__ = document.createElement("SECTION");
            __CHAPTER__.setAttribute("class", "docs-chapter");
            __CONTENT__.appendChild(__CHAPTER__);
        }
        else if (__CONTENT__.children[0].className == "docs-chapter") 
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

}; Raw2Chapter();

//========================================
// >> MENU: SIMPLIFIED
//========================================
const MenuParser = () => {
    let elem; let anchor; let division;
    // CREATE "H1" CHAPTER ANCHORS AND CHAPTER
    for (let chapter of __CONTENT__.children)
    {
        elem = document.createElement("H1"); elem.innerHTML = chapter.firstChild.innerHTML;
        anchor = document.createElement("A"); anchor.appendChild(elem);
        //anchor.setAttribute("href", "#"+chapter.firstChild.id);
        anchor.addEventListener("click", function(e) {
            alert(e.target);
        });
        __MENU__.appendChild(anchor);   

        division = document.createElement("SECTION");
        division.style.display = "none";
        
        // ADD "H2" AND "H3" SUBCHAPTER IN CHAPTER.
        for (let subchapter of chapter.children) {

            anchor = document.createElement("A");
            anchor.setAttribute("href", "#"+subchapter.id);
            if (subchapter.tagName == "H2")
            {
                anchor.innerHTML = subchapter.innerHTML;
                elem = document.createElement("H2");
                
                elem.appendChild(anchor);  division.appendChild(elem);
            }
            else if (subchapter.tagName == "H3")
            {
                anchor.innerHTML = subchapter.innerHTML;
                elem = document.createElement("H3");
                
                elem.appendChild(anchor);  division.appendChild(elem);
            }

        }
        __MENU__.appendChild(division);
    }

}; MenuParser();

//========================================
// >> SYNC: MAIN + MENU
//========================================
var hash = window.location.hash;
const syncMainMenu = () => {
    let found = false;
    // DISPLAY FIRST CHAPTER ONLY IF NO HASH TAG IS PRESENTED
    if (hash == "") {
        __CONTENT__.children[0].style.display = "block";
        __MENU__.getElementsByTagName("A")[0].setAttribute("href", "#" + __CONTENT__.children[0].firstChild.id);
        __MENU__.getElementsByTagName("ASIDE")[0].style.display = "block";
        return;
    }

    for (let chapter = 0; chapter < __CONTENT__.children.length; chapter++)
    {
        __CONTENT__.children[chapter].style.display = "none";
        __MENU__.getElementsByTagName("A")[0].setAttribute("href", "");
        __MENU__.getElementsByTagName("ASIDE")[chapter].style.display = "none";

        if (found) {continue;}
        for (let section of __CONTENT__.children[chapter].children)
        {
            if (hash == "#" + section.id)
            {
                __CONTENT__.children[chapter].style.display = "block";
                __MENU__.getElementsByTagName("A")[0].setAttribute("href", "#" + __CONTENT__.children[chapter].firstChild.id);
                __MENU__.getElementsByTagName("ASIDE")[chapter].style.display = "block";
                break;
            }
        }
    }

}; syncMainMenu();

//========================================
// >> FUNCTION: RESIZE WINDOW
//========================================
window.addEventListener('resize', event => {
    MenuSize1();
});
