<?php

namespace Database\Seeders;

use Faker\Generator;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class PropertySeeder extends Seeder
{

    public function __construct(Generator $faker) {
        $this->faker = $faker;
    }

    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        for($i = 0; $i < 50; $i++) {
            DB::table('properties')->insert([
                'title' => $this->faker->words(3, true),
                'description' => implode("\n\n", $this->faker->paragraphs(3)),
                'price' => $this->faker->numberBetween(50000, 500000),
                'size' => $this->faker->numberBetween(10, 500),
                'rooms' => $this->faker->numberBetween(1, 4),
                'bedrooms' => $this->faker->numberBetween(1, 3),
                'floor' => $this->faker->numberBetween(1, 30),
                'postalCode' => $this->faker->postcode,
                'city' => $this->faker->city,
                'parking' => $this->faker->boolean,
            ]);
        }
    }
}
