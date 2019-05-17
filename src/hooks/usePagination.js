import React from "react"

const calcTotalPages = (items, limit) => {
	let total = Math.ceil(items.length / limit)
	return total > 0 ? total : items.length - 1
}

const usePagination = ({ limit = 4, duration = 1, items = [], currentPage = 1, enabled = true }) => {
	const [state, setState] = React.useState({
		limit,
		currentPage,
		totalPages: calcTotalPages(items, limit),
		items: items.slice(0, limit)
	})

	const setLimit = limit => {
		setState(prev => {
			if (limit === prev.limit) return prev
			const totalPages = calcTotalPages(items, limit)
			const currentPage = totalPages > prev.currentPage ? 1 : prev.currentPage

			return {
				...prev,
				limit,
				totalPages,
				currentPage,
				items: items.slice((currentPage - 1) * limit, limit * currentPage)
			}
		})
	}

	// allows the dev to manually set the current page
	const setCurrentPage = currentPage => {
		setState(prev => {
			return {
				...prev,
				currentPage,
				items: items.slice((currentPage - 1) * prev.limit, prev.limit * currentPage)
			}
		})
	}

	// Re-calculate the total pages if the `items` array length changes or if the limit changes
	React.useEffect(() => {
		setState(prev => ({ ...prev, totalPages: calcTotalPages(items, limit) }))
	}, [items.length, limit])

	// Interval that changes the current page and splices the items
	React.useEffect(() => {
		if (!enabled) return

		const pagination = window.setInterval(() => {
			setState(prev => {
				const currentPage = prev.currentPage === prev.totalPages ? 1 : prev.currentPage + 1

				return {
					...prev,
					currentPage,
					items: prev.limit === Infinity ? items : items.slice((currentPage - 1) * prev.limit, prev.limit * currentPage)
				}
			})
		}, duration * 1000)

		return () => window.clearInterval(pagination)
	}, [duration, enabled])

	return {
		setCurrentPage,
		setLimit,
		items: state.items,
		currentPage: state.currentPage,
		totalPages: state.totalPages
	}
}

export default usePagination
