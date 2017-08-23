<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Student extends Model
{
    protected $fillable = array('name', 'last_name', 'phone', 'img', 'course_id', 'group_id', 'facultet_id');

    public function course() {
        return $this->belongsTo('App\Course')->select(['id', 'number']);
    }

    public function group() {
        return $this->belongsTo('App\Group')->select(['id', 'name']);
    }

    public function facultet() {
        return $this->belongsTo('App\Facultet')->select(['id', 'name']);
    }
}
