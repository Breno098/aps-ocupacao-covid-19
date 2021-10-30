<?php
use Illuminate\Support\Facades\Route;

use App\Http\Controllers\API\StateController;
use App\Http\Controllers\API\CityController;
use App\Http\Controllers\API\BedController;

Route::get('state', [StateController::class, 'index']);

Route::get('city/{state?}', [CityController::class, 'index']);

Route::get('bed/{city}', [BedController::class, 'byCity']);