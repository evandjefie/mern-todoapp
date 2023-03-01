import React, {useState} from 'react';
import SpeechRecognition, { useSpeechRecognition } from "react-speech-recognition";
import MicIcon from '@mui/icons-material/Mic';
import MicNoneIcon from '@mui/icons-material/MicNone';

const Dictaphone = () => {
  const commands = [
    {
      command: ["Je veux *"],
      callback: (redirectPage) => setQuery(redirectPage),
    },
  ];
  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition
  } = useSpeechRecognition({ commands });

  const [query, setQuery] = useState("");
  
  const pages = ["* acheter *","* ticket *","événement","* match *","accueil","* acheter un ticket du match"];

  if (!browserSupportsSpeechRecognition) {
    return <span>Browser doesn't support speech recognition.</span>;
  }


  const handleListen = () => {
    SpeechRecognition.startListening({ continuous: true, language: 'fr-FR' }) ? SpeechRecognition.stopListening() : SpeechRecognition.startListening({ continuous: true, language: 'fr-FR' });

    if (transcript) {
      setQuery(transcript);
      resetTranscript();
      if (pages.includes(transcript))
      {
        window.location = "https://openmoise.ci";
      }
      else{
        // setQuery("Désolé, je ne connais pas ${e}")
      }
    }

  };

  return (
    <div className='relative top-20 my-5  flex justify-evenly'>
      <div className='p-3 h-16 bg-white rounded-xl flex justify-evenly'>
        <input className='flex-2 bg-gray-200 rounded-xl' type="text" value={query} onChange={(e) => setQuery(e.target.value)}/>
        <button className='flex content-center flex-1 w-auto p-2 ml-1 text-white bg-yellow-300 rounded-2xl' onClick={handleListen}>
          <span className='flex-1'>
          {listening ? <MicIcon/> : <MicNoneIcon/> }
          </span>
          <p className='flex-2'>
            Dites "je veux"
          </p>
        </button>
      </div>
    </div>
  );
}

export default Dictaphone;
