//========================================
// >> SWITCH LANGUAGE
//========================================
if (config.GetLANG(config.LANG.ENGLISH))
{
    // ENGLISH
}
else
{
    // KOREAN
}

//========================================
// >> NOTICE SECTION SEPARATOR
//========================================
const NoticeSeparator = () => {

    let children = $('main').children(":first").is('ASIDE') ? $('main').children().slice(1) : $('main').children();
    for (let counter = 0, checkpoint = 0; counter < children.length; counter++) {
        if ($(children[counter]).next().is("H1") || $(children[counter]).next().prop("tagName") == undefined)
        {
            children.slice(checkpoint, ++counter).wrapAll(`<div class="pages" ${$(children[counter - 1]).next().is("H1") ? 'style="margin-bottom: 16px;"' : ''} ><article class="notice-contents content"></article></div>`);
            checkpoint = counter;
        }
    }
    
}; NoticeSeparator();
