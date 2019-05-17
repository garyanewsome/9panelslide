import React, { useEffect, createContext, useReducer } from "react"

import reducer, { initialState, isInsideDashboard } from "./reducer"

export const Context = React.createContext({})
export const DataContext = createContext({ ...initialState })
export const DataConsumer = DataContext.Consumer

const DataProvider = ({ children }) => {
	const [state, dispatch] = useReducer(reducer, { ...initialState, ...window._IWDATA_ })

	useEffect(() => {
		const handleLivePreview = ({ data }) => {
			dispatch({ type: data.type, payload: data.payload })
		}

		window.addEventListener("message", handleLivePreview)

		return () => {
			window.removeEventListener("message", handleLivePreview)
		}
	}, [])

	const providerValue = { ...state }

	return <DataContext.Provider value={providerValue}>{children}</DataContext.Provider>
}

export default DataProvider
