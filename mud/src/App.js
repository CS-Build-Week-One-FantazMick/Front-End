import React from 'react'
import ClientLogin from "./components/clientLogin/ClientLogin"
import ClientRegistration from "./components/clientRegistration/ClientRegistration"
function App() {
  return (
    <div>
      <p>Hello World</p>
      <canvas
        width={window.innerWidth}
        height={window.innerHeight}
        onClick={e => {
          alert(e.screenX)
        }}
      />
      <ClientRegistration/>
    </div>
  )
}
export default App