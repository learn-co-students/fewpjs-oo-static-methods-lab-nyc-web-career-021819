class Formatter {
  //add static methods here

  static capitalize(string){
    return string[0].toUpperCase() + string.slice(1)
  }
  static sanitize(string){
    return string.replace(/[^A-Za-z0-9- ']+/g, '')
  }

  static titleize(string){
    const stringArray = string.split(" ")
    const firstWord = this.capitalize(stringArray[0])
    const badStringArray = ["the", "a", "an", "but", "of", "and", "for", "at", "by", "from"]
    const capString = stringArray.slice(1).map(string => shouldICapitalize(string) ? this.capitalize(string) : string).join(" ")
    return firstWord + " " + capString
    function shouldICapitalize(string){
      return !(badStringArray.indexOf(string) > -1)
    }
  }
}
