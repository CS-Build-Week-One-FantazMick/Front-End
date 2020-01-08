import React from 'react'
import ClientLogin from "./components/clientLogin/ClientLogin"
import ClientRegistration from "./components/clientRegistration/ClientRegistration"
import Player from './components/player'

function App() {
  return (
    <div>
      <p>Hello World</p>
      <Player />
      <canvas
        style={{ background: 'green',display: 'flex', margin: '0 auto' }}
        width={window.innerWidth/2}
        height={window.innerHeight/2}
        onClick={e => {
          alert(e.clientX)
        }}
      />
      <ClientRegistration/>
    </div>
  )
}
export default App