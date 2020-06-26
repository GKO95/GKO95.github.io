/*==============================================================================================================
>> DECLARE DOM & GET SIZE
==============================================================================================================*/
const main  = document.getElementById("home-main");
const aisle = document.getElementById("home-aisle");
const shelf = document.getElementById("home-shelf");
const books = document.getElementsByClassName("home-book");

var screenW = window.screen.width;
var screenH = window.screen.height;

// BOOK SIZE: PERCENTAGE (NORMALIZED)
const bookW  = 0.4;
const bookH  = 0.8;

// SHELF SIZE: PIXEL
var shelfW = shelf.offsetWidth;
var shelfH = shelf.offsetHeight;

/*==============================================================================================================
>> DECLARE DOM & GET SIZE
==============================================================================================================*/
var index = 0;
var length = 0;

// POSITION: PERCENTAGE (NORMALIZED)
const elementY = (1 - bookH)* 65/100;

// POSITION: PIXEL
var elementTOP = elementY * shelfH;

const volumeInfo = [
    0.5,    // MID  [% norm]
    0.0,    // DEG  [degree]
    1.0,    // SLX  [% norm]
    1.0,    // SLY  [% norm]
    3       // zIndex
];

const volumeNear = [
    0.55,   // MID  [% norm]
    12.,    // DEG  [degree]
    0.4,    // SLX  [% norm]
    0.1,    // SLY  [% norm]
    1       // zIndex
];

const volumeAway = [
    0.05,   // MID  [% norm]
    3.0,    // DEG  [degree]
    0.0,    // SLX  [% norm]
    0.1,    // SLY  [% norm]
    1       // zIndex
];

/*==============================================================================================================
>> INITIALIZATION
==============================================================================================================*/
const InitBooks = () => {
    length = books.length;

    let z = length;
    for (let book of books)
    {
        book.style.width  = bookW * shelfW + "px";
        book.style.height = bookH * shelfH + "px";

        book.style.top    = elementTOP     + "px";
    
        book.style.zIndex = z--;
    }
}

var volumes = [];
const InitShelf = () => {
    
    InitBooks();
    
    if (volumes.length < length)
    {
        for (let i = 0; i < length; i++)
        {
            let temp = volumeInfo;
            if (i == index)
            {
                volumes.push(temp);
                continue;
            }
    
            // ELEMENTWISE ADDITION
            temp = temp.map(function(ref, idx){
                if (idx < 2) _TEMP = ref + volumeNear[idx];
                else _TEMP = ref - volumeNear[idx];
                return _TEMP;
            })
            if (Math.abs(i - index) == 1)
            {
                volumes.push(temp);
                continue;
            }
    
            // ELEMENTWISE ADDITION
            temp = temp.map(function(ref, idx){
                if (idx < 2) _TEMP = ref + volumeAway[idx];
                else _TEMP = ref - volumeAway[idx];
                return _TEMP;
            })
            volumes.push(temp);
        }
    }

    try // EXCEPTION HANDLER: JUST TO PREVENT ERROR NOTIFICATION.
    {
        let count = 0;
        for (let volume of volumes)
        {
            books[count].style.left = Math.round((1 - bookW) * volume[0] * shelfW) + "px";
            books[count].style.transform = "rotateY("+volume[1]+"deg) scale("+volume[2]+","+volume[3]+")";
            books[count].style.zIndex = volume[4];
    
            count++;
        }
    }
    catch(err) { }
}

InitShelf();    

/*==============================================================================================================
>> FUNCTION: MOUSE SCROLL
==============================================================================================================*/
const indexPrefix = (_REF, _ADD, _DIST) => {
    let _TEMP = new Array(5);

    // ABSOLUTE
    if (_DIST > 0) {    // NEXT
        _TEMP[0] = _REF[0] - _ADD[0];   // POS
        _TEMP[1] = _REF[1] - _ADD[1];   // DEG

        _TEMP[2] = _REF[2] - _ADD[2];   // SLX
        _TEMP[3] = _REF[3] - _ADD[3];   // SLY
        _TEMP[4] = _REF[4] - _ADD[4];   // ZDX
    }
    else {              // PREV
        _TEMP[0] = _REF[0] + _ADD[0];   // POS
        _TEMP[1] = _REF[1] + _ADD[1];   // DEG

        _TEMP[2] = _REF[2] + _ADD[2];   // SLX
        _TEMP[3] = _REF[3] + _ADD[3];   // SLY
        _TEMP[4] = _REF[4] + _ADD[4];   // ZDX
    }

    return _TEMP;
}

const indexSuffix = (_REF, _ADD, _DIST) => {
    let _TEMP = new Array(5);

    // ABSOLUTE
    if (_DIST > 0) {    // NEXT
        _TEMP[0] = _REF[0] - _ADD[0];   // POS
        _TEMP[1] = _REF[1] - _ADD[1];   // DEG
        
        _TEMP[2] = _REF[2] + _ADD[2];   // SLX
        _TEMP[3] = _REF[3] + _ADD[3];   // SLY
        _TEMP[4] = _REF[4] + _ADD[4];   // ZDX
    }
    else {              // PREV
        _TEMP[0] = _REF[0] + _ADD[0];   // POS
        _TEMP[1] = _REF[1] + _ADD[1];   // DEG

        _TEMP[2] = _REF[2] - _ADD[2];   // SLX
        _TEMP[3] = _REF[3] - _ADD[3];   // SLY
        _TEMP[4] = _REF[4] - _ADD[4];   // ZDX
    }

    return _TEMP;
}

const OnScroll = (x) => {
    
    // SCROLL DOWN -> NEXT
    if (x > 0 && index < length - 1)
    {
        let count = 0;  // index of "volume" within "volumes"
        for (let volume of volumes)
        {
            switch(count)
            {
            case index - 1:
                volumes[count] = indexPrefix(volume, volumeAway, x);
                break;
            case index:
                volumes[count] = indexPrefix(volume, volumeNear, x);
                break;
            case index + 1:
                volumes[count] = indexSuffix(volume, volumeNear, x);
                break;
            case index + 2:
                volumes[count] = indexSuffix(volume, volumeAway, x);
                break;
            default:
                ;
            }
            count++;
        }
        index++;
    }
    // SCROLL UP -> PREV
    else if (x < 0 && index > 0)
    {
        let count = 0;  // index of "volume" within "volumes"
        for (let volume of volumes)
        {
            switch(count)
            {
            case index - 2:
                volumes[count] = indexPrefix(volume, volumeAway, x);
                break;
            case index - 1:
                volumes[count] = indexPrefix(volume, volumeNear, x);
                break;
            case index:
                volumes[count] = indexSuffix(volume, volumeNear, x);
                break;
            case index + 1:
                volumes[count] = indexSuffix(volume, volumeAway, x);
                break;
            default:
                ;
            }
            count++;
        }
        index--;
    }
    // OUT OF RANGE
    else {return;}

    try // EXCEPTION HANDLER: JUST TO PREVENT ERROR NOTIFICATION.
    {
        let count = 0;
        for (let volume of volumes)
        {
            books[count].style.left = Math.round((1 - bookW) * volume[0] * shelfW) + "px";
            books[count].style.transform = "rotateY("+volume[1]+"deg) scale("+volume[2]+","+volume[3]+")";
            books[count].style.zIndex = volume[4];
    
            count++;
        }
    }
    catch(err) { }
}

main.addEventListener("wheel", event => 
    {
        // NO SCROLL FOR LENGTH = 1
        if (length == 1) {return;}

        OnScroll(event.deltaY/100)
    }
)

/*==============================================================================================================
>> FUNCTION: RESIZE WINDOW
==============================================================================================================*/
window.addEventListener('resize', event =>
    {
        // PIXEL
        screenW = window.screen.width;
        screenH = window.screen.height;

        shelfW = shelf.offsetWidth;
        shelfH = shelf.offsetHeight;

        elementTOP  = elementY * shelfH;

        InitShelf();
    }
)