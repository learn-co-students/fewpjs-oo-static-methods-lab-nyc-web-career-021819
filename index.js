class Formatter {
  //add static methods here
  static capitalize(string) {
    return string[0].toUpperCase() + string.slice(1)
  }

  static sanitize(string) {
    return string.replace(/[^\w,'\s-]|_/g, '')
  }

  static titleize(string) {
    let newString = [];
    let regex = /the|a|an|but|of|and|for|at|by|from/;
    let dontcapitalizeWords = ["the","a","an","but","of","and","for","at","by","from"]
    let wordsArr = string.split(" ");
    let titleized = wordsArr.forEach( word => {
      if (word === wordsArr[0]) {
        let newWord = word[0].toUpperCase() + word.slice(1)
        newString.push(newWord)
      } else if (dontcapitalizeWords.includes(word) === false)  {
        let newWord = word[0].toUpperCase() + word.slice(1)
        newString.push(newWord)
      } else {
        newString.push(word)
      }
    })
    
    return newString.join(" ")
  }
}


// Write a method static titleize that takes in a string and capitalizes all words in a 
// sentence except the, a, an, but, of, and, for, at, by, and from; and always capitalizes the first word.