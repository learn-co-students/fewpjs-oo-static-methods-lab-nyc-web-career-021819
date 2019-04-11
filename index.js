class Formatter {
	//add static methods here
	static capitalize(string) {
		return string.charAt(0).toUpperCase() + string.slice(1)
	}

	static sanitize(string) {
		return string.replace(/[^A-Za-z0-9 '-]/g, "")
	}

	static titleize(string) {
		let array = string.split(" ")
		let firstWord = Formatter.capitalize(array[0])
		const exceptionsArray = [
			"the",
			"a",
			"an",
			"but",
			"of",
			"and",
			"for",
			"at",
			"by",
			"from"
		]
		let mapArray = array.slice(1).map(word => {
			if (exceptionsArray.includes(word)) {
				return word
			} else {
				return Formatter.capitalize(word)
			}
		})
		let newArray = firstWord + " " + mapArray.join(" ")
		return newArray
	}
}
