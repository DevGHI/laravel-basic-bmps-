<?php

use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ContactController;
use App\Http\Controllers\WebFrontend\AboutController;
use App\Http\Controllers\WebFrontend\ProductController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});


Route::get('/about',[AboutController::class,'aboutPage']);
// Route::get('about','AboutContrller@aboutPage');


Route::get('contact',[ContactController::class,'contactPage']);


Route::get('products',function(){
    return view('product');
});

Route::get('shops',function(){
    return view('shops.shop');
});

Route::get('products/{product_id}/shop/{shop_id}',[ProductController::class,'productPage']);

