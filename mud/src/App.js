import React from 'react'
import ClientLogin from "./components/clientLogin/ClientLogin"
import ClientRegistration from "./components/clientRegistration/ClientRegistration"
import Moving from './components/clientMovement/Moving'
import { useDispatch } from 'react-redux';
import { getAllRooms } from '../src/actions/roomActions';
import './App.css'
function App() {
  const dispatch = useDispatch()
  dispatch(getAllRooms())
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
      <ClientLogin/>
      <ClientRegistration/>
      
    </div>
  )
}
export default App