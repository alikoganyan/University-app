<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Http\Response;
use App\Group;

class GroupController extends Controller
{
    public function getAll() {
        return Group::orderBy('name')->get();
    }

    public function getOne($id) {
        return Group::find($id);
    }

    public function create(Request $request) {
        $group = new Group();
        $group->name = $request->input('name');
        $group->save();
        return $group->toJson();
    }

    public function update(Request $request, $id) {
        $group = Group::find($id);
        $group->name = $request->input('name');
        $group->save();
        return $group->toJson();
    }

    public function destroy($id) {
        $group = Group::find($id);
        $group->delete();
        echo $id;        
    }
}
