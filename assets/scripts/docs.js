//========================================
// >> SWITCH LANGUAGE
//========================================
if (config.GetLANG(config.LANG.ENGLISH))
{   // ENGLISH

}
else
{   // KOREAN

}

//========================================
// >> MAIN: WORD-BREAK
//========================================
const breakCode = () => {
    $(`code`).each(function() {
        if ($(this).width() > ($(this).parent().width() / 4)) $(this).css("word-break", "break-all")
        else $(this).css("word-break", "initial")
    })
}; breakCode()
$(window).resize(breakCode)

//========================================
// >> MAIN: IMAGE RESIZE
//========================================
const imageSize = () => {
    let width = $(`body`).width() < (1200 - (24 * 2)) ? ($(`body`).width() - (48 * 2)) : (1200 - (24 * 2))
    $(`article img`).each(function() {
        $(this).css({
            "max-width": `calc(${width}px - ${$(`article img`).css("border-width")} * 2)`
        }).parent().css({"text-align": "center", "width": "100%"})
        if( $(this).next('center').length == 0 ) {
             $(`<center style="font-weight: bold;">${$(this).attr("alt")}</center>`).insertAfter(this)
        }
    })
}; imageSize();
$(window).resize(imageSize)

//========================================
// >> MENU: CONFIGURATION
//========================================
$(`#toc-button`).click(function() {
    $(this).hide("fast")
    $(`#toc-container`).fadeIn()

})

$(`#toc-main`).click(function(event) {event.stopPropagation();})
const closeTOC = () => {
    // $('#toc-container').one('scroll', false).one('mousewheel', false).one('touchmove',false)
    $('#toc-container').fadeOut("fast")
    $(`#toc-button`).show("fast")
}

$(`#toc-container`).click(closeTOC)
$(`#toc-close`).click(closeTOC)
$(document).keydown(function(e) {
    if (e.keyCode == 27 && $(`#toc-container`).is(":visible")) {
        closeTOC();
    }
})

//========================================
// >> TOC: INITIALIZE
//========================================
$(`#toc-options-region`).prepend(`<a class="toc-option" id="toc-home" href="/" title="Return home" style="background-image: url(/images/icons/icon-home.png)"></a>`)
$(`#toc-options-region`).prepend(`<a class="toc-option" id="toc-source" title="View source" style="background-image: url(/images/icons/icon-source.png)"></a>`)
$(`#toc-source`).click(function() {
    window.open(`https://github.com/GKO95/GKO95.github.io/blob/master${location.pathname.replace("/","/_").slice(0,-1)}.md`)
})

$(`article > :header`).each(function() {
    let headerTag = $(this).prop("tagName")
    let headerURL = $(this).attr("id")
    let headerTxt = $(`<span style="cursor: pointer;">${$(this).html()}</span>`).click(function() {
        location.href = `#${headerURL}`
        $('#toc-container').fadeOut("fast")
        $(`#toc-button`).show("fast")
    })
    $(`#toc-content`).append($(`<${headerTag}></${headerTag}>`).append(headerTxt))
})

//========================================
// >> RENDERING
//========================================
document.addEventListener("readystatechange", function () {
    if (document.readyState == "complete") {
        $(`#toc-button`).delay(250).show("slow")
    }
}); 