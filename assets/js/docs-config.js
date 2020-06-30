const __HEADER__  = document.getElementsByTagName("HEADER")[0];
const __MAIN__    = document.getElementsByTagName("MAIN")[0];
const __FOOTER__  = document.getElementsByTagName("FOOTER")[0];

/*========================================
>> MENU
========================================*/
const __NAV__ = document.getElementById("navigation");
const __MENU__ = document.getElementById("menu");
const __CONTENT__ = document.getElementById("docs-content");

// 17px FOR CONSIDERING PROPERTY "overflow-y"
const _CSS_widthMenu = parseInt(getComputedStyle(__MENU__).width) + 17;

__MENU__.style.width = _CSS_widthMenu + "px";
__MENU__.style.top = __NAV__.offsetHeight + "px";
__MENU__.style.left = -(_CSS_widthMenu) + "px";

const MenuSize = () => {
    __MENU__.style.height 
        = window.innerHeight - (__NAV__.offsetHeight) + "px";
}; MenuSize();

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

const MenuParser = () => {
    let elements = document.getElementById("docs-content").children;
    let textNode;
    for (let element of elements) {
        if (element.tagName == "H1")
        {
            let elemH1 = document.createElement("H1");
            __MENU__.appendChild(elemH1);

            //textNode = document.createTextNode(element.innerHTML);
            //elemH1.appendChild(textNode);
            __MENU__.lastChild.innerHTML = element.innerHTML;
        }
        else if (element.tagName == "H2")
        {
            let elemH2 = document.createElement("H2");
            __MENU__.appendChild(elemH2);

            __MENU__.lastChild.innerHTML = element.innerHTML;
        }
        else if (element.tagName == "H3")
        {
            let elemH3 = document.createElement("H3");
            __MENU__.appendChild(elemH3);

            __MENU__.lastChild.innerHTML = element.innerHTML;
        }
    }
}; MenuParser();

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