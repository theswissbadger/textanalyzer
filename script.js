const textareaEl = document.querySelector('.textarea');
const charactersEl = document.querySelector('.stat__number--characters');
const wordsEl = document.querySelector('.stat__number--words');
const twitterEl = document.querySelector('.stat__number--twitter');
const facebookEl = document.querySelector('.stat__number--facebook');


textareaEl.addEventListener('input', function(){

    
    const lengthOfString = textareaEl.value. length;
    const twitterCharsLeft = 280 - lengthOfString;
    const facebookCharsLeft = 2200 - lengthOfString;

    // split liefert ein array mit den Wörtern!
    let numberOfWords = textareaEl.value.split(' ').length;
    //Wenn kein Wort geschrieben wurde, muss der Counter auf Null gestellt werden!
    if(textareaEl.value.length === 0){
        numberOfWords = 0;
    }


    if(twitterCharsLeft < 0){
        twitterEl.classList.add('stat__number--limit');
    }else{
        twitterEl.classList.remove('stat__number--limit');
    }

    if(facebookCharsLeft < 0){
        facebookEl.classList.add('stat__number--limit');
    }else{
        facebookEl.classList.remove('stat__number--limit');
    }

    charactersEl.innerHTML = lengthOfString;
    twitterEl.innerHTML = twitterCharsLeft;
    facebookEl.innerHTML = facebookCharsLeft
    wordsEl.innerHTML = numberOfWords;
    

})