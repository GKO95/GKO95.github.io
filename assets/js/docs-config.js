//========================================
// SWITCH LANGUAGE
//========================================
$(`#nav-lang`).click(function() {
    if (GetLANG() == enumLANG.ENGLISH) {
        window.location = $(location).attr('pathname').replace("/ko/","/en/")
    } else {
        window.location = $(location).attr('pathname').replace("/en/","/ko/")
    }
})

//========================================
// >> MAIN: IMAGE WRAPPER FOR HTML
//========================================
$(`main [id*="-content"] img`).each(function() {
    $(this).css({
        "max-width": `calc(${$(`main [id*="-content"]`).width()}px - ${$(`main [id*="-content"] img`).css("border-width")} * 2)`
    }).parent().css({"text-align": "center", "width": "100%"})
    $(`<center style="font-weight: bold;">${$(this).attr("alt")}</center>`).insertAfter(this)
})

//========================================
// >> MENU: CONFIGURATION
//========================================
//$(`main`).append(`<div id="TOC"></div>`)
