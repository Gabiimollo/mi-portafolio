import React from 'react'
import './App.css'
import imagenPersona from '../public/images/persona.webp'

const App = () => {
  return (
    <main>
      <div className='backgroundWrap'>
        <div className='main-left'>
          <h1>Hi, my name is <br /><b>Juan Gabriel<span>.</span></b></h1>
          <p>I'm a <b>creative and dinamic developer</b> from Buenos Aires, Argentina</p>
        </div>
        <div className='main-right'>
          <img src={imagenPersona} alt="" srcset="" />
        </div>
        <div className='copyright'>
          <small>
            © MMXXV. Made in Buenos Aires.
          </small>
        </div>
      </div>
    </main>
  )
}

export default App