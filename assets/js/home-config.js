//========================================
// SWITCH LANGUAGE
//========================================
if (GetLANG() == enumLANG.ENGLISH)
{   // ENGLISH
    $(`#home-blog-notice > ul`).remove()
    $(`#home-blog-notice > ol li:not(:first-child)`).remove()
    $(`#home-docs [href*="/ko/"]`).remove()
}
else
{   // KOREAN
    $(`#home-blog-notice > ol`).remove()
    $(`#home-blog-notice > ul li:not(:first-child)`).remove()
    $(`#home-docs [href*="/en/"]`).remove()

    $(`.home-docs-group`).each(function() {
        let translate = $(this).find(`a:first-child`).attr("title")
        $(this).find(`.home-docs-header`).text(translate.split(" | ")[0]);
    })

    $(`#home-blog-post-more`).text("게시글 목록")
}

//========================================
// BLOG: SLIDE DOWN TRANSITION
//========================================

document.addEventListener("readystatechange", function () {
    $(`#home-blog`).slideDown(600, "swing")
    //$(`#home-blog`).slideDown(600, "swing", function() {
    //    $(`.home-blog-post`).first().delay(200).slideDown(100, "linear", function nextPost() {
    //        $(this).next(`.home-blog-post`).slideDown(100, "linear", nextPost)
    //    })
    //})
})


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
