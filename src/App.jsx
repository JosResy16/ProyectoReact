import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Cartwidget from './Components/CartWidget/Cartwidget'
import Itemlistcontainer from './Components/ItemListContainer/Itemlistcontainer'
import Navbar from './Components/navbar/Navbar'

function App() {
  let saludo = "Hola soy ItemlistContainer"

  return (
    <div>
      <Navbar/>
      <Itemlistcontainer 
        saludar = {saludo}
      />
    </div>
  )
}

export default App
