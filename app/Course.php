<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Course extends Model
{
    protected $fillable = array('number');

    public function students() {
        return $this->hasMany('App\Student');
    }
}
