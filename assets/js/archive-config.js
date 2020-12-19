
$(`#archive-caption`).text(`${(GetLANG == enumLANG.ENGLISH) ? "TAGS:" : "태그:"}`)
document.styleSheets[0].insertRule(`#archive #archive-list a { color: ${(GetTHEME == enumTHEME.LIGHT) ? "black" : "white"}; }`);
document.styleSheets[0].insertRule(`#archive-tags { border-color: ${(GetTHEME == enumTHEME.LIGHT) ? "rgb(216, 216, 216)" : "rgb(24, 24, 24)"}; }`);
document.styleSheets[0].insertRule(`#archive-tags code { color: ${(GetTHEME == enumTHEME.LIGHT) ? "black" : "white"}; background-color: ${(GetTHEME == enumTHEME.LIGHT) ? "rgb(208, 208, 208)" : "rgb(48, 48, 48)"}; }`);
$(`#archive-tags`).css({
    "background-color" : `${(GetTHEME == 'Light') ? "rgb(232, 232, 232)" : "rgb(16, 16, 16)"}`
})

const __colorYES__  = (GetTHEME == enumTHEME.LIGHT) ? "rgb(48, 200, 48)" : "rgb(0, 128, 0)";
const __colorNO__   = (GetTHEME == enumTHEME.LIGHT) ? "red" : "red";

const filterTags = (item) => {
    const __TAGNAME__ = item.innerHTML;
    let __FILTERYES__ = []; let __FILTERNO__  = [];

    /*
    $(`.archive-tag`).each(function(index) {
        if ($(this).css("background-color") === __colorNO__) { __FILTERNO__.push($(this).text())}
        else if ($(this).css("background-color") === __colorYES__) { __FILTERYES__.push($(this).text())}
    })

    $(`.archive-list`).each(function(index) {
        $(this).css("display", "")

        for(let tag of __FILTERYES__)
        {
            if(!$(this).attr("class").split(" ").includes(tag))
            { $(this).css("display", "none"); break;}
        }

        for(let tag of __FILTERNO__)
        {   
            if(!$(this).attr("class").split(" ").includes(tag))
            { $(this).css("display", "none"); break;}
        }
    })
    */

    for(let tag of document.getElementsByClassName("archive-tag"))
    {
        if (tag.style.backgroundColor == __colorNO__) { __FILTERNO__.push(tag.innerHTML); }
        else if (tag.style.backgroundColor == __colorYES__) { __FILTERYES__.push(tag.innerHTML); }
    }

    for(let post of document.getElementById("archive-list").children)
    {
        post.style.display = "";

        for(let tag of __FILTERYES__)
        {
            if(!post.getAttribute("class").split(" ").includes(tag))
            { post.style.display = "none"; break;}
        }

        for(let tag of __FILTERNO__)
        {
            if(post.getAttribute("class").split(" ").includes(tag))
            { post.style.display = "none"; break;}
        }
    }
}

/*
$(`.archive-tag`).each(function(index) {
    $(this).click(function() {
        switch($(this).css("background-color"))
        {
            case __colorNO__    : $(this).css("background-color", ""); break;
            case __colorYES__   : $(this).css("background-color", __colorNO__); break;
            default             : $(this).css("background-color", __colorYES__); break;
        } filterTags($(this));
    })

    if ($(this).text() == window.location.hash)
    {
        $(this).css("background-color", __colorYES__)
        filterTags($(this).get(0))
    }
})
*/

for(let item of document.getElementsByClassName("archive-tag"))
{   
    item.addEventListener("click", ()=>{
        switch(item.style.backgroundColor)
        {
            case __colorNO__    : item.style.backgroundColor = ""; break;
            case __colorYES__   : item.style.backgroundColor = __colorNO__; break;
            default             : item.style.backgroundColor = __colorYES__; break;
        } filterTags(item);
    });
    
    if (item.innerHTML == window.location.hash)
    {
        item.style.backgroundColor = __colorYES__;
        filterTags(item);
    }
}