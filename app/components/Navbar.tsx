import React from "react";
import LoginBar from "./LoginBar";

const Navbar = () => {
  return (
    <div className="sticky top-0 navbar bg-base-300 ">
      <div className="flex-1">
        <a className="btn btn-ghost text-xl text-base-content" href="./">Agenda</a>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal text-base-content">
          <li>
            <details>
              <summary>Sobre</summary>
              <ul className="p-2 w-40">
                <li>
                  <a href="quem-somos">Quem somos</a>
                </li>
                <li>
                  <a href="precos">Preços</a>
                </li>
              </ul>
            </details>
          </li>
        </ul>
          <LoginBar />
        
      </div>
    </div>
  );
};

export default Navbar;
