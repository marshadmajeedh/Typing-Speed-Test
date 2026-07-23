import{textAreaContainer,wordTracker,charTracker,incrementChar,incrementWord,resetChar} from './phaseOneJavaScript';

//phase 2
//Attach a keydown event listener to document — do NOT use an <input> field
document.addEventListener("keydown",(event) =>{
    //Track a currentIndex variable — compare each keypress against targetChars[currentIndex]
    let currentWord = textAreaContainer.children[wordTracker]
    const wordLength = currentWord.children.length

    //keep null to check id user still typing this word
    let activeSpan = null

    if(charTracker < wordLength){
        activeSpan = currentWord.children[charTracker]
    }

    if (event.key === ' '){
        if (charTracker === wordLength){
            if(activeSpan){
                activeSpan.classList.remove('cursor')
            }
            resetChar()
            incrementWord()

            const nextWord = textAreaContainer.children[wordTracker]
            if(nextWord && nextWord.children[0]){
                nextWord.children[0].classList.add('cursor')
            }

        } else {
            if(activeSpan){
                activeSpan.classList.add('error')
            }
        }

    }
    //This else handles regular typing 
    else {
       if(activeSpan){
            activeSpan.classList.remove('cursor')
            if (activeSpan.textContent !== event.key){
                activeSpan.classList.add('error')
            }

            incrementChar()
            const nextSpan = currentWord.children[charTracker]
            if(nextSpan){
                nextSpan.classList.add('cursor')
            }
        }
    }

})