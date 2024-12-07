import React from 'react';

function Tampilan() {
  const data = [
    { no: 1, nama: 'Darma Yoga', agama: 'Islam', jenisKelamin: 'Laki-laki' },
    { no: 2, nama: 'Febrian Aditya', agama: 'Islam', jenisKelamin: 'Laki-laki' },
    { no: 3, nama: 'Agus Joko', agama: 'Katolik', jenisKelamin: 'Laki-laki' },
    { no: 4, nama: 'Reza Gemasih', agama: 'Islam', jenisKelamin: 'Laki-laki' },
  ];

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="w-full max-w-4xl bg-white shadow-md rounded-lg p-6">
        <h2 className="text-xl font-bold text-blue-600 mb-4">Lihat Data</h2>
        <table className="w-full table-auto border-collapse border border-gray-300">
          <thead>
            <tr>
              <th className="border border-gray-300 p-2">NO</th>
              <th className="border border-gray-300 p-2">NAMA</th>
              <th className="border border-gray-300 p-2">AGAMA</th>
              <th className="border border-gray-300 p-2">JENIS KELAMIN</th>
              <th className="border border-gray-300 p-2">AKSI</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr key={index} className="text-center">
                <td className="border border-gray-300 p-2">{item.no}</td>
                <td className="border border-gray-300 p-2">{item.nama}</td>
                <td className="border border-gray-300 p-2">{item.agama}</td>
                <td className="border border-gray-300 p-2">{item.jenisKelamin}</td>
                <td className="border border-gray-300 p-2">
                  <button className="text-blue-500 hover:text-blue-700 mr-2">
                    ✏️
                  </button>
                  <button className="text-red-500 hover:text-red-700">
                    🗑️
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="flex justify-between items-center mt-4">
          <p className="text-sm text-gray-600">
            Showing {data.length} out of 55 entries
          </p>
          <div className="flex space-x-1">
            <button className="px-2 py-1 text-sm text-blue-500 border border-blue-500 rounded hover:bg-blue-500 hover:text-white">
              Previous
            </button>
            <button className="px-2 py-1 text-sm bg-blue-500 text-white border border-blue-500 rounded">
              1
            </button>
            <button className="px-2 py-1 text-sm border border-gray-300 rounded">
              2
            </button>
            <button className="px-2 py-1 text-sm border border-gray-300 rounded">
              3
            </button>
            <button className="px-2 py-1 text-sm border border-gray-300 rounded">
              4
            </button>
            <button className="px-2 py-1 text-sm border border-gray-300 rounded">
              5
            </button>
            <button className="px-2 py-1 text-sm text-blue-500 border border-blue-500 rounded hover:bg-blue-500 hover:text-white">
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Tampilan;
