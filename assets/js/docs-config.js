//========================================
// >> SWITCH LANGUAGE
//========================================
$(`#docs #nav-lang`).click(function() {
    if ($(location).attr('pathname').indexOf("/ko/") >= 0) {
        window.location = $(location).attr('pathname').replace("/ko/","/en/")
    } else if ($(location).attr('pathname').indexOf("/en/") >= 0) {
        window.location = $(location).attr('pathname').replace("/en/","/ko/")
    } else {    }
})

if (GetLANG() == enumLANG.ENGLISH)
{   // ENGLISH
}
else
{   // KOREAN
    $(`#comment-tags > span`).text("태그: ")
    $(`#comment-header > h4`).text("댓글쓰기")
    $(`.comment-info > p`).text("부적절하거나 문제를 야기할 수 있는 내용은 관리자의 판단하에 경고없이 삭제될 수 있습니다.")
}

//========================================
// >> DOCS: REDIRECT
//========================================
if (window.sessionStorage.getItem("REDIR.FLAG") == "1")
{
    var _redirTitle = window.sessionStorage.getItem("REDIR.HREF")
    $(`#docs-main [id*="-content"]`).prepend($(`<div class="notice" id="notice-redirected"></div>`))

    window.sessionStorage.setItem("REDIR.FLAG", `0`)
    window.sessionStorage.setItem("REDIR.HREF", ``)
}
else {
    if ($(`#docs-main [id*="-content"] > :not(div,style,script,section)`).length == 0) {
        window.sessionStorage.setItem("REDIR.FLAG", `1`)
        window.sessionStorage.setItem("REDIR.HREF", `${$(`#nav-center > span`).text()}`)
    
        if ($(location).attr('pathname').indexOf("/ko/") >= 0) {
            window.location = $(location).attr('pathname').replace("/ko/","/en/")
        } else if ($(location).attr('pathname').indexOf("/en/") >= 0) {
            window.location = $(location).attr('pathname').replace("/en/","/ko/")
        } else {    }
    }
}

//========================================
// >> MAIN: NOTICE
//========================================
$(`.notice`).each(function() {
    let descriptionText, descriptionID
    switch($(this).attr("id").split("-")[1])
    {
        case "expand":
            descriptionID = "description-expand"
            if (GetLANG() == enumLANG.ENGLISH) {
                descriptionText = "This document will be expanded."
            } else {
                descriptionText = "본 내용은 곧 확장될 예정입니다."
            }
            break
        case "redirected":
            descriptionID = "description-redirected"
            if (GetLANG() == enumLANG.ENGLISH) {
                descriptionText = `Redirected from: ${_redirTitle}`
            } else {
                descriptionText = `넘어온 문서: ${_redirTitle}`
            }
            break
        default:
            descriptionID = "description-default"
            if (GetLANG() == enumLANG.ENGLISH) {
                descriptionText = ""
            } else {
                descriptionText = ""
            }
            break
    }

    $(`<section></section>`).attr({
        "class": "notice-description",
        "id": `${descriptionID}`
    }).insertAfter(this).text(descriptionText)
    $(this).mouseover(function() {
        $(`#${descriptionID}`).show()
    }).mouseout(function() {
        $(`#${descriptionID}`).hide()
    })
})

//========================================
// >> MAIN: WORD-BREAK
//========================================
const breakCode = () => {
    $(`code`).each(function() {
        if ($(this).width() > $(`main`).width()) $(this).css("word-break", "break-all")
        else $(this).css("word-break", "initial")
    })
}; breakCode()
$(window).resize(breakCode)

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
switch($(`body`).attr("id"))
{
    default:
    case "docs":
    case "post":
        $(`#toc-options-region`).prepend(`<a class="toc-option" id="toc-home" href="/" title="Return home" style="background-image: url(/assets/img/res/icon-home.png)"></a>`)
        $(`#toc-options-region`).prepend(`<a class="toc-option" id="toc-source" title="View source" style="background-image: url(/assets/img/res/icon-source.png)"></a>`)
        $(`#toc-source`).click(function() {
            window.open(`https://github.com/GKO95/GKO95.github.io/blob/master${location.pathname.replace("/","/_").slice(0,-1)}.md`)
        })
        
        $(`main [id*="-content"] > :header`).each(function() {
            let headerTag = $(this).prop("tagName")
            let headerURL = $(this).attr("id")
            let headerTxt = $(`<span style="cursor: pointer;">${$(this).html()}</span>`).click(function() {
                location.href = `#${headerURL}`
                $('#toc-container').fadeOut("fast")
                $(`#toc-button`).show("fast")
            })
            $(`#toc-content`).append($(`<${headerTag}></${headerTag}>`).append(headerTxt))
        })
        break;
    case "repo":
        $(`#toc-options-region`).prepend(`<a class="toc-option" id="toc-home" href="/" title="Return home" style="background-image: url(/assets/img/res/icon-home.png)"></a>`)
        $(`#toc-options-region`).prepend(`<a class="toc-option" id="toc-source" title="View source" style="background-image: url(/assets/img/res/icon-source.png)"></a>`)
        $(`#toc-source`).click(function() {
            window.open(`https://gko95.github.io${location.pathname}`)
        })
        break;
}
