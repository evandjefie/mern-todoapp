import React, { useState } from "react";
import { createTodo } from "../../api/apiTodo";

export const Popup = ({ text, closePopup }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const submitHandler = async (e) => {
    e.preventDefault();
    // Data control
    if (title === "" || description === "") {
      alert("Please fill these fields");
      return false;
    }
    const data = {
      title: title,
      description: description
    };
    const response = await createTodo(data);
    if (response.status === 201) {
      alert("Tâche créée !");
    } else {
      alert(response.response.data.msg);
    }
    // response.status === 201 ? alert("Tâche créée !") : alert(response.response.data.msg);
  }

  return (
    <div className="flex fixed w-full h-full top-0 left-0 right-0 bottom-0 bg-gray-500/80">
     <form onSubmit={submitHandler} className="flex flex-col absolute top-1/4 left-1/4 bottom-auto text-center p-5 m-auto w-1/2 bg-white rounded-xl">
      <button className="absolute right-1 top-1 w-10 h-10 p-3 bg-red-700 rounded-xl text-white" onClick={closePopup}>X</button>
      <h1>New Task</h1>
      <input className='p-3 my-3 bg-gray-200 rounded-xl focus:outline-none border-none p-2 rounded w-full' type="text" onChange={(e)=> setTitle(e.target.value)} placeholder="Title"/>
      <input className='p-3 my-3 bg-gray-200 rounded-xl focus:outline-none border-none p-2 rounded w-full' type="text" onChange={(e)=> setDescription(e.target.value)} placeholder="Description"/>
      <button className="p-3 my-3 bg-yellow-200 rounded-xl" type="submit">Add New Task</button>
     </form>
    </div>
  );
};