//========================================
// >> SWITCH LANGUAGE
//========================================
if (config.GetLANG())
{   // KOREAN
    $(`#home-announce-notice > ol`).remove()
    $(`#home-announce-notice > ul li:not(:first-child)`).remove()
    $(`#home-docs [href*="/en/"]`).remove()

    $(`.home-docs-group`).each(function() {
        if ($(this).attr("lang") == "en") $(this).remove()
        if ($(this).attr("category") == "ETC") 
        {
            $(this).children("section").text("정리자료")
            $(this).children("ul").children().each(function() {
                if ($(this).attr("lang") == "en") $(this).remove()
            })
        }
    })

    $(`#home-blog-about`).text("소개글")
    $(`#home-blog-post`).text("블로그")
    $(`#home-blog-forum`).text("포럼")
}
else
{   // ENGLISH
    $(`#home-announce-notice > ul`).remove()
    $(`#home-announce-notice > ol li:not(:first-child)`).remove()
    $(`#home-docs [href*="/ko/"]`).remove()

    $(`.home-docs-group`).each(function() {
        if ($(this).attr("lang") == "ko") $(this).remove()
        if ($(this).attr("category") == "ETC") 
        {
            $(this).children("section").text("Documents")
            $(this).children("ul").children().each(function() {
                if ($(this).attr("lang") == "ko") $(this).remove()
            })
        }
    })

    $(`#home-blog-about`).text("About")
    $(`#home-blog-post`).text("Blog")
    $(`#home-blog-forum`).text("Forum")
}

//========================================
// >> REMOVE EMPTY GROUP
//========================================
$(`.home-docs-group`).each(function() {
    if ($(this).children('ul').children().length == 0 && $(this).children('ol').children().length == 0) $(this).remove()
})

//========================================
// >> SPACING ADJUSTMENT
//========================================
if ($(`#home-announce li`).length == 0) {
    $(`#home-announce`).remove()
}

$(`.home-blog-button`).first().css("margin-left", "0px")
$(`.home-blog-button`).last().css("margin-right", "0px")