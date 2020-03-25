<?php

namespace App\Http\Controllers\Auth;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class SingInController extends Controller{

   public function __invoke(Request $request){
      return $token = auth()->attempt($request->only("email", "password")) ?
         response()->json(compact("token")) :
         response(null, 401);
   }
}
