<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Services\City\IndexService;
use Illuminate\Http\Request;

class CityController extends Controller
{
    public function index(string $state = '', IndexService $indexService)
    {
        $cities = $indexService->run($state);

        return response()->json($cities);
    }
}
