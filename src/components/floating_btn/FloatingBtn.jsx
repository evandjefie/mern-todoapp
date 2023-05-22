import React, { useState } from "react";
// import './FloatingBtn.css';
import AddIcon from '@mui/icons-material/Add';
import {Popup} from "../popup/Popup.js";
import EditIcon from '@mui/icons-material/Edit';
import MicIcon from '@mui/icons-material/Mic';
// import MicNoneIcon from '@mui/icons-material/MicNone';


function FloatingBtn() {
  // const [visible, setVisible] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  const [task, setTask] = useState(false);
  // const [voice, setVoice] = useState(false);

  return (
    <div className="">
      <button
        className="fixed bottom-4 right-4 w-14 h-14 rounded-full bg-blue-500 shadow-lg outline-none focus:outline-none transition-all duration-300 text-white" onClick={() => setIsOpen(!isOpen)}
      >
        <AddIcon />
      </button>
      {isOpen && (
        <div className="absolute right-4 bottom-20 space-y-2 flex flex-col">
          <button className="w-14 h-14 rounded-full bg-red-500 shadow-lg outline-none focus:outline-none hover:bg-red-300 hover:-translate-y-1 transition duration-700 text-white" onClick={() => setTask(!task)}>
            <EditIcon/>
            {/* <i className="fas fa-heart text-white text-xl">task</i> */}
          </button>
          {task ? <Popup text="Hello there!" closePopup={() => setTask(false)} /> : null}
          <button className="w-14 h-14 rounded-full bg-green-500 shadow-lg outline-none focus:outline-none transform hover:bg-green-300 hover:-translate-y-1 transition duration-400 text-white" onClick={() => setTask(!task)}>
            <MicIcon/>
          </button>
        </div>
      )}
    </div>
  );
}

export default FloatingBtn;