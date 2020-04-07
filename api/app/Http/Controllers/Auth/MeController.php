<?php

namespace App\Http\Controllers\Auth;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class MeController extends Controller{

   public function __contruct(){
      $this->middleware(["auth:api"]);
   }

   public function __invoke(Request $request){
      // $user = $request->user();
      $user = auth()->user();
      return response()->json(["email" => $user->email, "name" => $user->name]);
   }
}
