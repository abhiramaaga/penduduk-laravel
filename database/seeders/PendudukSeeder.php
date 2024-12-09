<?php

namespace Database\Seeders;

use App\Models\Penduduk;
use Illuminate\Database\Seeder;
use Faker\Factory as Faker;

class PendudukSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $faker = Faker::create('id_ID'); // Menggunakan lokal Indonesia

        // Daftar desa
        $desaList = [
            'Godean',
            'Sidoagung',
            'Sidomoyo',
            'Sidoarum',
            'Sidoluhur',
            'Sidorejo',
            'Sidokarto',
        ];

        for ($i = 0; $i < 1000; $i++) {
            Penduduk::create([
                'nik' => $faker->unique()->numerify('################'), // 16 digit angka
                'nama' => $faker->name(),
                'tempat' => $faker->city(),
                'lahir' => $faker->date('Y-m-d'),
                'gender' => $faker->randomElement(['Laki-laki', 'Perempuan']),
                'desa' => $faker->randomElement($desaList), // Pilih desa dari daftar
                'rt' => $faker->numberBetween(1, 20),
                'rw' => $faker->numberBetween(1, 20),
                'alamat' => $faker->address(),
                'agama' => $faker->randomElement(['Islam', 'Kristen Katolik', 'Hindu', 'Budha', 'Kristen Protestan','Konghucu']),
                'status' => $faker->randomElement(['Belum Kawin', 'Kawin']),
            ]);
        }
    }
}
