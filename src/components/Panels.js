import React, { useState, useEffect } from "react"

import styled from "styled-components"

const data = require("../../api/sample-data.json")

const colors = [
  "red",
  "orange",
  "yellow",
  "green",
  "blue",
  "indigo",
  "violet",
  "teal",
  "lime"
]

const Template = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
`

const Panel = styled.div`
  position: relative;
  width: 1920px;
  height: 1080px;
`

const Overlay = styled.div`
  padding: 32px;
  position: absolute;
  top: 0;
  left: 0;
  width: 1920px;
  height: 1080px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 3em;
`

const Panels = () => {
  const [index, setIndex] = useState(1)

  useEffect(() => {
    let timer = setInterval(() => {
      setIndex(Index => (Index === 9 ? 1 : Index + 1))
    }, 3000)

    return () => clearInterval(timer)
  }, [])

  useEffect(() => {
    const el = document.getElementById("panelContainer")
    switch (index) {
      case 1:
        el.style.transition = "transform 2s ease"
        el.style.transform = "translate(0, 0)"
        break
      case 2:
        el.style.transition = "transform 2s ease"
        el.style.transform = "translateX(-1920px)"
        break
      case 3:
        el.style.transition = "transform 2s ease"
        el.style.transform = "translateX(-3840px)"
        break
      case 4:
        el.style.transition = "transform 2s ease"
        el.style.transform = "translateY(-1080px)"
        break
      case 5:
        el.style.transition = "transform 2s ease"
        el.style.transform = "translate(-1920px, -1080px)"
        break
      case 6:
        el.style.transition = "transform 2s ease"
        el.style.transform = "translate(-3840px, -1080px)"
        break
      case 7:
        el.style.transition = "transform 2s ease"
        el.style.transform = "translateY(-2160px)"
        break
      case 8:
        el.style.transition = "transform 2s ease"
        el.style.transform = "translate(-1920px, -2160px)"
        break
      case 9:
        el.style.transition = "transform 2s ease"
        el.style.transform = "translate(-3840px, -2160px)"
        break
      default:
        break
    }
  }, [index])

  return (
    <Template id="panelContainer">
      {data.data.map((data, index) => {
        return (
          <Panel key={index}>
            <Overlay style={{ backgroundColor: colors[index] }} />
          </Panel>
        )
      })}
    </Template>
  )
}

export default Panels
