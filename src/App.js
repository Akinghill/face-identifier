import React, { Component } from 'react';
import { Navigation } from './components/Navigation/Navigation'
import { Logo } from './components/Logo/Logo'
import { ImageLinkForm } from './components/ImageLinkForm/ImageLinkForm'
import { FaceRecognition } from './components/FaceRecognition/FaceRecognition'
import { UserInfo } from './components/UserInfo/UserInfo'
import Particles from 'react-particles-js'
import './App.css';
import Clarifai from 'clarifai';

const app = new Clarifai.App({
  apiKey: '0588947ba71941b19d32fa8fbfeef215'
});

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

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      input: '',
      imageUrl: '',
      box: {

      }
    }
  }

  calculateFaceLocation = (data) => {
    const clarifaiFace = data.outputs[0].data.regions[0].region_info.bounding_box;
    const image = document.getElementById('inputimage')
    const width = Number(image.width)
    const height = Number(image.height)
    return {
      leftCol: clarifaiFace.left_col * width,
      topRow: clarifaiFace.top_row * height,
      rightCol: width - (clarifaiFace.right_col * width),
      bottomRow: height - (clarifaiFace.bottom_row * height)
    }
  }

  displayFaceBox = (box) => {
    this.setState({
      box: box
    })
  }

  onInputChange = (e) => {
    this.setState({ input: e.target.value })
  }

  onSubmit = () => {
    this.setState({ imageUrl: this.state.input })
    app.models
      .predict(
        Clarifai.FACE_DETECT_MODEL,
        this.state.input)
      .then(response => this.displayFaceBox(this.calculateFaceLocation(response)))
      .catch(err => console.log(err));
  }
  render() {
    return (
      <div className="App">
        <Particles
          className="particle"
          params={partcleOptions} />
        <Navigation />
        <Logo />
        <UserInfo />
        <ImageLinkForm
          onInputChange={this.onInputChange}
          onSubmit={this.onSubmit}
        />
        <FaceRecognition box={this.state.box} imageUrl={this.state.imageUrl} />
      </div>
    );
  }

}

export default App;
