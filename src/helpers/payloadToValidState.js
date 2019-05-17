const getTheme = payload => {
	const theme = { ...payload.theme }

	if (!payload.theme || !payload.theme.colors) return theme

	for (let color in payload.theme.colors) {
		theme[color] = payload.theme.colors[color].value
	}

	return theme
}

const getSlide = slide => {
	if (!slide) return

	if (!slide.title || slide.title.length === 0) {
		slide.title = "Placeholder Text"
	}

	return slide
}

const payloadToValidState = payload => {
	return { theme: getTheme(payload), slide: getSlide(payload.slide) }
}

export default payloadToValidState
