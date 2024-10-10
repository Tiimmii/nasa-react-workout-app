import { useState } from "react"
import Footer from "./componenents/Footer"
import Main from "./componenents/main"
import SiderBar from "./componenents/SiderBar"

function App() {
  const NASA_KEY = import.meta.env.API_KEY
  const [showModel, setShowModel] = useState(false)
  const changeModel = ()=>{
    setShowModel(!showModel)
  }
  return (
    <>
      <Main/>
      {
        showModel?<SiderBar changeModel={changeModel}/>:<div></div>
      }
      <Footer changeModel={changeModel} />
    </>
  )
}

export default App
