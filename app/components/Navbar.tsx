import React from "react";

const Navbar = () => {
  return (
    <div className="sticky top-0 navbar bg-base-100">
      <div className="flex-1">
        <a className="btn btn-ghost text-xl" href="./">Agenda</a>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
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
          <li>
            <a className="btn btn-primary">Login</a>
          </li>
          <li>
            <a className="btn ">Registre-se aqui</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
