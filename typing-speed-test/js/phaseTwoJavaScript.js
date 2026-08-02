import{textAreaContainer,wordTracker,charTracker,incrementChar,incrementWord,resetChar,decrementChar,decrementWord,setChar,intervalID,minute,second,startTimer,stopTimer,typed,setTyped} from './phaseOneJavaScript.js';

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

    if(activeSpan){
        if (wordTracker === 0 && charTracker === 0){
            startTimer()
        }
    }

    //if these are pressed do nothing
    if (event.key === 'Alt' || event.key === 'Shift' || event.key === 'CapsLock' || event.key === 'Control') return

    //this handles the backspace
    if (event.key === 'Backspace'){
        
        if (activeSpan){
            if (wordTracker === 0 && charTracker === 0){
                return
            }
            
            if (wordTracker > 0 && charTracker === 0){

                activeSpan.classList.remove('cursor')
                decrementWord()
                let currentW = textAreaContainer.children[wordTracker]
                setChar(currentW.children.length-1)

                let currentSpan = currentW.children[charTracker]
                if(currentSpan){
                    if(currentSpan.classList.contains('error')) currentSpan.classList.remove('error')
                    if(currentSpan.classList.contains('correct')) currentSpan.classList.remove('correct')
                    if(currentSpan.classList.contains('cursor')) currentSpan.classList.remove('cursor')

                    currentSpan.classList.add('cursor')
                }
                return
            }

            if (charTracker < wordLength){
                decrementChar()
                let previousCharSpan = currentWord.children[charTracker]
            
                if(previousCharSpan.classList.contains('error')) previousCharSpan.classList.remove('error')
                if(previousCharSpan.classList.contains('correct')) previousCharSpan.classList.remove('correct')
                if(previousCharSpan.classList.contains('cursor')) previousCharSpan.classList.remove('cursor')

                previousCharSpan.classList.add('cursor')

                if(activeSpan.classList.contains('cursor')) activeSpan.classList.remove('cursor')
                return
            }
        }

        if(charTracker === wordLength){
            setChar(wordLength-1)
            let currentSpan = currentWord.children[charTracker]
            
            if(currentSpan.classList.contains('error')) currentSpan.classList.remove('error')
            if(currentSpan.classList.contains('correct')) currentSpan.classList.remove('correct')
            if(currentSpan.classList.contains('cursor')) currentSpan.classList.remove('cursor')

            currentSpan.classList.add('cursor')
            
            return
        }

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
                activeSpan.classList.add('error')
            
                resetChar()
                incrementWord()

                const nextWord= textAreaContainer.children[wordTracker]

                if (nextWord && nextWord.children[0]){
                    nextWord.children[0].classList.add('cursor')
                }

            }
        }

    }
    //This else handles regular typing 
    else {

       if(activeSpan && activeSpan.textContent === event.key){

            activeSpan.classList.remove('cursor')
            activeSpan.classList.add('correct')
            incrementChar()

            const nextSpan = currentWord.children[charTracker]

            if(nextSpan){
                nextSpan.classList.add('cursor')
            }

        } else if (activeSpan && activeSpan.textContent !== event.key) {

            activeSpan.classList.remove('cursor')       
            activeSpan.classList.add('error')
          
            incrementChar()

            const nextChar = currentWord.children[charTracker]

            if(nextChar){
                nextChar.classList.add('cursor')
            }
        }
    }

    if (wordTracker === textAreaContainer.children.length-1 && charTracker === currentWord.children.length){
        stopTimer()
    }

})