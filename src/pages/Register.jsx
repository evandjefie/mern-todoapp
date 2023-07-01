import React from 'react';
import Applogo from "../assets/img/logo_todovoice.png";

function Register() {
  return (
    <section className="h-screen flex flex-col md:flex-row justify-center space-y-10 md:space-y-0 md:space-x-16 items-center my-2 mx-5 md:mx-0 md:my-0">
      
      <div className="md:w-1/3 max-w-sm">
        <img
          src={Applogo}
          alt="applogo"
        />
      </div>
      <div className="md:w-1/3 max-w-sm">
        <div className="my-5 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-300 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-300">
          <p className="mx-4 mb-0 text-center font-semibold text-slate-500">Register Here</p>
        </div>
        <input className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded" type="text" placeholder="Username" />
        <input className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded mt-4" type="text" placeholder="Email Address" />
        <input className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded mt-4" type="password" placeholder="Password" />
        <div className="text-center">
          <button className="mt-6 bg-blue-500 hover:bg-blue-700 px-4 py-2 text-white uppercase rounded text-xs tracking-wider" type="submit">Login</button>
        </div>
        <div className="mt-4 font-semibold text-sm text-slate-500 text-center">
          Have already an account? <a className="text-red-500 hover:underline hover:underline-offset-4" href="/login">Login</a>
        </div>
      </div>
    </section>
  )
}

export default Register;