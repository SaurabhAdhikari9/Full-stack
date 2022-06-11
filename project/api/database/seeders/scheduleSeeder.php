<?php

namespace Database\Seeders;

use App\Models\schedule;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class scheduleSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        schedule::factory()->times(10)->create();
    
        //
    }
}
