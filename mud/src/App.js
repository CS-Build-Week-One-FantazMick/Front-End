import React from 'react'
import ClientLogin from "./components/clientLogin/ClientLogin"
import ClientRegistration from "./components/clientRegistration/ClientRegistration"

import World from "./components/World"

function App() {
  return (
    <div>
      {/* <p>Hello World</p>
      <canvas
        style={{ background: 'green', display: 'flex', margin: '0 auto' }}
        width={window.innerWidth / 2}
        height={window.innerHeight / 2}
        onClick={e => {
          alert(e.clientX)
        }}
      /> */}
      <World />
      <ClientRegistration />
    </div>
  )
}
export default App