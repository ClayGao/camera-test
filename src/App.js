import logo from './logo.svg';
import { useEffect } from 'react';
import './App.css';

const gotMedia = (mediaStream) => {
  const mediaStreamTrack = mediaStream.getVideoTracks()[0];
  const imageCapture = new ImageCapture(mediaStreamTrack);
  return imageCapture
}

const takePicture = () => {
  return navigator.mediaDevices.getUserMedia({ video: true }).then(res => res)
}

function App() {

  const testCamera = async () => {
    const mediaStream = await takePicture();
    const img = gotMedia(mediaStream)
    console.log({img})
  }

  return (
    <div className="App">
      <header className="App-header">
        <button onClick={testCamera}>test Camera</button>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
