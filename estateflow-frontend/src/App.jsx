// import { useState } from 'react'
import  Navbar from "./components/Navbar"
import Home from "./pages/Home"

function App() {
  return(
    <>
      <Navbar/>
      <Home/>
    </>
  );
}

export default App


// =========================
/**  
   const [message, setMessage] = useState("Click here..")

  async function clickHandler() {
    try {
      const url = import.meta.env.VITE_BACKEND_URL
      const response = await fetch(`${url}/users`)

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }

      const api_data = await response.json()
      console.log(api_data)

      setMessage(JSON.stringify(api_data.message, null, 2))
    } catch (e) {
      console.log("api request failed", e)
      setMessage("API request failed")
    }
  }

  return (
    <>
      <pre>{message}</pre>
      <button onClick={clickHandler}>button</button>
    </>
  )
*/