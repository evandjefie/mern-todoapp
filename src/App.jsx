import React from "react";
import "./App.css";
import TopBar from "./components/TopBar/TopBar";
import UserInfo from "./components/body/UserInfo/UserInfo";
import Dictaphone from "./components/body/Dictaphone/Dictaphone";
import FloatingBtn from "./components/floating_btn/FloatingBtn";
import DataTable from "./components/data_table/DataTable";

const App = () => {

  return (
    <div className="bg-gray-200 w-full h-screen flex flex-col">
      <TopBar />
      <UserInfo />
      <Dictaphone />
      <FloatingBtn />
      <DataTable/>
    </div>
  );
};

export default App;