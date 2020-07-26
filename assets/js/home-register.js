/*========================================
>> FUNCTION: DYNAMIC "BIT" TILE SIZING
========================================*/
const __REG__    = document.getElementById("home-register");
const __BYTES__  = document.getElementsByClassName("home-byte");
const __BITS__   = document.getElementsByClassName("home-bit");
const __SHIFTS__ = document.getElementsByClassName("home-shift");

// >> BYTE NAVIGATION INDEX
var currIndex = 0;

// >> GET "home-upper" HEIGHT LIMIT BASED ON BROWSER WINDOW SIZE.
var upperHeight = window.innerHeight - document.getElementsByTagName("FOOTER")[0].offsetHeight - document.getElementsByTagName("HEADER")[0].offsetHeight;
upperHeight *= parseInt(getComputedStyle(document.getElementById("home-upper")).maxHeight)/100;

const InitRegister = () => {

    let marginReg = parseInt(getComputedStyle(__REG__).marginTop) + parseInt(getComputedStyle(__REG__).marginBottom);
    let paddingReg = parseInt(getComputedStyle(__REG__).paddingTop) + parseInt(getComputedStyle(__REG__).paddingBottom);

    // >> AVAILABLE MAXIMUM BYTE HEIGHT. (REGISTER SIZE IS AUTO-DEFINED: BYTE + MARGIN + PADDING)
    let byteHeight = upperHeight - marginReg - paddingReg; // if upperHeight is 292.5 = 260.5 + 32 (margin, padding) 

    let bitLength; let bitWidth;
    for (let index = 0; index < __BYTES__.length; index++)
    {
        // >> THEORETICAL WIDTH & HEIGHT & LOGO SIZE OF BITS BASED ON BYTE'S "width: 100%".
        bitLength = __BYTES__[index].children.length;
        bitWidth  = Math.floor(__REG__.getBoundingClientRect().width - __SHIFTS__[0].offsetWidth - __SHIFTS__[1].offsetWidth)/bitLength;
        bitWidth -= 2 * (bitLength + 1) // IN-BETWEEN MARGIN
        //alert(byteHeight + " : "+ bitWidth);

        // >> SET BIT WIDTH & HEIGHT & LOGO (BYTE SIZE IS AUTO-DEFINED: BYTE HEIGHT = BIT HEIGHT)
        for (let i = 0; i < bitLength; i++)
        {
            __BYTES__[index].getElementsByClassName("home-bit")[i].style.width = (byteHeight - paddingReg < bitWidth ? byteHeight - paddingReg : bitWidth) + "px";
            __BYTES__[index].getElementsByClassName("home-bit")[i].style.height = (byteHeight - paddingReg < bitWidth ? byteHeight - paddingReg : bitWidth) + "px";
            __BYTES__[index].getElementsByClassName("home-bit")[i].getElementsByTagName("SPAN")[0].style.backgroundSize = (parseInt(__BITS__[i].style.width) - 24) + "px";
        }

        if (index == currIndex) { __BYTES__[index].style.display = "flex"; }
        else { __BYTES__[index].style.display = "none"; }
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
for (let shift of __SHIFTS__)
{
    shift.addEventListener("click", function() {

        if (shift.id == "shift-left")
        {
            if (currIndex == 0) {currIndex = (__BYTES__.length - 1);}
            else {currIndex--;}
            InitRegister();
        }
        else if (shift.id == "shift-right")
        {
            if (currIndex == (__BYTES__.length - 1)) {currIndex = 0;}
            else {currIndex++;}
            InitRegister();
        }
    });
}

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
// >> FOR EACH BYTE
for (let index = 0; index < __BYTES__.length; index++)
{
    // >> FOR EACH BIT IN THE BYTE
    for (let i = 0; i < __BYTES__[index].children.length; i++) {
        //__BITS__[index].style.transition = "all 0.1s";
        let marginTopBit = parseInt(getComputedStyle(document.getElementsByClassName("home-bit")[i]).marginTop);
        let marginBottomBit = parseInt(getComputedStyle(document.getElementsByClassName("home-bit")[i]).marginBottom);
        
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