import React, { useState,useEffect } from 'react';
import Modal from 'react-modal';
import AdminDashboardLayout from '@/Layouts/AdminLayout';
import { Link, usePage, router } from '@inertiajs/react';

Modal.setAppElement('#app');

function Index() {
    const { penduduk } = usePage().props;
    const [searchQuery, setSearchQuery] = useState('');
    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const [showDetailModal, setShowDetailModal] = useState(false);
    const [currentPenduduk, setCurrentPenduduk] = useState(null);

    const handleEdit = (id) => () => {
        router.get(`/penduduk/${id}/edit`);
    };

    const handleDelete = (id) => {
        const selectedPenduduk = penduduk.data.find(item => item.id === id);
        setCurrentPenduduk(selectedPenduduk);
        setShowDeleteModal(true);
    };

    const handleConfirmDelete = () => {
        if (currentPenduduk) {
            router.delete(`/penduduk/${currentPenduduk.id}`, {
                onSuccess: () => {
                    console.log('Data berhasil dihapus');
                    setShowDeleteModal(false);
                },
                onError: () => {
                    console.log('Terjadi kesalahan saat menghapus data');
                    setShowDeleteModal(false);
                }
            });
        }
    };

    const handleCancelDelete = () => {
        setShowDeleteModal(false);
        setCurrentPenduduk(null);
    };

    const handleNIKClick = (id) => () => {
        const pendudukDetail = penduduk.data.find(item => item.id === id);
        if (pendudukDetail) {
            setCurrentPenduduk(pendudukDetail);
            setShowDetailModal(true);
        }
    };

    const handleCloseDetail = () => {
        setShowDetailModal(false);
        setCurrentPenduduk(null);
    };

    const [allPenduduk, setAllPenduduk] = useState(penduduk.data);

    useEffect(() => {
        // Setel ulang data allPenduduk saat penduduk.data diperbarui.
        setAllPenduduk(penduduk.data);
    }, [penduduk.data]);
    
    const filteredPenduduk = allPenduduk.filter(item =>
        item.nama.toLowerCase().includes(searchQuery.toLowerCase())
    );
    

    return (
        <AdminDashboardLayout activeMenu="penduduk">
            <div className="min-h-screen bg-gray-100 flex items-center justify-center">
                <div className="w-full max-w-4xl bg-white shadow-md rounded-lg p-6">
                    <div className="flex justify-between items-center mb-4">
                        <h2 className="text-xl font-bold text-blue-600">Lihat Data</h2>
                        <input
                            type="text"
                            placeholder="Cari nama..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="border rounded px-4 py-2"
                        />
                    </div>
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
                            {filteredPenduduk.map((item, index) => (
                                <tr key={index} className="text-center">
                                    <td className="border border-gray-300 p-2 truncate">{index + 1}</td>
                                    <td
                                        className="border border-gray-300 p-2 truncate text-blue-500 hover:underline cursor-pointer"
                                        onClick={handleNIKClick(item.id)}
                                    >
                                        {item.nik}
                                    </td>
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
                    {filteredPenduduk.length === 0 && (
                        <p className="text-center mt-4 text-gray-500">Data tidak ditemukan.</p>
                    )}

                    {/* Modal untuk konfirmasi hapus */}
                    {showDeleteModal && (
                        <Modal
                            isOpen={showDeleteModal}
                            onRequestClose={handleCancelDelete}
                            contentLabel="Konfirmasi Hapus"
                            className="bg-white rounded-lg p-6 shadow-lg max-w-md mx-auto relative"
                            overlayClassName="fixed inset-0 bg-gray-500 bg-opacity-50 flex justify-center items-center"
                        >
                            <h3 className="text-lg font-semibold mb-4">Konfirmasi Hapus</h3>
                            <p>Apakah Anda yakin ingin menghapus data <strong>{currentPenduduk?.nama}</strong>?</p>
                            <div className="mt-4 flex justify-end space-x-2">
                                <button onClick={handleCancelDelete} className="px-4 py-2 bg-gray-300 text-gray-700 rounded hover:bg-gray-400">
                                    Batal
                                </button>
                                <button onClick={handleConfirmDelete} className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600">
                                    Hapus
                                </button>
                            </div>
                        </Modal>
                    )}

                    {/* Modal untuk detail penduduk */}
                    {showDetailModal && currentPenduduk && (
                        <Modal
                            isOpen={showDetailModal}
                            onRequestClose={handleCloseDetail}
                            contentLabel="Detail Penduduk"
                            className="bg-white rounded-lg p-6 shadow-lg max-w-2xl mx-auto relative"
                            overlayClassName="fixed inset-0 bg-gray-500 bg-opacity-50 flex justify-center items-center"
                        >
                            <h3 className="text-lg font-semibold mb-4">Detail Penduduk</h3>
                            <div className="grid grid-cols-2 gap-4">
                                <div className="bg-gray-100 p-4 rounded shadow">
                                    <p><strong>NIK:</strong> {currentPenduduk.nik}</p>
                                </div>
                                <div className="bg-gray-100 p-4 rounded shadow">
                                    <p><strong>Nama:</strong> {currentPenduduk.nama}</p>
                                </div>
                                <div className="bg-gray-100 p-4 rounded shadow">
                                    <p><strong>Tempat Lahir:</strong> {currentPenduduk.tempat}</p>
                                </div>
                                <div className="bg-gray-100 p-4 rounded shadow">
                                    <p><strong>Tanggal Lahir:</strong> {currentPenduduk.lahir}</p>
                                </div>
                                <div className="bg-gray-100 p-4 rounded shadow">
                                    <p><strong>Jenis Kelamin:</strong> {currentPenduduk.gender}</p>
                                </div>
                                <div className="bg-gray-100 p-4 rounded shadow">
                                    <p><strong>Agama:</strong> {currentPenduduk.agama}</p>
                                </div>
                                <div className="bg-gray-100 p-4 rounded shadow">
                                    <p><strong>Desa:</strong> {currentPenduduk.desa}</p>
                                </div>
                                <div className="bg-gray-100 p-4 rounded shadow">
                                    <p><strong>RT:</strong> {currentPenduduk.rt}</p>
                                </div>
                                <div className="bg-gray-100 p-4 rounded shadow">
                                    <p><strong>RW:</strong> {currentPenduduk.rw}</p>
                                    </div>
                                <div className="bg-gray-100 p-4 rounded shadow">
                                    <p><strong>Alamat:</strong> {currentPenduduk.alamat}</p>
                                </div>
                                <div className="bg-gray-100 p-4 rounded shadow">
                                    <p><strong>Status Perkawinan:</strong> {currentPenduduk.status}</p>
                                </div>
                            </div>
                            <div className="mt-4 flex justify-end">
                                <button onClick={handleCloseDetail} className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
                                    Tutup
                                </button>
                            </div>
                        </Modal>
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

