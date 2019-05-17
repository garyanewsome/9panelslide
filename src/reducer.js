import payloadToValidState from "./helpers/payloadToValidState"

export const isInsideDashboard = !!(window.frameElement && window.frameElement.getAttribute("data-preview"))

const getEnvData = () => {
	if (process.env.NODE_ENV !== "production") {
		return require("../api/sample-data.json")
	}

	return window.__IWDATA__
}

export const initialState = getEnvData()
console.log(initialState, "init state")
export default (state = initialState, action) => {
	switch (action.type) {
		case "__dashboardLivePreviewChange":
			const changes = payloadToValidState(action)

			return { ...state, ...changes }
		default:
			return state
	}
}
