<?php

use App\Http\Controllers\apiController;
use App\Http\Controllers\ApiSchedule;
use App\Http\Controllers\scheduleController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

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

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

// Route::get('/api', [apiController::class,'index']);
// Route::post('/api',[apiController::class,'store']);
// instead of these two lines
// we can do
Route::apiResource('/api', apiController::class);
Route::apiResource('/schedules',scheduleController::class);

// Route::resource  
