<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Group extends Model
{
    protected $fillable = array('name');

    public function students() {
        return $this->hasMany('App\Student');
    }
}
