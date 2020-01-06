import React from 'react'
function App() {
  return (
    <div>
      <p>Hello World</p>
      <canvas
        width={window.innerWidth}
        height={window.innerHeight}
        onClick={e => {
          alert(e.clientX)
        }}
      />

    </div>
  )
}
export default App