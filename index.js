class Formatter {
  static capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1)
  }

  static sanitize(string) {
    return string.replace(/[^A-Za-z0-9-' ]/g, '');
  }

  static titleize(string) {
    let stringArr = string.split(' ')
    let excludedWords = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from']
    return stringArr.map( (word, index) => {
      if (excludedWords.includes(word) && index !== 0) {
        return word
      } else {
        return word.charAt(0).toUpperCase() + word.slice(1)
      }
    }).join(' ')
  }


}
