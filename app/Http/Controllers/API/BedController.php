<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Services\Bed\IndexService;
use Illuminate\Http\Request;

class BedController extends Controller
{
    public function byCity(string $city, IndexService $indexService)
    {
        $beds = $indexService->run($city);

        return response()->json($beds);
    }
}
