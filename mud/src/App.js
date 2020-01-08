import React from 'react'
import ClientLogin from "./components/clientLogin/ClientLogin"
import ClientRegistration from "./components/clientRegistration/ClientRegistration"
import Moving from './components/clientMovement/Moving'
import './App.css'
function App() {
  return (
    <div>
      <p>Hello World</p>
      <canvas
        width={800}
        height={400}
        onClick={e => {
          alert(e.screenX)
        }}
      />
      <Moving></Moving>
      <ClientRegistration/>
      
    </div>
  )
}
export default App