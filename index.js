class Formatter {
  static capitalize(string) {
   let firstLetter = string.charAt(0).toUpperCase()
   return (firstLetter + string.slice(1))
  }
  static sanitize(string) {
   let sanitizedString = string.replace(/[`~!@#$%^&*()_|+\=?;:",.<>\{\}\[\]\\\/]/gi, '');
   return sanitizedString
  }
  static titleize(string) {
   let array = string.split(" ")
   let firstWord = Formatter.capitalize(array[0])
   const exceptionsArray = ["the","a","an" ,"but", "of", "and" , "for" , "at" ,"by","from"]

  let mapArray = array.slice(1).map(word => {
    if (exceptionsArray.includes(word)){
      return word
    }
    else {
       return Formatter.capitalize(word)
    }
  })
  let newArray = firstWord + " " + mapArray.join(" ")
  return newArray
  }

}
