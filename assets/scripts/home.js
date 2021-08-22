//========================================
// >> SWITCH LANGUAGE
//========================================
if (config.GetLANG())
{   // KOREAN
    $(`#header-about`).text("소개글")
    $(`#header-post`).text("블로그")

    $(`.home-category`).each(function() {
        if ($(this).attr("lang") == "en") $(this).remove()
    })
}
else
{   // ENGLISH
    $(`#header-about`).text("ABOUT")
    $(`#header-post`).text("BLOG")

    $(`.home-category`).each(function() {
        if ($(this).attr("lang") == "ko") $(this).remove()
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
    if ($(this).children('ul').children().length == 0 && $(this).children('ol').children().length == 0) $(this).remove()
})
