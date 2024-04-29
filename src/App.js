import React, { useState } from 'react'
import Home from './Pages/Home/Home'

const App = () => {
  const [muellim, setMuellim] = useState('Ramzi Muallim')
  return (
    <div>
      <Home muellim={muellim}/>
    </div>
  )
}

export default App