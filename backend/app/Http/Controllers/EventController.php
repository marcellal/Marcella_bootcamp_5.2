<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class EventController extends Controller
{
     function getData(){


        $eventlist = event::get();

        return response()->json($eventlist, 200);
    }

    function addData(Request $request){
        DB::beginTransaction(); 
        try{
           
            $event_name = $request->input('event_name');
            $date = $request->input('date');
            $price = $request->input('price');
            $total_qty = $request->input('total_qty');
            $venue = $request->input('venue');


           
            $usr = new event; 
            $usr->event_name = $event_name; 
            $usr->date = $date;
            $usr->price = $price;
            $usr->total_qty = $total_qty;
            $usr->venue = $venue;
            $usr->save();

            $eventlist = event::get();

            DB::commit();
            return response()->json($eventlist, 200);
        }

        catch(\Exception $e){
            DB::rollBack();
            return response()->json(["message" => $e->getMessage()],500);

        }
    }
}
