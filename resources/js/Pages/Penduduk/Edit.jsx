import React, { useState } from 'react';
import { router } from '@inertiajs/react';
import AdminLayout from '@/Layouts/AdminLayout';

function Edit({ penduduk }) {
  const [formData, setFormData] = useState({
    nik: penduduk.nik || '',
    nama: penduduk.nama || '',
    tempat: penduduk.tempat || '',
    lahir: penduduk.lahir || '',
    gender: penduduk.gender || '',
    agama: penduduk.agama || '',
    desa: penduduk.desa || '',
    rt: penduduk.rt || '',
    rw: penduduk.rw || '',
    alamat: penduduk.alamat || '',
    status: penduduk.status || '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    router.put(`/penduduk/${penduduk.id}`, formData, {
      onSuccess: () => {
        router.visit('/penduduk');
      },
      onError: (errors) => {
        console.log('Error occurred:', errors);
      },
    });
  };

  return (
    <AdminLayout>
      <div className="flex min-h-screen bg-gray-50">
        <div className="w-4/5 mx-auto bg-gray-100 p-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-blue-600 text-2xl font-semibold mb-6">Edit Data Penduduk</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-gray-700" htmlFor="nik">NIK:</label>
                <input
                  type="text"
                  id="nik"
                  name="nik"
                  value={formData.nik}
                  onChange={handleChange}
                  placeholder="NIK"
                  className="w-full border border-gray-300 rounded-md p-2 mt-1"
                  disabled
                />
              </div>
              {/* Nama Field */}
            <div>
              <label className="block text-gray-700" htmlFor="nama">Nama:</label>
              <input
                type="text"
                id="nama"
                name="nama"
                value={formData.nama}
                onChange={handleChange}
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
                  name="tempat"
                  value={formData.tempat}
                  onChange={handleChange}
                  placeholder="Tempat Lahir"
                  className="w-1/2 border border-gray-300 rounded-md p-2"
                />
                <input
                  type="date"
                  name="lahir"
                  value={formData.lahir}
                  onChange={handleChange}
                  className="w-1/2 border border-gray-300 rounded-md p-2"
                />
              </div>
            </div>

            {/* Jenis Kelamin */}
            <div>
              <label className="block text-gray-700" htmlFor="gender">Jenis Kelamin:</label>
              <select
                id="gender"
                name="gender"
                value={formData.gender}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-md p-2 mt-1"
              >
                <option value="">-pilih-</option>
                <option value="Laki-laki">Laki-laki</option>
                <option value="Perempuan">Perempuan</option>
              </select>
            </div>

            {/* Agama */}
            <div>
              <label className="block text-gray-700" htmlFor="agama">Agama:</label>
              <select
                id="agama"
                name="agama"
                value={formData.agama}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-md p-2 mt-1"
              >
                <option value="">-pilih-</option>
                <option value="Islam">Islam</option>
                <option value="Kristen Protestan">Kristen Protestan</option>
                <option value="Kristen Katolik">Kristen Katolik</option>
                <option value="Hindu">Hindu</option>
                <option value="Budha">Budha</option>
                <option value="Konghucu">Konghucu</option>
              </select>
            </div>
            {/* Desa */}
            <div>
              <label className="block text-gray-700" htmlFor="desa">Desa:</label>
              <input 
                type="text" 
                id="desa" 
                placeholder="Desa"
                name="desa"
                value={formData.desa}
                onChange={handleChange}
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
                  name="rt"
                  value={formData.rt}
                  onChange={handleChange}
                  className="w-1/2 border border-gray-300 rounded-md p-2"
                />
                <input 
                  type="text" 
                  placeholder="RW" 
                  name="rw"
                  value={formData.rw}
                  onChange={handleChange}
                  className="w-1/2 border border-gray-300 rounded-md p-2"
                />
              </div>
            </div>

            {/* alamat */}
            <div>
              <label className="block text-gray-700" htmlFor="alamat">alamat:</label>
              <input 
                type="text" 
                id="alamat" 
                name="alamat"
                placeholder="alamat" 
                value={formData.alamat}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-md p-2 mt-1"
              />
            </div>

            {/* Status Perkawinan */}
            <div>
              <label className="block text-gray-700" htmlFor="status">Status Perkawinan:</label>
              <select 
                id="status" 
                name="status"
                className="w-full border border-gray-300 rounded-md p-2 mt-1"
                value={formData.status}
                onChange={handleChange}
              >
                <option value="">-pilih-</option>
                <option value="Belum Kawin">Belum Kawin</option>
                <option value="Kawin">Kawin</option>
              </select>
            </div>
              <div>
                <button
                  type="submit"
                  className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-500"
                >
                  Simpan Perubahan
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
}

export default Edit;
