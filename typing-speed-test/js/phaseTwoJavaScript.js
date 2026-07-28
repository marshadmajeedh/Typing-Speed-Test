import{textAreaContainer,wordTracker,charTracker,incrementChar,incrementWord,resetChar} from './phaseOneJavaScript.js';

//phase 2
//Attach a keydown event listener to document — do NOT use an <input> field
document.addEventListener("keydown",(event) =>{
    //Track a currentIndex variable — compare each keypress against targetChars[currentIndex]
    let currentWord = textAreaContainer.children[wordTracker]
    const wordLength = currentWord.children.length

    //keep null to check if user still typing this word
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
                activeSpan.classList.remove('cursor')       
                currentWord.classList.add('error')
                resetChar()
                incrementWord()

                const nextWord = textAreaContainer.children[wordTracker]
                if(nextWord && nextWord.children[0]){
                    nextWord.children[0].classList.add('cursor')
                }
            }
        }

    }
    //This else handles regular typing 
    else {
       if(activeSpan){
            activeSpan.classList.remove('cursor')
            incrementChar()
            const nextSpan = currentWord.children[charTracker]
            if(nextSpan){
                nextSpan.classList.add('cursor')
            }
        }
    }

})