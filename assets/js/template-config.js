const __xHEADERx__  = document.getElementsByTagName("HEADER")[0];
const __xMAINx__    = document.getElementsByTagName("MAIN")[0];
const __xFOOTERx__  = document.getElementsByTagName("FOOTER")[0];

/*========================================
>> AUTO-FIT MAIN
========================================*/
const MainSize = () => {
    if (__xMAINx__.getBoundingClientRect().bottom + __xFOOTERx__.offsetHeight < window.innerHeight)
    {
        __xMAINx__.style.height = (window.innerHeight - 
                (__xHEADERx__.getBoundingClientRect().bottom
                + __xFOOTERx__.offsetHeight)
                ) + "px";
    }
}; MainSize();

/*========================================
>> FUNCTION: RESIZE WINDOW
========================================*/
window.addEventListener('resize', event => {
    MainSize();
});