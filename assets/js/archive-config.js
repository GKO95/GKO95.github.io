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
            hex += value.toString(16)
        })
        return hex.toUpperCase()
    }

    return str;
}

//========================================
// >> FILTER: TAGS
//========================================
const __colorYES__  = (GetTHEME == enumTHEME.LIGHT) ? "rgb(48, 200, 48)" : "rgb(0, 128, 0)";
const __colorNO__   = (GetTHEME == enumTHEME.LIGHT) ? "red" : "red";

const filterTags = () => {
    let __FILTERYES__ = []; let __FILTERNO__  = [];

    for(let tag of document.getElementsByClassName("blog-tag"))
    {
        if (tag.style.backgroundColor == __colorNO__) { __FILTERNO__.push(tag.innerHTML); }
        else if (tag.style.backgroundColor == __colorYES__) { __FILTERYES__.push(tag.innerHTML); }
    }

    for(let post of document.getElementById("blog-list").children)
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

for(let item of document.getElementsByClassName("blog-tag"))
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
