import { useState } from 'react'

function App() {
  const [message, setMessage] = useState("Click here..")

  async function clickHandler() {
    try {
      const response = await fetch("http://localhost:3000/api/v1/users");
      const api_data = await response.json();
      console.log(api_data);
      setMessage(JSON.stringify(api_data, null, 2))
    } catch (e) {
      console.log("api request failed", e);
    }
  }
  return (
    <>
      <div>{message}</div>
      <button onClick={clickHandler}>button</button>
    </>
  )
}

export default App
