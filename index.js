class Formatter {
  //add static methods here

  static capitalize(string) {
    return string[0].toUpperCase() + string.slice(1)
  }

  static sanitize(string) {
    return string.replace(/[^\w\s'-]/gi, '')
  }

  // static titleize(string) {
  //
  //   let result = []
  //   let arrayOfWords = string.split( " " )
  //   let exceptions = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'and']
  //
  //   for (let n = 0; n < arrayOfWords.length; n++) {
  //     if (n == 0) {
  //       result.push(this.capitalize(arrayOfWords[n]))
  //     } else {
  //       if (exceptions.includes(arrayOfWords[n])) {
  //         result.push(arrayOfWords[n])
  //       } else {
  //         result.push(this.capitalize(arrayOfWords[n]))
  //       }
  //     }
  //     return result.join( " " )
  //   }
  //
  // }

  static titleize( sentence ) {
  let exceptions = [ 'the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from' ]
  let result = [];
  let arrayOfWords = sentence.split( " " )
  for ( let n = 0; n < arrayOfWords.length; n++ ) {
    if ( n == 0 ) {
      result.push( this.capitalize( arrayOfWords[ n ] ) )
    } else {
      if ( exceptions.includes( arrayOfWords[ n ] ) ) {
        result.push( arrayOfWords[ n ] )
      } else {
        result.push( this.capitalize( arrayOfWords[ n ] ) )
      }
    }

  }
  return result.join( " " );
  }
}
//
//
//
