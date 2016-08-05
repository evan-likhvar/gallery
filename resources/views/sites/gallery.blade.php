<!DOCTYPE html>
<html lang="en">
<head>
    <title>gallery</title>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="http://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.2/jquery.min.js"></script>
    <script src="http://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/js/bootstrap.min.js"></script>


    <style type="text/css">
        *{transition: all 700ms cubic-bezier(0.23, 1, 0.32, 1) 0s;}

        img {
            display: block;
            margin-left: auto;
            margin-right: auto;
            opacity:0.5;
            transition: opacity transform  0.6s ease-out 0.5s;
        }

        img:focus, img:hover {
            opacity:1;
            transform: scale(1.05);
        }

        .col-lg-1, .col-lg-10, .col-lg-11, .col-lg-12, .col-lg-2, .col-lg-3, .col-lg-4, .col-lg-5, .col-lg-6, .col-lg-7, .col-lg-8, .col-lg-9, .col-md-1, .col-md-10, .col-md-11, .col-md-12, .col-md-2, .col-md-3, .col-md-4, .col-md-5, .col-md-6, .col-md-7, .col-md-8, .col-md-9, .col-sm-1, .col-sm-10, .col-sm-11, .col-sm-12, .col-sm-2, .col-sm-3, .col-sm-4, .col-sm-5, .col-sm-6, .col-sm-7, .col-sm-8, .col-sm-9, .col-xs-1, .col-xs-10, .col-xs-11, .col-xs-12, .col-xs-2, .col-xs-3, .col-xs-4, .col-xs-5, .col-xs-6, .col-xs-7, .col-xs-8, .col-xs-9 {
            padding: 15px;
        }

        .dwrap {
            opacity:0.5;
        }
        .dwrap:focus, .dwrap:hover {
            opacity:1;
        }
        .animated {-webkit-animation-duration: 1s;animation-duration: 1s;-webkit-animation-fill-mode: both;animation-fill-mode: both;}
        @-webkit-keyframes zoomIn {from {opacity: 0;-webkit-transform: scale3d(.3, .3, .3);transform: scale3d(.3, .3, .3);}50% {opacity: 1;}}
        @keyframes zoomIn {from {opacity: 0;-webkit-transform: scale3d(.3, .3, .3);transform: scale3d(.3, .3, .3);}50% {opacity: 1;}}
        .zoomIn {-webkit-animation-name: zoomIn;animation-name: zoomIn;}


    </style>
</head>
<body class="bg-success"  >

<div class="container-fluide">
    <div class="row">
        @foreach($sites as $site)
        <div class="col-lg-3 col-md-4 col-sm-6 col-xs-12 bg-info ">
            <a href="{{route('site', $site->name)}}">
                <div class="dwrap animated zoomIn">
                    <img class="img-responsive" src="images/{{$site->fullimg}}" alt="{{$site->name}}">
                </div>
            </a>
        </div>
            @endforeach
    </div>

</div>

</body>
</html>
