/*========================================
>> FUNCTION: DYNAMIC "BIT" TILE SIZING
========================================*/
const __REG__    = document.getElementById("home-register");
const __BYTES__  = document.getElementsByClassName("home-byte");
const __BITS__   = document.getElementsByClassName("home-bit");
//const idLogo   = document.getElementsByClassName("bit-logo");
const __SHIFTS__ = document.getElementsByClassName("home-shift");

var indexBytes = 0;
var countBytes = 0;
for (let byte of __REG__.children)
{ if (byte.tagName == "UL") {countBytes++;} }

// >> GET "home-upper" HEIGHT LIMIT BASED ON BROWSER WINDOW SIZE.
var upperHeight = window.innerHeight - document.getElementsByTagName("FOOTER")[0].offsetHeight - document.getElementsByTagName("HEADER")[0].offsetHeight;
upperHeight *= parseInt(getComputedStyle(document.getElementById("home-upper")).maxHeight)/100;

const InitRegister = () => {

    let marginReg = parseInt(getComputedStyle(__REG__).marginTop) + parseInt(getComputedStyle(__REG__).marginBottom);
    let paddingReg = parseInt(getComputedStyle(__REG__).paddingTop) + parseInt(getComputedStyle(__REG__).paddingBottom);

    // >> AVAILABLE MAXIMUM BYTE HEIGHT. (REGISTER SIZE IS AUTO-DEFINED: BYTE + MARGIN + PADDING)
    let byteHeight = upperHeight - marginReg - paddingReg; // if upperHeight is 292.5 = 260.5 + 32 (margin, padding) 

    // >> THEORETICAL WIDTH & HEIGHT & LOGO SIZE OF BITS BASED ON BYTE'S "width: 100%".
    let bitLength = __BYTES__[indexBytes].children.length;
    let bitWidth  = Math.floor(__REG__.getBoundingClientRect().width - __SHIFTS__[0].offsetWidth - __SHIFTS__[1].offsetWidth)/bitLength;
    bitWidth -= 2 * (bitLength + 1) // IN-BETWEEN MARGIN
    //alert(byteHeight + " : "+ bitWidth);

    // >> SET BIT WIDTH & HEIGHT & LOGO (BYTE SIZE IS AUTO-DEFINED: BYTE HEIGHT = BIT HEIGHT)
    for (let index = 0; index < bitLength; index++)
    {
        __BITS__[index].style.width = (byteHeight - paddingReg < bitWidth ? byteHeight - paddingReg : bitWidth) + "px";
        __BITS__[index].style.height = (byteHeight - paddingReg < bitWidth ? byteHeight - paddingReg : bitWidth) + "px";
        __BITS__[index].getElementsByTagName("SPAN")[0].style.backgroundSize = (parseInt(__BITS__[index].style.width) - 24) + "px";
    }

    // >> ADJUSTING ARROW LOCATION OF SHIFTING ICONS TO CENTER OF REGISTER
    for (let index = 0; index < 2; index++)
    {
        __SHIFTS__[index].style.height = (byteHeight - paddingReg < bitWidth ? byteHeight - paddingReg : bitWidth) + "px";
        __SHIFTS__[index].style.lineHeight = (byteHeight - paddingReg < bitWidth ? byteHeight - paddingReg : bitWidth) + "px";
    }

}; InitRegister();

//========================================
// FUNCTION: SHIFTING BYTES
//========================================


/*========================================
>> FUNCTION: RESIZE WINDOW
========================================*/
window.addEventListener('resize', event => {
    upperHeight = window.innerHeight - document.getElementsByTagName("FOOTER")[0].offsetHeight - document.getElementsByTagName("HEADER")[0].offsetHeight;
    upperHeight *= parseInt(getComputedStyle(document.getElementById("home-upper")).maxHeight)/100;
    InitRegister();
}); 

/*========================================
>> FUNCTION: MOUSEOVER
========================================*/
for (let index = 0; index < __BYTES__[indexBytes].children.length; index++) {
    //__BITS__[index].style.transition = "all 0.1s";
    let marginTopBit = parseInt(getComputedStyle(document.getElementsByClassName("home-bit")[index]).marginTop);
    let marginBottomBit = parseInt(getComputedStyle(document.getElementsByClassName("home-bit")[index]).marginBottom);
    
    __BYTES__[indexBytes].children[index].onmouseover = function() {
        __BYTES__[indexBytes].children[index].style.marginBottom = marginTopBit + marginBottomBit + "px";
        __BYTES__[indexBytes].children[index].style.marginTop = marginTopBit - marginBottomBit + "px";
    };

    __BYTES__[indexBytes].children[index].onmouseout = function() {    
        __BYTES__[indexBytes].children[index].style.marginBottom = marginBottomBit + "px";
        __BYTES__[indexBytes].children[index].style.marginTop = marginTopBit + "px";
    };
}