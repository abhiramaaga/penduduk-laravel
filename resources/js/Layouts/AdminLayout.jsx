import React from 'react';
import { Link, router } from '@inertiajs/react';

export default function AdminLayout({ children, activeMenu }) {
  const menuItems = [
    { key: 'penduduk', label: 'Penduduk', route: route('penduduk.index') },
    { key: 'kelola', label: 'Kelola Data', route: route('penduduk.create') },
  ];

  const handleLogout = () => {
    router.post('/logout', {}, {
      onFinish: () => {
        window.location.href = '/';
      },
    });
  };

  const activeMenuLabel = menuItems.find((menu) => menu.key === activeMenu)?.label;

  return (
    <div className="flex h-[100vh]">
      {/* Sidebar */}
      <div className="fixed top-0 left-0 h-full w-1/5 bg-blue-700 text-white p-6">
        <div className="flex flex-col justify-between h-full">
          {/* Sidebar Menu */}
          <div>
            <h1 className="text-2xl font-bold mb-6">Admin Panel</h1>
            <ul>
              {menuItems.map((menu) => (
                <li key={menu.key} className={`py-2 ${activeMenu === menu.key ? 'font-bold' : ''}`}>
                  <Link href={menu.route}>{menu.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Logout Button */}
          <div>
            <button
              className="w-full bg-red-500 hover:bg-red-600 text-white py-2 rounded"
              onClick={handleLogout}
            >
              Logout
            </button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="ml-[20%] w-4/5 p-6 bg-gray-100 overflow-y-auto">
        <div className="flex justify-between items-center">
          {/* Title */}
          {activeMenuLabel ? (
            <h2 className="text-2xl font-bold text-blue-600">{activeMenuLabel}</h2>
          ) : null}
        </div>
        {children}
      </div>
    </div>
  );
}
