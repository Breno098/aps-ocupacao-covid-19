<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

use App\Http\Controllers\API\ClientController;
use App\Http\Controllers\API\AuthController;

Route::post('auth/register', [AuthController::class, 'register']);
Route::post('auth/login', [AuthController::class, 'login']);

Route::middleware('auth:sanctum')->group( function () {
    Route::get('auth/user', [AuthController::class, 'user']);
    Route::post('auth/logout', [AuthController::class, 'logout']);
});

Route::middleware('auth:sanctum')->group( function () {
    Route::get('client', [ClientController::class, 'index']);
    Route::get('client/{id}', [ClientController::class, 'show']);
    Route::post('client', [ClientController::class, 'store']);
    Route::put('client/{client}', [ClientController::class, 'update']);
    Route::delete('client/{client}', [ClientController::class, 'destroy']);
});
