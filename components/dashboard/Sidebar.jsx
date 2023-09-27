"use client"
import { useState } from 'react';
import { HiDashboard, HiShoppingCart, HiUser, HiUserGroup, HiArchive, HiViewList } from 'react-icons/hi';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`fixed top-0 left-0 h-full bg-gray-800 w-16 transition-all duration-300 ${isOpen ? 'w-64' : 'w-16'}`}>
      <div className="p-4">
        <button className="text-white" onClick={toggleSidebar}>
          {isOpen ? <HiViewList size={24} /> : <HiViewList size={24} />}
        </button>
      </div>
      <nav className="p-4">
        <ul>
          <li className="mb-4">
            <a href="#" className="text-white flex items-center space-x-2">
              <HiDashboard size={20} />
              {isOpen && <span>Dashboard</span>}
            </a>
          </li>
          <li className="mb-4">
            <a href="#" className="text-white flex items-center space-x-2">
              <HiShoppingCart size={20} />
              {isOpen && <span>Productos</span>}
            </a>
          </li>
          <li className="mb-4">
            <a href="#" className="text-white flex items-center space-x-2">
              <HiArchive size={20} />
              {isOpen && <span>Lista de Productos</span>}
            </a>
          </li>
          <li className="mb-4">
            <a href="#" className="text-white flex items-center space-x-2">
              <HiUser size={20} />
              {isOpen && <span>Usuarios</span>}
            </a>
          </li>
          <li className="mb-4">
            <a href="#" className="text-white flex items-center space-x-2">
              <HiUserGroup size={20} />
              {isOpen && <span>Distribuidores</span>}
            </a>
          </li>
          <li className="mb-4">
            <a href="#" className="text-white flex items-center space-x-2">
              <HiArchive size={20} />
              {isOpen && <span>Inventario</span>}
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
