<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Facultet extends Model
{
    protected $fillable = array('name');

    public function students() {
        return $this->hasMany('App\Student');
    }
}
