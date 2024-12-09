<?php

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\PendudukController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

// Route::get('/dashboard', function () {
//     return Inertia::render('Dashboard');
// })->middleware(['auth', 'verified'])->name('dashboard');

// Route::middleware(['auth', 'verified'])->prefix('dashboard')->name('dashboard.')->group(function () {
//     Route::get('/', function () {
//         return Inertia::render('Dashboard');
//     })->name('index');

//     Route::resource('penduduk', PendudukController::class);
// });


Route::middleware(['auth', 'verified'])->prefix('penduduk')->name('penduduk.')->group(function () {
    Route::get('/', [PendudukController::class, 'index'])->name('index'); // Daftar penduduk
    Route::get('/create', [PendudukController::class, 'create'])->name('create'); // Tambah penduduk
    Route::post('/', [PendudukController::class, 'store'])->name('store'); // Simpan penduduk baru
    Route::get('/{penduduk}', [PendudukController::class, 'show'])->name('show'); // Lihat detail penduduk
    Route::get('/{penduduk}/edit', [PendudukController::class, 'edit'])->name('edit'); // Form edit penduduk
    Route::put('/{penduduk}', [PendudukController::class, 'update'])->name('update'); // Update penduduk
    Route::delete('/{penduduk}', [PendudukController::class, 'destroy'])->name('destroy'); // Hapus penduduk
});


// Route::middleware(['auth', 'verified'])->prefix('dashboard')->group(function () {
//     Route::resource('penduduk', PendudukController::class);
// });


Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';
