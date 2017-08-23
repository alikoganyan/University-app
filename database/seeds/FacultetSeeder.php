<?php

use Illuminate\Database\Seeder;
use App\Facultet;

class FacultetSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $facultets = array('History', 'Law', 'Architecture and Design', 'Information Technology', 'Engenering');
        foreach ($facultets as $facultet) {
            Facultet::create(['name'=> $facultet]);
        }
    }
}
