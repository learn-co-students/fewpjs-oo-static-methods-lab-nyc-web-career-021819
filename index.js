class Formatter {
  //add static methods here

  static capitalize(obj) {
    if (typeof obj !== 'string') return ''
    return obj.charAt(0).toUpperCase() + obj.slice(1)
  }

  static sanitize(obj) {
    return obj.replace(/[^A-Za-z0-9 '-]/g, '' );
  }

  static titleize(obj) {
    let exceptions = [ 'the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from' ]
    let words = obj.match(/\b\w+\b/g)
    // obj = obj.split(' ');
    // obj = obj.map((item) => {return Formatter.capitalize(item)})

    // return obj.join(' ');
    return words.map((e,i) => exceptions.indexOf(e) == -1 || i === 0 ? e[0].toUpperCase()+e.slice(1) : e).join(" ");
  }
}
