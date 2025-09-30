
import React, { useState } from "react";
import logo from "../assets/images/logo.jpg"; 

const NavbarLinks = [
  { id: 1, nombre: "Inicio", link: "/" , icono:<i class="bi bi-house-door-fill"></i>},
  { id: 2, nombre: "Profesionales", link: "/", icono:<i class="bi bi-heart-pulse-fill"></i> },
  { id: 3, nombre: "Pacientes", link: "/", icono:<i class="bi bi-person-plus-fill"></i> },
  { id: 4, nombre: "Contactos", link: "/",icono:<i class="bi bi-telephone-fill"></i> },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="w-full bg-white bg-opacity-30 shadow-md px-4 py-2 sm:px-6 sm:py-3">
      <div className="flex items-center justify-between w-full">
        {/* Logo */}
        <div className="flex items-center gap-2 cursor-pointer">
          <img src={logo} alt="Logo" className="w-16 h-16" />
          <p className="text-sm font-bold text-blue-600 sm:text-lg">
            CLINICA DEL VALLE
          </p>
        </div>

        {/* Botón Hamburguesa */}
        <button
          className="md:hidden text-black p-2 cursor-pointer text-2xl"
          onClick={toggleMenu}
        >
          {isOpen ? (
            <i className="bi bi-x"></i>   // Icono "X"
          ) : (
            <i className="bi bi-list"></i> // Icono hamburguesa
          )}
        </button>
        {/* Menú desktop */}
<ul className="hidden md:flex flex-1 justify-center gap-6 sm:gap-4 flex-wrap">
  {NavbarLinks.map((link) => (
    <li key={link.id}>
      <a
        href={link.link}
        className="text-gray-700 md:text-base sm:text-lg hover:text-blue-600 font-serif transition-colors duration-200"
      >
        {link.nombre}
      </a>
    </li>
  ))}
</ul>

{/* Botón Turnos (desktop) */}
<div className="hidden md:flex md:items-center ">
  <a
    href="/"
    className="px-3 sm:px-4 py-2 text-blue-600 bg-white border border-blue-600 rounded hover:text-white hover:bg-blue-600 transition-colors duration-200"
  >
    Turnos Online
  </a>
</div>
</div>

      {/* Menú móvil desplegable */}
<div className={`md:hidden absolute top-16 left-0 w-full bg-white opacity-30 transform transition-transform duration-300 ease-in-out ${
  isOpen ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0"
}`}>
  <ul className="flex flex-col items-center gap-6 shadow-md py-6">
    {NavbarLinks.map((link) => (
      
      <li key={link.id} className="w-full ">
        
        <a
          href={link.link}
          className="flex items-center justify-center gap-2 w-full py-2  text-gray-700 text-lg hover:text-blue-600 font-serif transition-colors duration-200"
        >
          {link.icono} {/* 🔹 Icono al lado del texto */}
          {link.nombre}
        </a>
      </li>
    ))}
    <li className="w-full text-center cursor-pointer">
      <a
        href="/"
        className=" inline-block px-4 py-2  text-blue-600 bg-white border border-blue-600 rounded hover:text-white hover:bg-blue-600 "
      >
        Turnos Online
      </a>
    </li>
  </ul>
</div>


    </nav>
  );
};

export default Navbar;
