import React from 'react'
import './imageLinkForm.css'

export const ImageLinkForm = () => {
  return (
    <div>
      <p className="f3 white">
        Enter an image url and the ai will detect faces.
      </p>
      <div className="center">
        <div className="form center pa4 br3 shadow-5">
          <input className="f4 pa2 w-70 center" type="text" />
          <button className="detect-btn grow f4 link ph3 pv2 dib white bg-blue w-30">Detect</button>
        </div>
      </div>
    </div>
  )
}