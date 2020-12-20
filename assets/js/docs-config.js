//========================================
// SWITCH LANGUAGE
//========================================
$(`#docs #nav-lang`).click(function() {
    if ($(location).attr('pathname').indexOf("/ko/") >= 0) {
        window.location = $(location).attr('pathname').replace("/ko/","/en/")
    } else if ($(location).attr('pathname').indexOf("/en/") >= 0) {
        window.location = $(location).attr('pathname').replace("/en/","/ko/")
    } else {    }
})

//========================================
// >> MAIN: IMAGE RESIZE
//========================================
const imageSize = () => {
    $(`main [id*="-content"] img`).each(function() {
        $(this).css({
            "max-width": `calc(${$(`main [id*="-content"]`).width()}px - ${$(`main [id*="-content"] img`).css("border-width")} * 2)`
        }).parent().css({"text-align": "center", "width": "100%"})
        if( $(this).next('center').length == 0 ) {
             $(`<center style="font-weight: bold;">${$(this).attr("alt")}</center>`).insertAfter(this)
        }
    })
}; imageSize()
$(window).resize(imageSize)

//========================================
// >> TOC
//========================================
$(`#toc-options-region`).append(`
    <a class="toc-option" id="toc-source" title="View source" style="background-image: url(/assets/images/res/icon-source.png)"></a>
`).click(function() {
    window.open(`https://github.com/GKO95/GKO95.github.io/blob/master${location.pathname.replace("/","/_").slice(0,-1)}.md`)
})

$(`main [id*="-content"] > :header`).each(function() {
    let headerTag =  $(this).prop("tagName")
    $(`#toc-content`).append(`<${headerTag}><span style="cursor: pointer;">${$(this).html()}</span></${headerTag}>`)
})
