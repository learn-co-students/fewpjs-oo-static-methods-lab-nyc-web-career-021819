class Formatter {
  static capitalize(string){
    return string.charAt(0).toUpperCase() + string.slice(1)
  }

  static sanitize(string){
    return string.replace(/[^A-Za-z0-9-'\s]+/g, '')
  }

  static titleize(string){
    const exceptions = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from']
    let strArray = string.split(' ').map(word => {
      if (exceptions.includes(word)){
        return word
      } else {
        return this.capitalize(word)
      }
    }).join(' ');
    return this.capitalize(strArray)
  }
}
