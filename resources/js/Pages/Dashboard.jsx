import React, { useState } from 'react';
import Tampilan from '@/Components/Tampilan';
import Kelola from '@/Components/Kelola';
import Index from './Penduduk/Index';
import { Link, usePage,router } from '@inertiajs/react';
import Create from './Penduduk/Create';

function Dashboard() {
  const [activeMenu, setActiveMenu] = useState('dashboard');
  const {penduduk} = usePage().props
  console.log("ini penduduk", penduduk);

  const handleMenuClick = (menu) => {
    setActiveMenu(menu);
  };

  const handleLogout = () => {
    router.post('/logout', {}, {
      onFinish: () => {
        // Redirect ke halaman login setelah logout selesai
        window.location.href = '/';
      },
    });
  };

  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <div className="w-1/5 bg-blue-600 text-white p-6 flex flex-col">
        {/* Logo */}
        <div className="mb-8">
          <h1 className="text-2xl font-bold">KEPENDUDUKAN</h1>
        </div>

        {/* Menu Items */}
        <ul className="flex-grow space-y-4">
          <li
            className={`cursor-pointer ${
              activeMenu === 'dashboard' ? 'font-bold' : ''
            }`}
            onClick={() => handleMenuClick('dashboard')}
          >
            PENDUDUK
          </li>
          <li
            className={`cursor-pointer ${
              activeMenu === 'kelola' ? 'font-bold' : ''
            }`}
            onClick={() => handleMenuClick('kelola')}
          >
            KELOLA DATA
          </li>
        </ul>

        {/* Logout */}
        <div>
          <button
            className="w-full bg-red-500 hover:bg-red-600 text-white py-2 rounded"
            onClick={handleLogout}
          >
            Logout
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="w-4/5 bg-gray-100 p-8">
        <div className="flex justify-between items-center mb-8">
          {/* Title */}
          <h2 className="text-2xl font-bold text-blue-600">
            {activeMenu === 'dashboard' ? 'Penduduk' : 'Kelola Data'}
          </h2>
        </div>

        {/* Conditional Content */}
        {activeMenu === 'dashboard' ? (
          <Index />
        ) : (
          // <Link href="dashboard/penduduk/create">Tambah Penduduk</Link>
          <Create />
        )}
      </div>
    </div>
  );
}

export default Dashboard;
