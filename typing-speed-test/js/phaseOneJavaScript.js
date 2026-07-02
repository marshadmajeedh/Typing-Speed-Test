const wordBank = [
  "the", "of", "to", "and", "a", "in", "is", "it", "you", "that",
  "he", "was", "for", "on", "are", "as", "with", "his", "they", "i",
  "at", "be", "this", "have", "from", "or", "one", "had", "by", "word",
  "but", "not", "what", "all", "were", "we", "when", "your", "can", "said",
  "there", "use", "an", "each", "which", "she", "do", "how", "their", "if",
  "will", "up", "other", "about", "out", "many", "then", "them", "these", "so",
  "some", "her", "would", "make", "like", "him", "into", "time", "has", "look",
  "two", "more", "write", "go", "see", "number", "no", "way", "could", "people",
  "my", "than", "first", "water", "been", "call", "who", "oil", "its", "now",
  "find", "long", "down", "day", "did", "get", "come", "made", "may", "part",
  "over", "new", "sound", "take", "only", "little", "work", "know", "place", "year",
  "live", "me", "back", "give", "most", "very", "after", "thing", "our", "just",
  "name", "good", "sentence", "man", "think", "say", "great", "where", "help", "through",
  "much", "before", "line", "right", "too", "mean", "old", "any", "same", "tell",
  "boy", "follow", "came", "want", "show", "also", "around", "form", "three", "small",
  "set", "put", "end", "does", "another", "well", "large", "must", "big", "even",
  "such", "because", "turn", "here", "why", "ask", "went", "kind", "need", "house",
  "picture", "try", "us", "again", "change", "off", "play", "spell", "air", "away",
  "animal", "house", "point", "page", "letter", "mother", "answer", "found", "study", "still",
  "learn", "should", "america", "world", "high", "every", "near", "add", "food", "between",
  "own", "below", "country", "plant", "last", "school", "father", "keep", "tree", "never"
];

//function that picks 30 random words and joins them
function generateLine() {

    const shuffled = [...wordBank].sort(() => 0.5 - Math.random())
    
    return shuffled.slice(0,30).join(" ")
}

let textAreaContainer = document.querySelector(".text-area-container")

//This function Renders each word as a <span>, each character as a nested<span></span>
function returnWord(){
  const wordsArray = generateLine().split(/\s+/);

  let div = document.createElement('div')
  div.classList.add("child-text-area")

  let htmlString = wordsArray.map((word,index) => {

    const charactersFromWord = returnCharacterFromAWord(word,index)

    return `<span class="word-span">${charactersFromWord}</span>`
  }).join(" ")

  div.innerHTML = htmlString
  textAreaContainer.appendChild(div)

}

//This function Renders each character in a word as <span>
function returnCharacterFromAWord(word,wordIndex){
 
  let htmlCharacter = [...word].map((character,index) => {

    const randomColor = generateRandomColor()
    const customStyle = `color: ${randomColor}; font-size: 4rem`
  
    const isFirstLetterOfFirstWord = (wordIndex === 0 && index === 0)
    const cursorClass = isFirstLetterOfFirstWord ? "cursor" : ""

    return `<span class="${cursorClass}" style="${customStyle}">${character}</span>`

  }).join("")

  return htmlCharacter
}

//This function will generate random colors for child div element using(hue,Saturation,and Lightness)
function generateRandomColor(){

  const hue = Math.floor(Math.random() * 360)

  return `hsl(${hue},70%,50%)`
}

returnWord()