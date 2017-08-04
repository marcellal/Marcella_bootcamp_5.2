<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateComingsoonEventsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('comingsoon_events', function (Blueprint $table) {
            $table->increments('cse_id');
            $table->integer('event_id')->unsigned();
            $table->foreign('event_id')->references('event_id')->on('events');
            $table->datetime('started');
            $table->datetime('ended');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('comingsoon_events');
    }
}
