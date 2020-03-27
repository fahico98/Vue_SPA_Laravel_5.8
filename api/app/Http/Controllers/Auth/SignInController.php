<?php

namespace App\Http\Controllers\Auth;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class SignInController extends Controller{

   public function __invoke(Request $request){
      $token = auth()->attempt($request->only("email", "password"));
      return $token ? response()->json(compact("token")) : response(null, 401);
   }
}
