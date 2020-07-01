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
    let __CHAPTER__;
    let elements = __CONTENT__.children.length;
    for (let index = 0; index < elements; index++)
    {
        if (__CONTENT__.children[0].tagName == "H1")
        {
            __CHAPTER__ = document.createElement("DIV");
            __CHAPTER__.setAttribute("class", "docs-chapter");
            __CONTENT__.appendChild(__CHAPTER__);
        }
        else if (__CONTENT__.children[0].className == "docs-chapter") 
        { break; }

        elem = document.createElement(__CONTENT__.children[0].tagName);
        if (__CONTENT__.children[0].className.split(" ")[1] == "highlighter-rouge")
        {
            elem.setAttribute("class", __CONTENT__.children[0].className);
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

    let elem;
    for (let chapter of __CONTENT__.children)
    {

        elem = document.createElement("H1");
        elem.innerHTML = chapter.firstChild.innerHTML;
        __MENU__.appendChild(elem);

        elem = document.createElement("DIV");
        for (let section of chapter.children)
        {
            if (section.tagName == "H2")
            {
                elem.appendChild(document.createElement("H2"));
                elem.lastChild.innerHTML = section.innerHTML;
            }
            else if (section.tagName == "H3")
            {
                elem.appendChild(document.createElement("H3"));
                elem.lastChild.innerHTML = section.innerHTML;
            }
        }
        __MENU__.appendChild(elem);
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