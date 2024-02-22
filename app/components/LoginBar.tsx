'use client'
import React from "react";

const LoginBar = () => {
  return (
    <>
      <ul className="menu menu-horizontal space-x-2">
        <li>
          <a className="btn btn-sm btn-primary">Login</a>
        </li>
        <li>
          <a className="btn btn-sm ">Registre-se</a>
        </li>
      </ul>
      <button
        className="btn btn-sm btn-primary"
        onClick={() => document.getElementById("my_modal_1").showModal()}
      >
        Login
      </button>
      <dialog id="my_modal_1" className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Hello!</h3>
          <p className="py-4">
            Press ESC key or click the button below to close
          </p>
          <div className="modal-backdrop">
            <form method="dialog"> 
              {/* if there is a button in form, it will close the modal */}
              <button className="btn">Close</button>
            </form>
          </div>
        </div>
      </dialog>
    </>
  );
};

export default LoginBar;
