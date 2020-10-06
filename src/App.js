import React, {useRef, useState} from 'react';
import './App.css';
import PlayButton from "./PlayButton";
import TrackProgressBar from "./TrackProgressBar";
import FileList from "./FileList";

function App() {
  const [isMusicPlaying, setIsMusicPlaying] = useState(false);
  const [currentFile, setCurrentFile] = useState(null);
  const audio = useRef(null);


  const handleClick = () => {
    if (isMusicPlaying) {
      audio.current.pause();
    } else {
      audio.current.play();
    }
    //Обновить состояние isMusicPlaying на противоположное
    setIsMusicPlaying(!isMusicPlaying);
  };

  const changeCurrentFile = (file) => {
      setCurrentFile(file);
  };

  return (
      <div className={'player'}>
          <div>
              <PlayButton
                  onClick={handleClick.bind(this)}
                  isMusicPlaying={isMusicPlaying}
              />
              <audio id="audio" ref={audio} />
              <TrackProgressBar currentFile={currentFile} />
          </div>
        <div>
            <FileList currentFileChanger={changeCurrentFile} />
        </div>
      </div>
  );
}

export default App;
