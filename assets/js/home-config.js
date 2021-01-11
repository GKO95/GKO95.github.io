//========================================
// SWITCH LANGUAGE
//========================================
if (GetLANG() == enumLANG.ENGLISH)
{   // ENGLISH
    $(`#home-announce-notice > ul`).remove()
    $(`#home-announce-notice > ol li:not(:first-child)`).remove()
    $(`#home-docs [href*="/ko/"]`).remove()

    $(`.home-docs-group`).each(function() {
        let translate = $(this).find(`a:first-child`).attr("title")
        $(this).find(`.home-docs-header`).text(translate.split(" | ")[0]);
    })
}
else
{   // KOREAN
    $(`#home-announce-notice > ol`).remove()
    $(`#home-announce-notice > ul li:not(:first-child)`).remove()
    $(`#home-docs [href*="/en/"]`).remove()

    $(`.home-docs-group`).each(function() {
        let translate = $(this).find(`a:first-child`).attr("title")
        $(this).find(`.home-docs-header`).text(translate.split(" | ")[0]);
    })

    $(`#home-blog-about`).text("소개글")
    $(`#home-blog-post`).text("블로그")
    $(`#home-blog-repo`).text("리포지터리")
}

//========================================
// ANNOUNCEMENT: SPACING ADJUSTMENT
//========================================
if ($(`#home-announce li`).length > 0) {
    $(`#home-announce`).css({"padding-bottom": "24px", "padding-top": "8px"})
}

$(`.home-blog-button`).first().css("margin-left", "0px")
$(`.home-blog-button`).last().css("margin-right", "0px")