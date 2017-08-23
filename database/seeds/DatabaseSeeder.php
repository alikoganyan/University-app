<?php

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        // $this->call(UsersTableSeeder::class);
        $this->call(CourseSeeder::class);
        $this->call(GroupSeeder::class);
        $this->call(FacultetSeeder::class);
        $this->call(StudentSeeder::class);
    }
}
