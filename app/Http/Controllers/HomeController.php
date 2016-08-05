<?php

namespace App\Http\Controllers;

use App\Http\Requests;
use App\Site;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class HomeController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('auth');
    }

    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return view('home');
    }
    public function main()
    {
        return view('welcome');
    }


    public function gallery()
    {
        $cur_user = Auth::user();
        if ($cur_user->id != 1)
            return redirect()->guest('logout');

        $sites = site::all();
        
        return view('sites.gallery',compact('sites'));
    }


    public function site($name)
    {

        $site = site::where('name',$name)->get();

        $user_id = $site->first()->user_id; //номер юзера-владельца страницы

return $site->first()->getMyContent($site->first()->content);

/*        $truth = json_decode($site);
        $a = $truth[0]->content;            // полная страница без экранирования

        $cur_user = Auth::user();

        if ($cur_user->id == 1 || $cur_user->id == $user_id)
            return view('sites.singlesite')->with('a',$a);
        else
            return redirect('/');*/
    }
}
