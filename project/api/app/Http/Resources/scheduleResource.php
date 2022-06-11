<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class scheduleResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function toArray($request)
    {
        return [
            'id'=>$this->id,
            'event_id' =>$this->event_id,
            'event_date' => $this->event_date,
            'title' => $this->title,
            'present' => $this->present,
            'description' => $this->description,
        ];
    }
}
