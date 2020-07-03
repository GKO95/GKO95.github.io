const __HEADER__  = document.getElementsByTagName("HEADER")[0];
const __MAIN__    = document.getElementsByTagName("MAIN")[0];
const __FOOTER__  = document.getElementsByTagName("FOOTER")[0];
const __NAV__     = document.getElementsByTagName("NAV")[0];

const __MENU__    = document.getElementById("menu");
const __CONTENT__ = document.getElementById("docs-content");

/*========================================
>> MAIN: SIMPLIFIED
========================================*/
const __TITLE__   = document.getElementById("title");
__TITLE__.style.paddingTop = __NAV__.offsetHeight + "px";

if (__CONTENT__.children[0].tagName == "H1")
{ __CONTENT__.children[0].style.marginTop = 0 + "px"; }

const Raw2Chapter = () => {

    let elem;
    let countH2;
    let countH3;
    let __CHAPTER__;
    let elements = __CONTENT__.children.length;
    for (let index = 0; index < elements; index++)
    {
        // DISTINGUISH CHAPTERS BY "H1" TAG WITH "DIV"
        if (__CONTENT__.children[0].tagName == "H1")
        {
            __CHAPTER__ = document.createElement("DIV");
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

/*========================================
>> MENU: SIMPLIFIED
========================================*/

// 17px FOR CONSIDERING PROPERTY "overflow-y"
const _CSS_widthMenu = parseInt(getComputedStyle(__MENU__).width) + 17;

__MENU__.style.width = _CSS_widthMenu + "px";
__MENU__.style.top = __NAV__.offsetHeight + "px";
__MENU__.style.left = -(_CSS_widthMenu) + "px";

const MenuSize = () => {
    __MENU__.style.height 
        = window.innerHeight - (__NAV__.offsetHeight) + "px";
}; MenuSize();

// >> EXPAND/COLLAPSE MENU ON CLIKCING BUTTON
document.getElementById("menu-button").addEventListener("click", function() {
    
    let animate;
    let leftPosition;

    let interval = 8;

    if (parseInt(__MENU__.style.left) < 0)
    {
        leftPosition = -(_CSS_widthMenu);
        animate = setInterval(function() {
            if (leftPosition == 0)
            {clearInterval(animate);}
            else
            {
                leftPosition += interval;
                __MENU__.style.left = leftPosition + "px";
            }
        }, 1);
    }
    else
    {
        leftPosition = 0;
        animate = setInterval(function() {
            if (leftPosition == -(_CSS_widthMenu))
            {clearInterval(animate);}
            else
            {
                leftPosition -= interval;
                __MENU__.style.left = leftPosition + "px";
            }
        }, 1);
    }
});

// >> COLLAPSE MENU ON CLIKCING <MAIN>
__MAIN__.addEventListener("click", function() {
    if (parseInt(__MENU__.style.left) == 0)
    {
        let animate;
        let leftPosition;
    
        let interval = 8;

        leftPosition = 0;
        animate = setInterval(function() {
            if (leftPosition == -(_CSS_widthMenu))
            {clearInterval(animate);}
            else
            {
                leftPosition -= interval;
                __MENU__.style.left = leftPosition + "px";
            }
        }, 1);
    }
});

const MenuParser = () => {
    let elem; let anchor; let division;
    for (let chapter of __CONTENT__.children)
    {
        elem = document.createElement("H1"); elem.innerHTML = chapter.firstChild.innerHTML;
        anchor = document.createElement("A"); anchor.appendChild(elem);
        //anchor.setAttribute("href", "#"+chapter.firstChild.id);
        __MENU__.appendChild(anchor);

        division = document.createElement("DIV");
        
        for (let section of chapter.children) {

            anchor = document.createElement("A");
            anchor.setAttribute("href", "#"+section.id);
            if (section.tagName == "H2")
            {
                anchor.innerHTML = section.innerHTML;
                elem = document.createElement("H2");
                
                elem.appendChild(anchor);  division.appendChild(elem);
            }
            else if (section.tagName == "H3")
            {
                anchor.innerHTML = section.innerHTML;
                elem = document.createElement("H3");
                
                elem.appendChild(anchor);  division.appendChild(elem);
            }

        }
        __MENU__.appendChild(division);
    }

}; MenuParser();

/*========================================
>> SYNC: MAIN + MENU
========================================*/


/*========================================
>> FUNCTION: SCROLL WINDOW
========================================*/
window.onscroll = function() {
    if ((window.innerHeight + window.scrollY) 
            >= document.body.offsetHeight - __FOOTER__.offsetHeight) {

        __MENU__.style.height 
            = window.innerHeight - (__NAV__.offsetHeight)
                - (__FOOTER__.offsetHeight - (document.body.offsetHeight - (window.innerHeight + window.scrollY))) + "px";
    }
    else {
        __MENU__.style.height 
            = window.innerHeight - (__NAV__.offsetHeight) + "px";
    }
};

/*========================================
>> FUNCTION: RESIZE WINDOW
========================================*/
window.addEventListener('resize', event => {
    MenuSize();
});