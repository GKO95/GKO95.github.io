/*==============================================================================================================
>> FUNCTION: DYNAMIC TITLE SIZING
==============================================================================================================*/
const header = document.getElementById("home-header");
const nav    = document.getElementById("home-nav");
const title  = document.getElementById("home-title").children[0];

const InitTitle = () => {

    let _border  = parseInt(title.style.borderWidth);
    let _spacing = parseInt(title.style.letterSpacing);

    if (header.offsetHeight - nav.offsetHeight < 100 + (8 * 2) + 2) {
        if (isNaN(_spacing))
        {
            title.style.borderWidth = 0 + "px";
            title.style.letterSpacing = 5 + "px";
        }
        else if (_spacing!=5)
        {   
            let animate = setInterval(function() {

                if (_border == 0 && _spacing == 5) 
                {clearInterval(animate);}
                
                if (_border > 0) _border--;
                if (_spacing > 5) _spacing--;
    
                title.style.borderWidth = _border + "px";
                title.style.letterSpacing = _spacing + "px";

            }, 25);
        } 

    }
    else if (header.offsetHeight - nav.offsetHeight >= 100 + (8 * 2) + 2)
    {
        if (isNaN(_spacing))
        {
            title.style.borderWidth = 8 + "px";
            title.style.letterSpacing = 10 + "px";
        }
        else if (_spacing!=10)
        {
            let animate = setInterval(function() {

                if (_border == 8 && _spacing == 10) 
                {clearInterval(animate);}

                if (_border < 8) _border++;
                if (_spacing < 10) _spacing++;

                title.style.borderWidth = _border + "px";
                title.style.letterSpacing = _spacing + "px";
            }, 25);
        }
    }
}

InitTitle();

/*==============================================================================================================
>> FUNCTION: RESIZE WINDOW
==============================================================================================================*/
window.addEventListener('resize', event =>
    { InitTitle(); }
)