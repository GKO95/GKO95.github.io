//========================================
// >> SWITCH LANGUAGE
//========================================
if (config.GetLANG(config.LANG.ENGLISH))
{   // ENGLISH
    var txtFigure = "Figure"
    //$(`#docs-related-header`).text("See Also")
}
else
{   // KOREAN
    var txtFigure = "그림"
    //$(`#docs-related-header`).text("관련 게시글")
}

//========================================
// >> IMAGE RESIZE
//========================================
const imageSize = () => {
    $(`article img`).each(function(index) {
        $(this).css({
            "max-width": `calc(${$(`article`).width()}px - ${$(`article img`).css("border-width")} * 2)`
        }).parent().css({"text-align": "center", "width": "100%"})
        if( $(this).next('center').length == 0 ) {
             $(`<center style="font-weight: bold;">${txtFigure} ${index + 1}. ${$(this).attr("alt")}</center>`).insertAfter(this)
        }
        $(this).show()
    })
}; imageSize();
$(window).resize(imageSize)

//========================================
// >> REDUCE MARGIN IF FIRST CHILD IS H1
//========================================
if ($(`.docs-content > :first-child`).is('H1')) {
    $(`.docs-content > :first-child`).css("margin-top", "24px")
}

//========================================
// >> WORD-BREAK
//========================================
const breakCode = () => {
    $(`code`).each(function() {
        if ($(this).width() > ($(this).parent().width() / 4)) $(this).css("word-break", "break-all")
        else $(this).css("word-break", "initial")
    })
}; breakCode()
$(window).resize(breakCode)

//========================================
// >> MENU: CONFIGURATION
//========================================
// $(`#toc-button`).show("slow").click(function() {
//     $(this).hide("fast")
//     $(`#toc-container`).fadeIn()
// })

// $(`#toc-main`).click(function(event) {event.stopPropagation();})
// const closeTOC = () => {
//     // $('#toc-container').one('scroll', false).one('mousewheel', false).one('touchmove',false)
//     $('#toc-container').fadeOut("fast")
//     $(`#toc-button`).show("fast")
// }

// $(`#toc-container`).click(closeTOC)
// $(`#toc-close`).click(closeTOC)
// $(document).keydown(function(e) {
//     if (e.keyCode == 27 && $(`#toc-container`).is(":visible")) {
//         closeTOC();
//     }
// })

//========================================
// >> TOC: INITIALIZE
//========================================
// $(`#toc-options-region`).prepend(`<a class="toc-option" id="toc-home" href="/" title="Return home" style="background-image: url(/images/icons/icon-home.png)"></a>`)
// $(`#toc-options-region`).prepend(`<a class="toc-option" id="toc-source" title="View source" style="background-image: url(/images/icons/icon-source.png)"></a>`)
// $(`#toc-source`).click(function() {
//     window.open(`https://github.com/GKO95/GKO95.github.io/blob/master${location.pathname.replace("/","/_").slice(0,-1)}.md`)
// })

// $(`#toc-content`).append($(`<div id="toc-sub" style="height: ${$(`#docs-related`).length > 0 ? "calc(100% - (64px + 16px))" : "100%"}; overflow: auto;"></div>`))
// $(`article > :header`).each(function() {
//     let headerTag = $(this).prop("tagName")
//     if ((headerTag == 'H1') || (headerTag == 'H2') || (headerTag == 'H3'))
//     {
//         let headerURL = $(this).attr("id")
//         let headerTxt = $(`<span style="cursor: pointer;">${$(this).html()}</span>`).click(function() {
//             location.href = `#${headerURL}`
//             $('#toc-container').fadeOut("fast")
//             $(`#toc-button`).show("fast")
//         })
//         $(`#toc-content > #toc-sub`).append($(`<${headerTag}></${headerTag}>`).append(headerTxt))
//     }
// })

// $(`#toc-content > #toc-sub > h1`).each(function() {
//     if ($(this).next().is("h1") || $(this).is(":last-child")) $(this).after("<h3>...</h3>")
// })

// if ($(`#docs-related`).length > 0)
// {
//     $(`#toc-content`).append($(`
//         <section id="toc-related" style="display: flex; justify-content: center; border-radius: 8px; margin-top: 16px; font-size: 24px; text-align: center; cursor: pointer; height: 64px">
//             <span style="align-self: center;">${config.GetLANG() ? "관련 게시글" : "See Also"}</span>
//         </section>
//     `).click(function() {
//         $('html, body').scrollTop( $(`#docs-related`).offset().top );
//         $('#toc-container').fadeOut("fast")
//         $(`#toc-button`).show("fast")
//     }))
// }
