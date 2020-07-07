const __HEADER__  = document.getElementsByTagName("HEADER")[0];
const __NAV__     = document.getElementsByTagName("NAV")[0];
const __TITLE__   = document.getElementById("title").children[0];
const __MAIN__    = document.getElementsByTagName("MAIN")[0];
const __FOOTER__  = document.getElementsByTagName("FOOTER")[0];

//========================================
// FUNCTION: DYNAMIC TITLE SIZING
//========================================
const _CSS_borderWidthTitle = parseInt(getComputedStyle(__TITLE__).borderWidth);
const _CSS_fontSizeTitle    = parseFloat(getComputedStyle(__TITLE__).fontSize) + 14.5 + _CSS_borderWidthTitle * 2;
const _CSS_spacingTitle     = parseInt(getComputedStyle(__TITLE__).letterSpacing);

const TitleSize = () => {
    let widthBorder  = parseInt(__TITLE__.style.borderWidth);
    let spacingTitle = parseInt(__TITLE__.style.letterSpacing);

    let heightHeader = __HEADER__.getBoundingClientRect().height;
    let heightNav = __NAV__.getBoundingClientRect().bottom;

    // SHRINKING HEADER
    if (heightHeader - heightNav < _CSS_fontSizeTitle + 16) {  // VERTICAL MARGIN: 12px
        if (isNaN(spacingTitle))
        {
            __TITLE__.style.borderWidth = 0 + "px";
            __TITLE__.style.letterSpacing = 5 + "px";
        }
        else if (spacingTitle!=_CSS_spacingTitle - 5)
        {   
            let animate = setInterval(function() {

                if (widthBorder == _CSS_borderWidthTitle - 8 
                    && spacingTitle == _CSS_spacingTitle - 5) 
                {clearInterval(animate);}
                
                if (widthBorder > _CSS_borderWidthTitle - 8) widthBorder--;
                if (spacingTitle > _CSS_spacingTitle - 5) spacingTitle--;
    
                __TITLE__.style.borderWidth = widthBorder + "px";
                __TITLE__.style.letterSpacing = spacingTitle + "px";

            }, 25);
        } 
    }
    // EXPANDING HEADER
    else if (heightHeader - heightNav >= _CSS_fontSizeTitle + 16) {  // VERTICAL MARGIN: 12px
        if (isNaN(spacingTitle))
        {
            __TITLE__.style.borderWidth = _CSS_borderWidthTitle + "px";
            __TITLE__.style.letterSpacing = _CSS_spacingTitle + "px";
        }
        else if (spacingTitle!=_CSS_spacingTitle)
        {
            let animate = setInterval(function() {

                if (widthBorder == _CSS_borderWidthTitle 
                    && spacingTitle == _CSS_spacingTitle) 
                {clearInterval(animate);}

                if (widthBorder < _CSS_borderWidthTitle) widthBorder++;
                if (spacingTitle < _CSS_spacingTitle) spacingTitle++;

                __TITLE__.style.borderWidth = widthBorder + "px";
                __TITLE__.style.letterSpacing = spacingTitle + "px";
            }, 25);
        }
    }
}; TitleSize();

//========================================
// FUNCTION: RESIZE WINDOW
//========================================
window.addEventListener('resize', event => {
    TitleSize();
    MenuSize();
});