<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Http\Response;
use App\Student;
use Storage;

class StudentController extends Controller
{
    public function getAll()
    {
        $students = Student::with('course', 'group', 'facultet')->orderBy('id')->get();

        foreach ($students as $student) {
            if ($student->img) {
                $student->img = $this->transformToBase64($student->img);
            }
        }

        return $students;
    }

    public function getOne($id)
    {
        $student = Student::find($id);
        if (!$student) {
            return response('Resource not found', 404);
        }

        if ($student->img) {
            $student->img = $this->transformToBase64($student->img);
        }

        return $student->toJson();
    }

    public function create(Request $request)
    {
        $student = new Student($request->all());
        if ($request->hasFile('img')) {
            $path = $request->img->store('public');
            $student->img = $path;
        }
        $student->save();
        return $student->toJson();
    }

    public function update(Request $request, $id)
    {
        $student = Student::find($id);
        if (!$student) {
            return response('Resource not found', 404);
        }

        $student->name = $request->input('name');
        $student->last_name = $request->input('last_name');
        $student->phone = $request->input('phone');
        $student->course_id = $request->input('course_id');
        $student->group_id = $request->input('group_id');
        $student->facultet_id = $request->input('facultet_id');
        
        if ($request->hasFile('img')) {
            $path = $request->img->store('public');
            $student->img = $path;
        }

        $student->save();
        return $student->toJson();
    }

    public function destroy($id)
    {
        $student = Student::find($id);
        if (!$student) {
            return response('Resource not found', 404);
        }
        
        $student->delete();
        echo $id;
    }

    private function transformToBase64($imgName)
    {
        $imgType = \explode('.', $imgName)[1];
        $data = Storage::get($imgName);
        $base64 = 'data:image/' . $imgType . ';base64,' . base64_encode($data);
        return $base64;
    }
}
