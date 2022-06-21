<?php

namespace App\Http\Controllers;

use App\Http\Resources\scheduleCollection;
use App\Http\Resources\scheduleResource;
use App\Models\schedule;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
class scheduleController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return response()->json( new scheduleCollection(schedule::all()),Response::HTTP_OK);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $schedule = schedule::create($request->only([
            'id', 'event_id','event_date','title','present','description'
        ]));
        return new scheduleResource($schedule);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\schedule  $schedule
     * @return \Illuminate\Http\Response
     */
    public function show(schedule $schedule)
    {
        //
        return new scheduleResource($schedule);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\schedule  $schedule
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, schedule $schedule)
    {
        //
        // dd($request);
        $schedule ->update($request->only([
            'event_id','event_date','title','present','description'
        ])) ;
 
        return new scheduleResource($schedule);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\schedule  $schedule
     * @return \Illuminate\Http\Response
     */
    public function destroy(schedule $schedule)
    {
        //
        $schedule->delete();
        return response()->json(['status' => true]);
        // return
        // return response()->json(null,Response::HTTP_NO_CONTENT);
    }
}
