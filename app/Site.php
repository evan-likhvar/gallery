<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Site extends Model
{
    protected $fillable = [
        'id', 'name', 'content',
    ];

    public function getMyContent($content)
    {
        $patterns = array();
        $patterns[0] = <<<SRVMASSAGE
|<div id="serv_mes"></div>|
SRVMASSAGE;
        $patterns[1] = <<<SRVSTYLE
|<style>#serv_mes{}</style>|
SRVSTYLE;
        $patterns[2] = '|<base.*>|';
        $replacements = array();
        $replacements[0] = <<<SRVMES
<div id="serv_mes"><a href="gallery">ВЕРНУТЬСЯ</a><br><a href="logout">ВЫЙТИ</a></div>
SRVMES;
        $replacements[1] = <<<SRVSTL
<style>
 #serv_mes {
 	position:fixed;
 	top:200px;
 	left:0;
 	height:44px;
 	width:110px;
 	background-color:#aaa;
 	color:#fff;
 	opacity:0.8;
 	z-index:9999;
 	margin-top: -100px;
    border: 2px solid #fff;
    border-radius: 9px;
    text-align: center;
    letter-spacing: 1px;
    font-weight: 500;
    box-shadow: 0 0 22px 0 rgba(0, 0, 0, 0.75);
    font-family: "Helvetica Neue",Helvetica,Arial,sans-serif;
    font-size: 14px;
    line-height: 20px;
 }
#serv_mes a {    
    text-align: center;
    letter-spacing: 1px;
    font-weight: 500;
    font-family: "Helvetica Neue",Helvetica,Arial,sans-serif;
    font-size: 14px;
}
#serv_mes:hover {
	opacity:1;
	background-color:#fff;
	text-shadow: 1px 1px 2px black;
}
#serv_mes a,#serv_mes a:hover {
    color: #333333;
    text-decoration: none;
}
#serv_mes a:hover {
    border-bottom: solid 2px #FF0000;
}
</style>
SRVSTL;
        $replacements[2] = '<base href='.$_SERVER['APP_URL'].'>';
        $content = preg_replace($patterns,$replacements,$content);
        return $content;
    }








}

