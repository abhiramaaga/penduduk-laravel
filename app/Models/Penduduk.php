<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Penduduk extends Model
{
    //
    use HasFactory;

    protected $fillable = [
        'nik',
        'nama',
        'tempat',
        'lahir',
        'gender',
        'desa',
        'rt',
        'rw',
        'alamat',
        'agama',
        'status',
    ];

}
