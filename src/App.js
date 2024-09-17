import React, { useState } from 'react';
import './App.css';

function App() {
const [display, setDisplay] = useState('Display');
const [isPressed, setIsPressed] = useState('');
const [isOn, setIsOn] = useState(false);
const [volume, setVolume] = useState(0.5); 

const sounds = [
  { id: 'Heater 1', key: 'Q', src: 'https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-1.mp3' },
  { id: 'Heater 2', key: 'W', src: 'https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-2.mp3' },
  { id: 'Heater 3', key: 'E', src: 'https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-3.mp3' },
  { id: 'Heater 4', key: 'A', src: 'https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-4_1.mp3' },
  { id: 'Heater 6', key: 'S', src: 'https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-6.mp3' },
  { id: 'Dsc Oh', key: 'D', src: 'https://cdn.freecodecamp.org/testable-projects-fcc/audio/Dsc_Oh.mp3' },
  { id: 'Kick n Hat', key: 'Z', src: 'https://cdn.freecodecamp.org/testable-projects-fcc/audio/Kick_n_Hat.mp3' },
  { id: 'RP4 KICK 1', key: 'X', src: 'https://cdn.freecodecamp.org/testable-projects-fcc/audio/RP4_KICK_1.mp3' },
  { id: 'Cev H2', key: 'C', src: 'https://cdn.freecodecamp.org/testable-projects-fcc/audio/Cev_H2.mp3' },
];

const handleSound = (e) => {
  setIsPressed(e.target.id);
  
  setTimeout(()=>{
    setIsPressed('')
  },100);

  if (isOn) {
    const audio = e.target.querySelector("audio");
    setDisplay(e.target.id);

    audio.volume = volume;  
      audio.currentTime = 0; 
      audio.play();
  }
}

const handleOn = () => {
  setIsOn(!isOn);
}

const handleVolumeChange = (e) => {
  setVolume(e.target.value);  
  setDisplay(`Volume: ${Math.round(e.target.value * 100)}%`);  
};



  return (
    <div className="App">
      <div id= "drum-machine">
        <div className = "pad-bank">
        {sounds.map((sound) => (
            <div
              key={sound.id}
              id={sound.id}
              className={isPressed === sound.id ? 'drum-pad-pressed' : 'drum-pad'}
              onClick={handleSound}
            >
              {sound.key}
              <audio id={sound.key} src={sound.src}></audio>
            </div>
          ))}
        </div>
        <div className='controls-container'>
          <div className='on-off'>
          <i className={isOn ? "fa-solid fa-toggle-on" : "fa-solid fa-toggle-off"} onClick={handleOn}></i>
          </div>
          <p id= "display">{display}</p>
          <div className='volume'>
          <input 
              type="range" 
              min="0" 
              max="1" 
              step="0.01" 
              value={volume} 
              onChange={handleVolumeChange} 
            />
          <i className={volume === "0" ? "fa-solid fa-volume-xmark" : "fa-solid fa-volume-high" }></i>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
