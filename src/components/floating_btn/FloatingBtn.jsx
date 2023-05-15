import React, { useState } from "react";
import './FloatingBtn.css';
import AddIcon from '@mui/icons-material/Add';
import {Popup} from "../popup/Popup.js";
// import MicIcon from '@mui/icons-material/Mic';
// import MicNoneIcon from '@mui/icons-material/MicNone';


function FloatingBtn() {
  // const [visible, setVisible] = useState(true);
  const [open, setOpen] = useState(false);

  return (
    <div className="">
      <button
      // className={`floating-button ${visible ? 'visible' : 'hidden'}`}
      // onClick={() => setVisible(visible)}
      // className="relative top-20 left-1/4 w-1/4 p-1 bg-indigo-600 rounded-xl text-white" onClick={() => setOpen(true)}
        className="fixed bottom-4 right-4 w-12 h-12 rounded-full bg-blue-500 shadow-lg outline-none focus:outline-none transition-all duration-300 text-white" onClick={() => setOpen(true)}
      >
        <AddIcon />
      </button>
      {open ? <Popup text="Hello there!" closePopup={() => setOpen(false)} /> : null}
    </div>
  );
}

export default FloatingBtn;
