import React, { useState } from "react";
import "./App.css";
import TopBar from "./components/TopBar/TopBar";
import UserInfo from "./components/body/UserInfo/UserInfo";
import Dictaphone from "./components/body/Dictaphone/Dictaphone";
import {Popup} from "./components/popup/Popup";
import AddIcon from '@mui/icons-material/Add';

const App = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="bg-gray-200 w-full h-screen flex flex-col">
      <TopBar />
      <UserInfo />
      <Dictaphone />
      <button className="relative top-20 left-1/4 w-1/4 p-1 bg-indigo-600 rounded-xl text-white" onClick={() => setOpen(true)}>
        <AddIcon />        
      </button>
      {open ? <Popup text="Hello there!" closePopup={() => setOpen(false)} /> : null}
    </div>
  );
};

export default App;
