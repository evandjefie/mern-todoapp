import React from 'react'

import UserInfo from "../components/body/UserInfo/UserInfo";
import Dictaphone from "../components/body/Dictaphone/Dictaphone";
import FloatingBtn from "../components/floating_btn/FloatingBtn";
import DataTable from "../components/data_table/DataTable";

function Home() {
  return (
    <div>
      <UserInfo />
      <Dictaphone />
      <DataTable/>
      <FloatingBtn />      
    </div>
  )
}

export default Home