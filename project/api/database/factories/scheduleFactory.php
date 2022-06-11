<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\schedule>
 */
class scheduleFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {
        return [
            // 'eventDate'=>$this->faker->date(),
             'title' => $this->faker->word(5),
            'present' => $this->faker->name(),
            // 'time'=>$this->faker->Time(),
            'description' => $this->faker->text(50),
            'event_id'=>$this->faker->randomNumber(1,5),
            'event_date'=>$this->faker->date(now())
        ];
    }
}
