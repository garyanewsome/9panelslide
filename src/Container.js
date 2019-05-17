import React from "react"
import { ThemeProvider } from "styled-components"

import { DataContext } from "./DataProvider"
import App from "./App"

const Container = () => {
  console.log(React.useContext(DataContext))
  const { data } = React.useContext(DataContext)
  return <App items={data} />
}

export default Container
