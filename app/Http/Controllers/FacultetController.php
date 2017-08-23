<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Facultet;

class FacultetController extends Controller
{
    public function getAll() {
        return Facultet::orderBy('id')->get();
    }

    public function getOne($id) {
        return Facultet::find($id);
    }

    public function create(Request $request) {
        $facultet = new Facultet();
        $facultet->name = $request->input('name');
        $facultet->save();
        return $facultet->toJson();
    }

    public function update(Request $request, $id) {
        $facultet = Facultet::find($id);
        $facultet->name = $request->input('name');
        $facultet->save();
        return $facultet->toJson();
    }

    public function destroy($id) {
        $facultet = Facultet::find($id);
        $facultet->delete();
        echo $id;        
    }
}
