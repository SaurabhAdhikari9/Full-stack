<?php

namespace App\Http\Controllers;

use App\Models\api;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use App\Http\Resources\apiResource;
use App\Http\Resources\apiCollection;

class apiController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        // return apiResource::collection(api::all());
        return response()->json( new apiCollection(api::all()),Response::HTTP_OK);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $api = api::create($request->only([
            'title', 'description', 'category','author', 'signees'
        ]));
        return new apiResource($api);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\api  $api
     * @return \Illuminate\Http\Response
     */
    public function show(api $api)
    {
        return new apiResource($api);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\api  $api
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, api $api)
    {
       $api ->update($request->only([
           'title', 'description', 'category', 'author', 'signees'
       ])) ;

       return new apiResource($api);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\api  $api
     * @return \Illuminate\Http\Response
     */
    public function destroy(api $api)
    {
        $api->delete();
        return response()->json(null,Response::HTTP_NO_CONTENT);
    }
}
