<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Penduduk;
use Inertia\Inertia;

class PendudukController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $penduduk = Penduduk::paginate(10); // 10 data per halaman
        return inertia('Penduduk/Index', [
            'penduduk' => $penduduk,
        ]);
    }


    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('Penduduk/Create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validatedData = $request->validate([
            'nik' => 'required|string|max:16',
            'nama' => 'required|string|max:255',
            'tempat' => 'required|string',
            'lahir' => 'required|date',
            'gender' => 'required|string',
            'desa' => 'required|string',
            'rt' => 'required|string',
            'rw' => 'required|string',
            'alamat' => 'required|string',
            'agama' => 'required|string',
            'status' => 'required|string',
        ]);

        Penduduk::create($validatedData);

        return redirect()->route('penduduk.index')->with('message', 'Penduduk berhasil ditambahkan');
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $penduduk = Penduduk::find($id);

        if (!$penduduk) {
            return redirect()->route('penduduk.index')->with('error', 'Penduduk tidak ditemukan');
        }

        return Inertia::render('Penduduk/Show', ['penduduk' => $penduduk]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        $penduduk = Penduduk::find($id);

        if (!$penduduk) {
            return redirect()->route('penduduk.index')->with('error', 'Penduduk tidak ditemukan');
        }

        return Inertia::render('Penduduk/Edit', ['penduduk' => $penduduk]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $penduduk = Penduduk::find($id);

        if (!$penduduk) {
            return redirect()->route('penduduk.index')->with('error', 'Penduduk tidak ditemukan');
        }

        $validatedData = $request->validate([
            'nik' => 'required|string|max:16',
            'nama' => 'required|string|max:255',
            'tempat' => 'required|string',
            'lahir' => 'required|date',
            'gender' => 'required|string',
            'desa' => 'required|string',
            'rt' => 'required|string',
            'rw' => 'required|string',
            'alamat' => 'required|string',
            'agama' => 'required|string',
            'status' => 'required|string',
        ]);

        $penduduk->update($validatedData);

        return redirect()->route('penduduk.index')->with('message', 'Penduduk berhasil diperbarui');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $penduduk = Penduduk::find($id);

        if (!$penduduk) {
            return redirect()->route('penduduk.index')->with('error', 'Penduduk tidak ditemukan');
        }

        $penduduk->delete();

        return redirect()->route('penduduk.index')->with('message', 'Penduduk berhasil dihapus');
    }
}
