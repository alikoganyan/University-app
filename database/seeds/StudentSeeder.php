<?php

use Illuminate\Database\Seeder;
use App\Student;

class StudentSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $names = array("Hana", "Ben", "Joe", "Jane", "Abel", "Adam", "Abraham", "Caitlin", "Cara");
        $last_names = array("Smith", "Jones", "Williams", "White", "Jackson", "Whalker", "Foster");


        for ($i=0; $i < 30; $i++) {
            Student::create([
                'name' => $names[array_rand($names)],
                'last_name' => $last_names[array_rand($last_names)],
                'phone' => '+374'. rand(11111111,99999999),
                'course_id' => rand(1, 5),
                'group_id' => rand(1, 4),
                'facultet_id' => rand(1, 5)
            ]);
        }
    }
}
