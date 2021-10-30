<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Services\State\IndexService;
use Illuminate\Http\Request;

class StateController extends Controller
{
    public function index(IndexService $indexService)
    {
        $states = $indexService->run();

        return response()->json([
            'states' => $states
        ]);
    }
}
