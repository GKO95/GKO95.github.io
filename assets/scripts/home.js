//========================================
// >> SWITCH LANGUAGE
//========================================
if (config.GetLANG())
{   // KOREAN
    $(`#header-about`).text("소개글").attr("title", "소개글");
    $(`#header-post`).text("블로그").attr("title", "블로그");

    $(`#home-notice > a`).attr("title", `알림 | ${$(`#home-notice > a`).attr("title")}`);
    $(`.home-category`).each(function() {
        if ($(this).attr("lang") == "en") $(this).remove();
    });
}
else
{   // ENGLISH
    $(`#header-about`).text("ABOUT").attr("title", "About");
    $(`#header-post`).text("BLOG").attr("title", "Blog");

    $(`#home-notice > a`).attr("title", `Notice | ${$(`#home-notice > a`).attr("title")}`);
    $(`.home-category`).each(function() {
        if ($(this).attr("lang") == "ko") $(this).remove();
    })
}

//========================================
// >> NAVIGATION CONTROL
//========================================
$(`#nav-menu`).click(() => {
    $(`#nav-menu`).effect("shake", { direction: "right", times: 3, distance: 4});
})

//========================================
// >> DISABLE STICKY POSITION
//========================================
$(`HEADER`).css("top", "unset")

//========================================
// >> REMOVE EMPTY GROUP
//========================================
$(`.home-category`).each(function() {
    if ($(this).children('ul').children().length == 0 && $(this).children('ol').children().length == 0) $(this).remove();
})
