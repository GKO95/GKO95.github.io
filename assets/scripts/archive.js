//========================================
// >> SWITCH LANGUAGE
//========================================
if (GetLANG() == enumLANG.ENGLISH){
    // ENGLISH
}
else {
    // KOREAN
    switch($(`main > div`).attr("id").split("-")[0])
    {
        case "blog":
            $(`#nav-center > span`).text("블로그")
            $(`#blog-caption`).text("태그:")
            break;
        case "repo":
            $(`#nav-center > span`).text("리포지터리")
            break;
    }
}

//========================================
// >> PARSER: RGB COLOR
//========================================
const parseColor = (str) => {

    if (str[0] == "#") return str.toUpperCase()
    else if (str.toLowerCase().substring(0,3) == "rgb")
    {
        let hex = "#"
        $.each(str.substring(3).slice(1,-1).split(","), function(index, value) {
            let temp = $.trim(parseInt(value).toString(16))
            if (temp.length < 2) temp = "0" + temp
            hex += temp
        })
        return hex.toUpperCase()
    }
    return str;
}

//========================================
// >> FILTER: TAGS
//========================================
const __colorINCLUDE__  = (GetTHEME() == enumTHEME.LIGHT) ? "#1CC11C" : "#008000";
const __colorEXCLUDE__   = (GetTHEME() == enumTHEME.LIGHT) ? "#FF0000" : "#FF0000";

const filterTags = (color) => {
    let filterINCLUDE = []
    let filterEXCLUDE  = []

    $(`.blog-tag`).each(function() {
        switch(parseColor($(this).css("background-color")))
        {
            case __colorEXCLUDE__:
                filterEXCLUDE.push($(this).text())
                break;
            case __colorINCLUDE__:
                filterINCLUDE.push($(this).text())
                break;
            default:
                break;
        }
    })

    $(`#blog-list > li`).each(function() {
        let element = $(this)
        $(this).show()
        $.each(filterINCLUDE, function(index, value) {
            if(!element.attr("class").split(" ").includes(value)) {
                element.hide()
                return
            }
        })
        $.each(filterEXCLUDE, function(index, value) {
            if(element.attr("class").split(" ").includes(value)) {
                element.hide()
                return
            }
        })
    })
}

$(`.blog-tag`).each(function() {
    $(this).click(function() {
        switch(parseColor($(this).css("background-color")))
        {
            case __colorINCLUDE__:
                $(this).css("background-color", __colorEXCLUDE__)
                break;
            case __colorEXCLUDE__:
                $(this).css("background-color", "")
                break;
            default:
                $(this).css("background-color", __colorINCLUDE__)
                break;
        }
        filterTags(parseColor($(this).css("background-color")))
    })

    if ($(this).text() == window.location.hash)
    {
        $(this).css("background-color", __colorINCLUDE__)
        filterTags()
    }
})
