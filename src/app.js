import React from "react"

import styled from "styled-components"

import Panels from "./components/Panels"

const Template = styled.div`
  width: 1920px;
  height: 1080px;
  // display: flex;
  // flex-direction: row;
  // align-items: center;
  // justify-content: center;
  overflow: hidden;
`

const InnerContainer = styled.div`
  width: 5760px;
  height: 3240px;
`

const App = ({ items, ...props }) => {
  if (!items) {
    return <Template />
  }

  return (
    <Template>
      <InnerContainer>
        <Panels />
      </InnerContainer>
    </Template>
  )
}

export default App
