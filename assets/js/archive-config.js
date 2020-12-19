//========================================
// SWITCH LANGUAGE
//========================================
if (GetLANG() == enumLANG.ENGLISH){
    // ENGLISH
}
else {
    // KOREAN
    $(`#archive-caption`).text("태그:")
    $(`#nav-center > span`).text("게시글 목록")
}   

const __colorYES__  = (GetTHEME == enumTHEME.LIGHT) ? "rgb(48, 200, 48)" : "rgb(0, 128, 0)";
const __colorNO__   = (GetTHEME == enumTHEME.LIGHT) ? "red" : "red";

const filterTags = () => {
    let __FILTERYES__ = []; let __FILTERNO__  = [];

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
