//========================================
// SWITCH LANGUAGE
//========================================
if (GetLANG() == enumLANG.ENGLISH)
{   // ENGLISH
    $(`#home-announce-notice > ul`).remove()
    $(`#home-announce-notice > ol li:not(:first-child)`).remove()
    $(`#home-docs [href*="/ko/"]`).remove()
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

    $(`#home-blog-post-more`).text("게시글 목록")
}

//========================================
// ANNOUNCEMENT: SLIDE DOWN TRANSITION
//========================================
document.addEventListener("readystatechange", function () {
    if (document.readyState == "complete") {
        $(`#home-announce`).slideDown(600, "swing")
    }
})

//========================================
// ANNOUNCEMENT: SPACING ADJUSTMENT
//========================================
if ($(`#home-announce li`).length > 0) {
    $(`#home-announce`).css("padding-bottom", "16px")
}

//========================================
// DOCS: MINIMUM 3-COLUMN
//========================================
const widthDocs = Math.round($(`.home-docs-tile`).parent().outerWidth(true) * 3)  // 845px
const marginDocs = $(`.home-docs-tile`).parent().outerWidth(true) - $(`.home-docs-tile`).width()
function resizeDocs() {
    if ($(`.home-docs-group ul`).width() < widthDocs) {
        $(`.home-docs-tile`).width(($(`.home-docs-group ul`).width() - (marginDocs * 3))/3)
        $(`.home-docs-tile`).height($(`.home-docs-tile`).width())
    }
}; resizeDocs()
$(window).resize(resizeDocs)
