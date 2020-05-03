import React from 'react';
import { Navigation } from './components/Navigation/Navigation'
import { Logo } from './components/Logo/Logo'
import { ImageLinkForm } from './components/ImageLinkForm/ImageLinkForm'
import { UserInfo } from './components/UserInfo/UserInfo'
import Particles from 'react-particles-js'
import './App.css';

const partcleOptions = {
  "particles": {
    "number": {
        "value": 50
    },
    "size": {
        "value": 3
    }
}
}

function App() {
  return (
    <div className="App">
      <Particles
        className="particle"
        params={partcleOptions} />
      <Navigation />
      <Logo />
      <UserInfo />
      <ImageLinkForm />
      {
        /*
        
        
        <FaceRecognition />
        */
      }

    </div>
  );
}

export default App;
