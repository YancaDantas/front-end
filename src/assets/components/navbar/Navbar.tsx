import React from "react";
import "./Navbar.css";
function Navbar() {
  return (
    <div>
      <div className="flex py-4 mx-auto space-x-4 color-navbar items-center justify-between border-b-orange-500 border-b-2">

        <div className="justify-center mx-2 py-2">
          <ul className="flex space-x-20 text-center color-icones items-end text-2xl">
            <button type="submit" className="hover:text-white"><li>Menu</li></button>
            <button type="submit" className="hover:text-white"><li >Postagens</li></button>
            <button type="submit" className="hover:text-white"><li>Feed</li></button>
            <button type="submit" className="hover:text-white"><li >Sobre</li></button>
          </ul>
        </div>
        

        <div className="flex ">
          <input type="text" placeholder="Pesquisar..." className="color-pesquisar text-white mx-10 px-8 rounded-full"/>
        </div>
        

      </div>

    </div>

    
  );
}

export default Navbar;