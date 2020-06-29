/*========================================
>> FUNCTION: DYNAMIC "BIT" TILE SIZING
========================================*/
const idByte = document.getElementById("home-byte");
const idBit  = document.getElementsByClassName("home-bit");
const idLogo = document.getElementsByClassName("bit-logo");

const InitRegister = () => {
    let bitLength = idByte.children.length;
    if (idByte.offsetWidth <=((idByte.offsetHeight - 24) * bitLength)
        + ( 8 * (bitLength+1)) ) {
        for (let index = 0; index < idByte.children.length; index++)
        {
            idBit[index].style.width
                = Math.round((idByte.offsetWidth - (8 * (bitLength + 1)))/bitLength) + "px";
            idBit[index].style.height = idBit[index].style.width
            idLogo[index].style.backgroundSize = (parseInt(idBit[index].style.width) - 24) + "px";
        }
        return;
    }

    for (let index = 0; index < idByte.children.length; index++)
    {
        idBit[index].style.height = (idByte.offsetHeight - 24) + "px";
        idBit[index].style.width = idBit[index].style.height;
        idLogo[index].style.backgroundSize = (parseInt(idBit[index].style.height) - 24) + "px";
    }
}; InitRegister();

/*========================================
>> FUNCTION: RESIZE WINDOW
========================================*/
window.addEventListener('resize', event => {
    InitRegister();
}); 

/*========================================
>> FUNCTION: RESIZE WINDOW
========================================*/
for (let index = 0; index < idByte.children.length; index++) {
    //idBit[index].style.transition = "all 0.1s";
    
    idByte.children[index].onmouseover = function() {
        idByte.children[index].style.marginBottom = "12px";
    };

    idByte.children[index].onmouseout = function() {
        idByte.children[index].style.marginBottom = "0px";
    };
}