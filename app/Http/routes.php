<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It's a breeze. Simply tell Laravel the URIs it should respond to
| and give it the controller to call when that URI is requested.
|
*/



Route::auth();

Route::get('/',  'HomeController@gallery');

Route::get('/home', 'HomeController@index');


Route::get('/gallery', 'HomeController@gallery');



//Route::get('/site/{name}','HomeController@site');
//Route::get('/site/{name}', array('as'=>'bla', function($name) {return $name;})
//);

Route::get('/site/{name}', array('as'=>'site','uses'=>'HomeController@site')
);