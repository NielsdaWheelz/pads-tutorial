import { useState } from "react"
import Pad from "./Pad.tsx"
import padsData from "./padsData.js"

export default function App() {

  const [pads, setPads] = useState(padsData)

  function toggle(id: number) {
    setPads(pads.map((pad) => id === pad.id ? {...pad, on: !pad.on} : pad))
    // setPads(prevPads => prevPads.map((pad) => {
    //   return pad.id === id ? {...pad, on: !pad.on} : pad
    // }))
  }

  const buttonElements = pads.map((pad) => (
    <Pad key={pad.id} id={pad.id} color={pad.color} on={pad.on} toggle={toggle} />
  ))

  return (
    <main>
      <div className="pad-container">
        {buttonElements}
      </div>
  </main>
)
}