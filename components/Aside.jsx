"use client";
import React, { useState, useEffect } from "react";
import Link from 'next/link';
import {ImLab, ImUsers} from 'react-icons/im'
import { useSession } from "next-auth/react";

import { FaUsers,FaUser,  FaUserMd, FaUserInjured,FaUserNurse,FaCalendarAlt, FaChartBar, FaCommentMedical,FaClinicMedical, FaClipboardList } from 'react-icons/fa'



function Aside() {
  const {data:session,status} = useSession()
  //console.log(session,status)
  const [menuVisible, setMenuVisible] = useState(false);
  const toggleMenu = () => {
    setMenuVisible(prevMenuVisible => !prevMenuVisible);
  };

  // Utilizamos useEffect para detectar cambios en el tamaño de pantalla y actualizar el estado
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) { // 1024px es el ancho correspondiente al breakpoint lg
        setMenuVisible(true);
      } else {
        setMenuVisible(false);
      }
    };

    // Agregamos un listener al evento resize para detectar cambios en el tamaño de la ventana
    window.addEventListener("resize", handleResize);

    // Llamamos a handleResize al montar el componente para establecer el estado inicial
    handleResize();

    // Eliminamos el listener al desmontar el componente para evitar memory leaks
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const hideMenuOnClick = () => {
    if (window.innerWidth < 1024) { // Verificar que el ancho de la ventana sea menor a 1024px
      setMenuVisible(false);
    }
  };

  return (
    <div className="text-slate-800 text-xl bg-sky-700 bg-opacity-20 shadow-lg overflow-y-auto" >
      <div className="lg:flex">
        <button onClick={toggleMenu} className="block lg:hidden">
          Panel de Administrador
        </button>
        {menuVisible && (
          <div>
            <div className=" flex justify-center mt-4">
              <div className="bg-slate-950 rounded-full w-20 h-20 flex justify-center items-center bg-opacity-30">
              <FaUser className="text-5xl text-teal-100 m-2"/>
              </div>
              
            </div>
            <div>
              <h2 className="text-center">{session.user.name}</h2>
              <h2 className="text-center">{session.user.email}</h2>
              <h2 className="text-center">{session.user.role}</h2>
            </div>
              <ul className=" lg:min-h-[100vh] lg:block  ">
              <Link href='/dashboard-Admin/proveedores' className="hover:text-slate-400 " onClick={hideMenuOnClick}>

                <li className="m-4 pr-2 my-4 border-r-2 flex items-center ">
                  <FaUsers className="mr-2" />
                  <h4 className="transition duration-300 ease-in-out transform hover:translate-x-3">
                    Gestión de Proveedores
                  </h4>
                </li>
              </Link>
              <Link href='/dashboard-Admin/insumos' className="hover:text-slate-400" onClick={hideMenuOnClick}>
                <li className="m-4 pr-2 my-4 border-r-2 flex items-center">
                  <ImUsers className="mr-2" />
                  <h4 className="transition duration-300 ease-in-out transform hover:translate-x-3">
                    Gestión de Insumos
                  </h4>
                </li>
              </Link>
              <Link href='/dashboard-Admin/productos' className="hover:text-slate-400 " onClick={hideMenuOnClick}>
                <li className="m-4 my-4 pr-2 border-r-2 flex items-center">
                  <ImLab className="mr-2" />
                  <h4 className="transition duration-300 ease-in-out transform hover:translate-x-3">
                    Gestión de Productos
                  </h4>
                </li>
              </Link>
              <Link href='/dashboard-Admin/usuarios' className="hover:text-slate-400" onClick={hideMenuOnClick}>
                <li className="m-4 pr-2 my-4 border-r-2 flex items-center">
                  <ImUsers className="mr-2" />
                  <h4 className="transition duration-300 ease-in-out transform hover:translate-x-3">
                    Gestión de Clientes
                  </h4>
                </li>
              </Link>
              
              <Link href='/dashboard-Admin/existencias' className="hover:text-slate-400" onClick={hideMenuOnClick}>
                <li className="m-4 pr-2 my-4 border-r-2 flex items-center">
                  <FaCalendarAlt className="mr-2" />
                  <h4 className="transition duration-300 ease-in-out transform hover:translate-x-3">
                    Gestión de Lotes
                  </h4>
                </li>
              </Link>
              <Link href='/dashboard-Admin/existencias' className="hover:text-slate-200" onClick={hideMenuOnClick}>
                <li className="m-4 pr-2 my-4 border-r-2 flex items-center">
                  <FaChartBar className="mr-2" />
                  <h4 className="transition duration-300 ease-in-out transform hover:translate-x-3">
                    Analisis y Monitoreo
                  </h4>
                </li>
              </Link>

              <Link href='/dashboard-Admin/existencias' className="hover:text-slate-200" onClick={hideMenuOnClick}>
                <li className="m-4 pr-2 my-4 border-r-2 flex items-center">
                  <FaClinicMedical className="mr-2" />
                  <h4 className="transition duration-300 ease-in-out transform hover:translate-x-3">
                    Seguimiento y progreso
                  </h4>
                </li>
              </Link>

              <Link href='/dashboard-Admin/existencias' className="hover:text-slate-200" onClick={hideMenuOnClick}>
                <li className="m-4 pr-2 my-4 border-r-2 flex items-center">
                  <FaClipboardList className="mr-2" />
                  <h4 className="transition duration-300 ease-in-out transform hover:translate-x-3">
                    Reportes
                  </h4>
                </li>
              </Link>
              <Link href='/dashboard-Admin/existencias' className="hover:text-slate-200" onClick={hideMenuOnClick}>
                <li className="m-4 pr-2 my-8 mt-20 border-r-2 flex items-center">
                  <FaUsers className="mr-2" />
                  <h4 className="transition duration-300 ease-in-out transform hover:translate-x-3">
                    Configuración
                  </h4>
                </li>
              </Link>
            </ul>
          </div>
                  )}
      </div>
    </div>
  );
}

export default Aside;

