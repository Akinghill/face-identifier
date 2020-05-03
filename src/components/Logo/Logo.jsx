import React from 'react'
import Tilt from 'react-tilt'
import './logo.css'
import anon from './anon.svg'

export const Logo = () => {
  return (
    <div className="Logo ma4 mt0">
      <Tilt className="Tilt br2 shadow2" options={{ max: 55 }} style={{ height: 250, width: 250 }} >
        <div className="Tilt-inner">
          <img src={anon} alt="site logo"></img>
        </div>
      </Tilt>
    </div>
  )
}