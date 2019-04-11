class Formatter {
  static capitalize(string){
  return string[0].toUpperCase()+string.slice(1)
}

static sanitize(string){
  return string.replace(/[^A-Za-z0-9-'-\s]+/g, '')
}

  static titleize(string) {
    const sentenceArray = string.split(" ")
    const badWords = ["the", "a", "an", "but", "of", "and", "for", "at", "by", "from"]
    Formatter.capitalize(sentenceArray[0])
    const newSent = sentenceArray.map(word => {
        if (!badWords.includes(word)) {
          return Formatter.capitalize(word)
        } else {
          return word
        }
    }).join(' ')
    return Formatter.capitalize(newSent[0]) + newSent.slice(1)
  }
}