const __HEADER__   = document.getElementsByTagName("HEADER")[0];
const __FOOTER__   = document.getElementsByTagName("FOOTER")[0];
const __MAIN__     = document.getElementsByTagName("MAIN")[0];
const __NAV__      = document.getElementsByTagName("NAV")[0];
const __CONTENT__  = document.getElementById("post-content");

const __mMAIN__    = document.getElementById("menu-main");
const __mCONTENT__ = document.getElementById("menu-content");
const __mOPTION__  = document.getElementById("menu-option");

//========================================
// >> MAIN: IMAGE WRAPPER FOR HTML
//========================================
$(`#post-content img`).each(function() {
    $(this).css({
        "max-width": `calc(${$(`#post-content`).width()}px - ${$(`#post-content img`).css("border-width")} * 2)`,
    }).parent().css("text-align", "center")
    $(`<center style="font-weight: bold;">${$(this).attr("alt")}</center>`).insertAfter(this)
})

//========================================
// >> FUNCTION: RESIZE IMAGES
//========================================
const ImageResize = () => {

    for (let element of __CONTENT__.children)
    {
        try
        {
            if (element.children[0].tagName == "IMG")
            {
                if (element.children[0].getBoundingClientRect().width
                    > __CONTENT__.getBoundingClientRect().width)
                {
                    element.children[0].style.width = "100%";
                }
                else
                {
                    element.style.textAlign = "center";
                    element.children[0].style.height = "100%";
                }
            }
        } catch{ }
    }

}; 

document.addEventListener("readystatechange", function() {
if (document.readyState == "complete") {

    //ImageResize();

}});
