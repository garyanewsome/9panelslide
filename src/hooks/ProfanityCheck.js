const profanities = require("./Profanities/profanities.json")

export const ProfanityCheck = str => {
	return profanities.includes(str)
}
