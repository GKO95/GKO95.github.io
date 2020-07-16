const __HEADER__   = document.getElementsByTagName("HEADER")[0];
const __FOOTER__   = document.getElementsByTagName("FOOTER")[0];
const __MAIN__     = document.getElementsByTagName("MAIN")[0];
const __NAV__      = document.getElementsByTagName("NAV")[0];
const __CONTENT__  = document.getElementById("docs-content");

const __mMAIN__    = document.getElementById("menu-main");
const __mCONTENT__ = document.getElementById("menu-content");
const __mOPTION__  = document.getElementById("menu-option");

//========================================
// >> HREF POSITION SHIFT
//========================================


//========================================
// >> MAIN: SIMPLIFIED
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
            section.setAttribute("class", "docs-chapter");
            section.style.display = "display";
            __CONTENT__.appendChild(section);
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

    // >> "docs-content" RESTRUCTURED & READY!
    __MAIN__.children[0].style.visibility = "visible";
    
}; Raw2Chapter();
//========================================
// >> MENU: SIMPLIFIED
//========================================

const MenuDesign = () => {

    // >> TOP-SIDE
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

    document.getElementById("menu-title").innerText = category + ": " + __PAGENAME__;

    let button = document.createElement("A");
    button.style.backgroundImage = "url(/assets/images/logo/logo-code.png)";
    let path = "https://github.com/GKO95/GKO95.github.io/blob/master/_articles/"+__CATEGORY__.toLowerCase()+"/"+category+"_"+__PAGENAME__+".md";
    button.setAttribute("href", path); button.setAttribute("title", "View raw in GitHub");
    document.getElementById("menu-select").appendChild(button);

    button = document.createElement("A");
    button.style.backgroundImage = "url(/assets/images/logo/logo-section.png)";
    if (window.location.hash != "#full") button.style.backgroundColor = "inherit";
    else button.style.backgroundColor = "rgb(64,64,64)";
    button.setAttribute("title", "Toggle chapters");
    button.addEventListener("click", function() {

        if(window.location.hash == "")
        {
            button.style.backgroundColor = "rgb(64,64,64)";
            window.location.replace("#full");
        }
        else
        {
            button.style.backgroundColor = "inherit";
            window.location.replace("#");
        }

    });
    document.getElementById("menu-select").appendChild(button);


    // >> BOTTOM-SIDE
    for (let index = 0; index < 2; index++) 
    {
        document.getElementById("menu-content").appendChild(document.createElement("SECTION"));
        document.getElementById("menu-content").getElementsByTagName("SECTION")[index].style.height = "100%";
    }

    document.getElementById("menu-content").getElementsByTagName("SECTION")[0].style.float = "left";
    document.getElementById("menu-content").getElementsByTagName("SECTION")[1].style.float = "right";

    document.getElementById("menu-content").getElementsByTagName("SECTION")[0].style.width = "60%";
    document.getElementById("menu-content").getElementsByTagName("SECTION")[1].style.width = "40%";

    document.getElementById("menu-content").getElementsByTagName("SECTION")[0].style.backgroundColor = "inherit";
    document.getElementById("menu-content").getElementsByTagName("SECTION")[1].style.backgroundColor = "rgb(32,32,32)";

    let anchor;
    for (let chapter of __CONTENT__.children)
    {
        anchor = document.createElement("A");
        anchor.style.cursor = "pointer";
        anchor.innerHTML = chapter.firstChild.innerHTML;
        anchor.setAttribute("href", "#"+chapter.firstChild.id);
        anchor.addEventListener("click", function() {
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
                    document.getElementById("menu-bkgd").style.backgroundColor = "rgba(128,128,128,"+(opacityMenuBkgd/10)+")";
                    document.getElementById("menu-main").style.height = sizeMenuMain + "%";
                    document.getElementById("menu-main").style.opacity = opacityMenuMain/10;
                }
            }, 20);
        });
        document.getElementById("menu-content").getElementsByTagName("SECTION")[0].appendChild(anchor);
    }
 
    /*
    for (let index = 0; index < __CONTENT__.children.length; index++)
    {
        document.getElementById("menu-content").getElementsByTagName("SECTION")[0].children[index].addEventListener("click", function() {
            window.scrollTo(0, __CONTENT__.children[index].getBoundingClientRect().top + (48 * index));
        });
        
    }
    */
    /*
    for (let chapter of __CONTENT__.children)
    {
        elem = document.createElement("H1"); elem.innerHTML = chapter.firstChild.innerHTML;
        anchor = document.createElement("A"); anchor.appendChild(elem);
        anchor.setAttribute("href", "#"+chapter.firstChild.id);

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
    */

}; MenuDesign();

/*
const MenuParser = () => {
    let elem; let anchor; let division;
    // CREATE "H1" CHAPTER ANCHORS AND CHAPTER
    for (let chapter of __CONTENT__.children)
    {
        elem = document.createElement("H1"); elem.innerHTML = chapter.firstChild.innerHTML;
        anchor = document.createElement("A"); anchor.appendChild(elem);
        anchor.setAttribute("href", "#"+chapter.firstChild.id);

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
*/

//========================================
// >> SYNC: MAIN + MENU
//========================================
const syncMainMenu = () => {
    let found = false;
    // DISPLAY FIRST CHAPTER ONLY IF NO HASH TAG IS PRESENTED

    if (true /*window.location.hash == ""*/) {

        for (let chapter of __CONTENT__.children)
        {
            //chapter.style.display = "block";
            //chapter.getBoundingClientRect().top);
        }
        return;
    }
    
    /*
    for (let chapter = 0; chapter < __CONTENT__.children.length; chapter++)
    {
        __CONTENT__.children[chapter].style.display = "none";
        __MENU__.getElementsByTagName("A")[0].setAttribute("href", "");
        __MENU__.getElementsByTagName("SECTION")[chapter].style.display = "none";

        if (found) {continue;}
        for (let section of __CONTENT__.children[chapter].children)
        {
            if (window.location.hash == "#" + section.id)
            {
                __CONTENT__.children[chapter].style.display = "block";
                __MENU__.getElementsByTagName("A")[0].setAttribute("href", "#" + __CONTENT__.children[chapter].firstChild.id);
                __MENU__.getElementsByTagName("SECTION")[chapter].style.display = "block";
                break;
            }
        }
    }
    */

}; //syncMainMenu();

//========================================
// >> FUNCTION: RESIZE WINDOW
//========================================
window.addEventListener('resize', event => {

});

