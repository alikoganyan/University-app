<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});


/**
* Routes for Facultet API
*/
Route::get('facultet', 'FacultetController@getAll');
Route::get('facultet/{id}', 'FacultetController@getOne');
Route::post('facultet', 'FacultetController@create');
Route::put('facultet/{id}', 'FacultetController@update');
Route::delete('facultet/{id}', 'FacultetController@destroy');

/**
* Routes for Group API
*/
Route::get('group', 'GroupController@getAll');
Route::get('group/{id}', 'GroupController@getOne');
Route::post('group', 'GroupController@create');
Route::put('group/{id}', 'GroupController@update');
Route::delete('group/{id}', 'GroupController@destroy');

/**
* Routes for Student API
*/
Route::get('student', 'StudentController@getAll');
Route::get('student/{id}', 'StudentController@getOne');
Route::post('student', 'StudentController@create');
Route::put('student/{id}', 'StudentController@update');
Route::delete('student/{id}', 'StudentController@destroy');
