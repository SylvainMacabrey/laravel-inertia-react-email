<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\PropertyController;

Route::get('/', [PropertyController::class, 'index'])->name('property.index');
Route::get('/biens/{property}', [PropertyController::class, 'show'])->name('property.show');
Route::post('/biens/{property}/contact', [PropertyController::class, 'contact'])->name('property.contact');
