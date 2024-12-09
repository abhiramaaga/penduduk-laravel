import React, { useState } from 'react';
import AdminDashboardLayout from '@/Layouts/AdminLayout';
import { Link, usePage, router } from '@inertiajs/react';

function Index() {
    const { penduduk } = usePage().props;
    const [showModal, setShowModal] = useState(false);
    const [currentId, setCurrentId] = useState(null);

    const handleEdit = (id) => () => {
        router.get(`/penduduk/${id}/edit`);
    };

    const handleDelete = (id) => {
        setCurrentId(id);  // Menyimpan id yang akan dihapus
        setShowModal(true); // Menampilkan modal
    };

    const handleConfirmDelete = () => {
        if (currentId) {
            router.delete(`/penduduk/${currentId}`, {
                onSuccess: () => {
                    console.log('Data berhasil dihapus');
                    setShowModal(false); // Menutup modal setelah penghapusan
                },
                onError: () => {
                    console.log('Terjadi kesalahan saat menghapus data');
                    setShowModal(false); // Menutup modal jika terjadi error
                }
            });
        }
    };

    const handleCancel = () => {
        setShowModal(false); // Menutup modal jika dibatalkan
    };

    return (
        <AdminDashboardLayout activeMenu="penduduk">
            <div className="min-h-screen bg-gray-100 flex items-center justify-center">
                <div className="w-full max-w-4xl bg-white shadow-md rounded-lg p-6">
                    <h2 className="text-xl font-bold text-blue-600 mb-4">Lihat Data</h2>
                    <table className="w-full table-auto border-collapse border border-gray-300">
                        <thead>
                            <tr>
                                <th className="border border-gray-300 p-2">NO</th>
                                <th className="border border-gray-300 p-2">NIK</th>
                                <th className="border border-gray-300 p-2">NAMA</th>
                                <th className="border border-gray-300 p-2">AGAMA</th>
                                <th className="border border-gray-300 p-2">JENIS KELAMIN</th>
                                <th className="border border-gray-300 p-2">DESA</th>
                                <th className="border border-gray-300 p-2">AKSI</th>
                            </tr>
                        </thead>
                        <tbody>
                            {penduduk.data.map((item, index) => (
                                <tr key={index} className="text-center">
                                    <td className="border border-gray-300 p-2 truncate">{index + 1}</td>
                                    <td className="border border-gray-300 p-2 truncate">{item.nik}</td>
                                    <td className="border border-gray-300 p-2 truncate">{item.nama}</td>
                                    <td className="border border-gray-300 p-2 truncate">{item.agama}</td>
                                    <td className="border border-gray-300 p-2 truncate">{item.gender}</td>
                                    <td className="border border-gray-300 p-2 truncate">{item.desa}</td>
                                    <td className="border border-gray-300 p-2 truncate flex justify-center">
                                        <button onClick={handleEdit(item.id)} className="text-blue-500 hover:text-blue-700 mr-2">
                                            ✏️
                                        </button>
                                        <button onClick={() => handleDelete(item.id)} className="text-red-500 hover:text-red-700">
                                            🗑️
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>

                    {/* Modal konfirmasi */}
                    {showModal && (
                        <div className="fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-50 z-50">
                            <div className="bg-white p-6 rounded-lg shadow-lg w-96">
                                <h3 className="text-lg font-semibold">Konfirmasi Penghapusan</h3>
                                <p>Apakah Anda yakin ingin menghapus data ini?</p>
                                <div className="mt-4 flex justify-end space-x-4">
                                    <button onClick={handleCancel} className="px-4 py-2 bg-gray-300 text-gray-800 rounded hover:bg-gray-400">
                                        Batal
                                    </button>
                                    <button onClick={handleConfirmDelete} className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600">
                                        Hapus
                                    </button>
                                </div>
                            </div>
                        </div>
                    )}

                    <div className="flex justify-between items-center mt-4">
                        <p className="text-sm text-gray-600">
                            Showing {penduduk.data.length} out of {penduduk.total} entries
                        </p>
                        <div className="flex space-x-1">
                            {penduduk.links.map((link, index) => (
                                <Link
                                    key={index}
                                    href={link.url}
                                    className={`px-2 py-1 text-sm border ${
                                        link.active
                                            ? 'bg-blue-500 text-white border-blue-500'
                                            : 'border-gray-300'
                                    } rounded hover:bg-blue-500 hover:text-white`}
                                    dangerouslySetInnerHTML={{ __html: link.label }}
                                ></Link>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </AdminDashboardLayout>
    );
}

export default Index;
