import React from 'react';

function App() {
  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Main Content */}
      <div className="w-4/5 mx-auto bg-gray-100 p-8">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-blue-600 text-2xl font-semibold mb-6">Tambah Data Penduduk</h2>
          <form className="space-y-4">
            {/* NIK Field */}
            <div>
              <label className="block text-gray-700" htmlFor="nik">NIK:</label>
              <input 
                type="text" 
                id="nik" 
                placeholder="NIK" 
                className="w-full border border-gray-300 rounded-md p-2 mt-1"
              />
            </div>

            {/* Nama Field */}
            <div>
              <label className="block text-gray-700" htmlFor="nama">Nama:</label>
              <input 
                type="text" 
                id="nama" 
                placeholder="Nama Penduduk" 
                className="w-full border border-gray-300 rounded-md p-2 mt-1"
              />
            </div>

            {/* Tempat dan Tanggal Lahir */}
            <div>
              <label className="block text-gray-700">Tempat, Tanggal Lahir:</label>
              <div className="flex space-x-2">
                <input 
                  type="text" 
                  placeholder="Tempat Lahir" 
                  className="w-1/2 border border-gray-300 rounded-md p-2"
                />
                <input 
                  type="date" 
                  className="w-1/2 border border-gray-300 rounded-md p-2"
                />
              </div>
            </div>

            {/* Jenis Kelamin */}
            <div>
              <label className="block text-gray-700" htmlFor="gender">Jenis Kelamin:</label>
              <select 
                id="gender" 
                className="w-full border border-gray-300 rounded-md p-2 mt-1"
              >
                <option value="">-pilih-</option>
                <option value="Laki-laki">Laki-laki</option>
                <option value="Perempuan">Perempuan</option>
              </select>
            </div>

            {/* Desa */}
            <div>
              <label className="block text-gray-700" htmlFor="desa">Desa:</label>
              <input 
                type="text" 
                id="desa" 
                placeholder="Desa" 
                className="w-full border border-gray-300 rounded-md p-2 mt-1"
              />
            </div>

            {/* RT/RW */}
            <div>
              <label className="block text-gray-700">RT/RW:</label>
              <div className="flex space-x-2">
                <input 
                  type="text" 
                  placeholder="RT" 
                  className="w-1/2 border border-gray-300 rounded-md p-2"
                />
                <input 
                  type="text" 
                  placeholder="RW" 
                  className="w-1/2 border border-gray-300 rounded-md p-2"
                />
              </div>
            </div>

            {/* Agama */}
            <div>
              <label className="block text-gray-700" htmlFor="agama">Agama:</label>
              <input 
                type="text" 
                id="agama" 
                placeholder="Agama" 
                className="w-full border border-gray-300 rounded-md p-2 mt-1"
              />
            </div>

            {/* Status Perkawinan */}
            <div>
              <label className="block text-gray-700" htmlFor="status">Status Perkawinan:</label>
              <select 
                id="status" 
                className="w-full border border-gray-300 rounded-md p-2 mt-1"
              >
                <option value="">-pilih-</option>
                <option value="Belum Kawin">Belum Kawin</option>
                <option value="Kawin">Kawin</option>
              </select>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
