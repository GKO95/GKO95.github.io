//========================================
// >> SWITCH LANGUAGE
//========================================
if (config.GetLANG(config.LANG.ENGLISH))
{   // ENGLISH
    var txtFigure = "Figure";
}
else
{   // KOREAN
    var txtFigure = "그림";
}

//========================================
// >> IMAGE RESIZE
//========================================
const imageSize = () => {
    let countImg = 0;
    $(`article img`).each(function() {
        $(this).css({
            "max-width": `calc(${$(`article`).width()}px - ${$(`article img`).css("border-width")} * 2)`,
            "cursor": "pointer",
        }).parent().css({"text-align": "center", "width": "100%"})
        if(!$(this).parent().is('TD') && $(this).attr("alt") && $(this).next('center').length == 0 ) {
             $(`<center style="font-weight: bold;">${txtFigure} ${++countImg}. ${$(this).attr("alt")}</center>`).insertAfter(this)
        }
        $(this).dblclick(function() { 
            window.open(`https://raw.githubusercontent.com/GKO95/GKO95.github.io/archive${$(this).attr("src")}`)
        }).show();
    })
}; imageSize();
$(window).resize(imageSize);

//========================================
// >> OPEN NEW TAB
//========================================
const openNewTab = () => {
    $(`article a`).each(function() {
        if( $(this).attr("href").indexOf("://") != -1 ) {
            $(this).attr("target","_blank");
        }
    })
}; openNewTab();

//========================================
// >> DOCUMENT PROCESSING
//========================================
if ($(`#docs-content > :first-child`).is('H1')) {
    $(`#docs-content > :first-child`).css("margin-top", "24px");
}

const breakCode = () => {
    $(`code`).each(function() {
        if ($(this).width() > ($(this).parent().width() / 4)) $(this).css("word-break", "break-all");
        else $(this).css("word-break", "initial");
    })
}; breakCode();
$(window).resize(breakCode);

//========================================
// >> MENU CONFIGURATION
//========================================
$(`#docs-menu`).click((event) => event.stopPropagation());
const docsMenuOpen  = () => {
    $(`#docs-mask`).fadeIn(400, () => {
        $(`#docs-menu`).slideDown();
    })
    // $('body').css({height: '100%', overflow: 'hidden'});
}
const docsMenuClose = () => {
    $(`#docs-mask`).fadeOut(400, () => {
        $(`#docs-menu`).slideUp();
    })
    // $('body').css({height: 'auto', overflow: 'auto'});
}
$(`#nav-menu`).click(() => {
    if($(`#docs-mask`).length == 0) {
        $(`#nav-menu`).effect("shake", { direction: "right", times: 3, distance: 4});
    }
    else {
        if ($(`#docs-mask`).first().is(":hidden")) docsMenuOpen();
        else docsMenuClose();
    }
})
$(`#docs-mask`).click(() => docsMenuClose());
$(document).keydown((e) => {
    if (e.keyCode == 27 && $(`#docs-mask`).is(":visible")) {
        $(`#docs-mask`).fadeOut(400, () => docsMenuClose());
    }
})

//========================================
// >> MENU INSTANTIATION
//========================================
$(`#sub-source`).click(function() {
    window.open(`https://github.com/GKO95/GKO95.github.io/blob/archive${location.pathname.replace("/","/_")}.md`);
    docsMenuClose();
})
$(`#sub-related`).click(function() {
    if ($("#sub-related").attr("href") === undefined) $(this).effect("shake", { direction: "right", times: 3, distance: 4});
})

//$(`#docs-toc`).append($(`<div id="toc-sub" style="height: ${$(`#docs-related`).length > 0 ? "calc(100% - (64px + 16px))" : "100%"}; overflow: auto;"></div>`))
$(`article#docs-content > :header`).each(function() {
    let headerTag = $(this).prop("tagName");
    if ((headerTag == 'H1') || (headerTag == 'H2') || (headerTag == 'H3'))
    {
        let headerURL = $(this).attr("id");
        let headerTxt = $(`<span style="cursor: pointer;">${$(this).html()}</span>`).click(function() {
            location.href = `#${headerURL}`;
            docsMenuClose();
        })
        $(`#docs-toc`).append($(`<${headerTag}></${headerTag}>`).append(headerTxt));
    }
})
$(`#docs-toc > h1`).each(function() {
    if ($(this).next().is("h1") || $(this).is(":last-child")) $(this).after("<h3>...</h3>");
})

if ($(`#docs-toc > :first-child`).is('H1')) {
    $(`#docs-toc > :first-child`).css("margin-top", "24px");
}
