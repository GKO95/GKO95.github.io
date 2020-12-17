/*
const __HEADER__    = document.getElementsByTagName("HEADER")[0];
const __NAV__       = document.getElementsByTagName("NAV")[0];
const __TITLE__     = document.getElementById("title").children[0];
const __MAIN__      = document.getElementsByTagName("MAIN")[0];
const __FOOTER__    = document.getElementsByTagName("FOOTER")[0];

const __UPPER__     = document.getElementById("home-upper");
const __REG__       = document.getElementById("home-register");
const __BYTES__     = document.getElementsByClassName("home-byte");
const __BITS__      = document.getElementsByClassName("home-bit");
const __SHIFTS__    = document.getElementsByClassName("home-shift");

const __LOWER__     = document.getElementById("home-lower");
const __ANNOUNCE__  = document.getElementById("home-announcement").getElementsByTagName("UL")[0];
const __BULLETIN__  = document.getElementById("home-bulletin").getElementsByTagName("UL")[0];
const __ALERT__     = document.getElementsByClassName("home-alert");
const __ARCHIVE__   = document.getElementById("home-archive");
*/

//========================================
// SWITCH LANGUAGE
//========================================
if (GetLANG() == enumLANG.ENGLISH)
{   // ENGLISH
    $(`#home-announcement > ul`).remove()
    $(`#home-announcement > ol li:not(:first-child)`).remove()
    $(`#home-docs [href*="/ko/"]`).remove()
}
else
{   // KOREAN
    $(`#home-announcement > ol`).remove()
    $(`#home-announcement > ul li:not(:first-child)`).remove()
    $(`#home-docs [href*="/en/"]`).remove()
}

//========================================
// DOCS: MINIMUM 3-COLUMN
//========================================
const widthDocs = Math.round($(`.home-docs-tile`).parent().outerWidth(true) * 3)  // 845px
const marginDocs = $(`.home-docs-tile`).parent().outerWidth(true) - $(`.home-docs-tile`).width()
var resizeDocs = function() {
    if ($(`.home-docs-group ul`).width() < widthDocs) {
        $(`.home-docs-tile`).width(($(`.home-docs-group ul`).width() - (marginDocs * 3))/3)
        $(`.home-docs-tile`).height($(`.home-docs-tile`).width())
    }
}; resizeDocs()
$(window).resize(resizeDocs)

/*
//========================================
// MAIN: AUTO-SIZING
//========================================
// >> "home-main" SIZING

var mainHeight = (window.innerHeight < parseInt(getComputedStyle(document.body).minHeight) ? parseInt(getComputedStyle(document.body).minHeight) : window.innerHeight)
    - __FOOTER__.offsetHeight - __HEADER__.getBoundingClientRect().height;
__MAIN__.style.height = mainHeight + "px";

// >> GET "home-upper" HEIGHT LIMIT BASED ON BROWSER WINDOW SIZE.
var upperHeight = mainHeight *  parseInt(getComputedStyle(__UPPER__).maxHeight)/100;
__UPPER__.style.height = upperHeight + "px";

// >> GET "home-upper" HEIGHT LIMIT BASED ON BROWSER WINDOW SIZE.
var lowerHeight = mainHeight - upperHeight;
__LOWER__.style.height = lowerHeight + "px";

//alert(mainHeight + " = " + upperHeight + " + " + lowerHeight);

//========================================
// REGISTER: MOUSEOVER
//========================================
// >> FOR EACH BYTE
for (let index = 0; index < __BYTES__.length; index++)
{
    // >> FOR EACH BIT IN THE BYTE
    for (let i = 0; i < __BYTES__[index].children.length; i++) {
        //__BITS__[index].style.transition = "all 0.1s";
        let marginTopBit = parseInt(getComputedStyle(__BITS__[i]).marginTop);
        let marginBottomBit = parseInt(getComputedStyle(__BITS__[i]).marginBottom);
        
        __BYTES__[index].children[i].onmouseover = function() {
            __BYTES__[index].children[i].style.marginBottom = marginTopBit + marginBottomBit + "px";
            __BYTES__[index].children[i].style.marginTop = marginTopBit - marginBottomBit + "px";
        };
    
        __BYTES__[index].children[i].onmouseout = function() {    
            __BYTES__[index].children[i].style.marginBottom = marginBottomBit + "px";
            __BYTES__[index].children[i].style.marginTop = marginTopBit + "px";
        };
    }
}

//========================================
// BULLETIN: POST ALIGNMENT
//========================================
for (let msg = 1; msg < __ANNOUNCE__.children.length; msg++)
{ __ANNOUNCE__.removeChild(__ANNOUNCE__.children[msg]); }

if (__BULLETIN__.children.length > 4)
{
    __BULLETIN__.style.alignContent = "space-between";
}
else if (__BULLETIN__.children.length > 2)
{
    __BULLETIN__.style.alignContent = "baseline";
    for (let post of __BULLETIN__.children)
    { post.style.marginBottom = "1%"; }
}

const InitBulletin = () => {

}; InitBulletin();
*/