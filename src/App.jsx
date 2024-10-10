import { useState, useEffect } from "react"
import Footer from "./componenents/Footer"
import Main from "./componenents/Main"
import SiderBar from "./componenents/SiderBar"

function App() {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(false)
  const [showModel, setShowModel] = useState(false)
  const changeModel = ()=>{
    setShowModel(!showModel)
  }
  useEffect(()=>{
    const NASA_KEY = import.meta.env.VITE_NASA_API_KEY
    async function fetchApiData() {
      const url = 'https://api.nasa.gov/planetary/apod'+ `?api_key=${NASA_KEY}`
      const today = (new Date()).toDateString()
      const localKey = `NASA-${today}`
      if(localStorage.getItem(localKey)){
        const apiData = JSON.parse(localStorage.getItem(localKey))
        setData(apiData)
        console.log('fetched from cache today')
        return
      }
      localStorage.clear()
      try{
        const res = await fetch(url)
        const apiData = await res.json()
        localStorage.setItem(localKey, JSON.stringify(apiData))
        setData(apiData)
        console.log('fetched api today')
        console.log('Data\n', apiData)
      }
      catch(err){
        console.log(err.message)
      }
    }
    fetchApiData()
  }, [])
  return (
    <>
      {data ? (<Main data={data}/>): (
        <div className="loadingState">
          <i className="fa-solid fa-gear"></i>
          <p>LOADING</p>
        </div>
      )}
      {
        showModel && (<SiderBar changeModel={changeModel} data={data}/>)
      }
      {data &&(<Footer changeModel={changeModel} data={data}/>)}
    </>
  )
}

export default App
