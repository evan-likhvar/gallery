@extends('layouts.app')

@section('content')
{{--<div class="container">
    <div class="row">
        <div class="col-md-8 col-md-offset-2">
            <div class="panel panel-default">
                <div class="panel-heading">Login</div>
                <div class="panel-body">--}}
<div class="jumbotron text-center" style = "background-color:#f4511e;color: #ffffff;position: absolute;top: 50%;margin-top:-150px;left:0;width:100%;">
    <h1>демо страница</h1>
    <p>для просмотра введите ключевое слово</p>
                    <form class="form-horizontal" role="form" method="POST" action="{{ url('/login') }}">
                        {{ csrf_field() }}

                        <div class="form-group{{ $errors->has('alpha_num') ? ' has-error' : '' }}">
                          {{--  <label for="email" class="col-md-4 control-label">E-Mail Address</label>--}}

                            <div class="col-md-2 col-md-offset-5">
                                <input id="alpha_num" type="alpha_num" class="form-control" name="email" size="50" value="{{ old('email') }}">

                                @if ($errors->has('alpha_num'))
                                    <span class="help-block">
                                        <strong>{{ $errors->first('alpha_num') }}</strong>
                                    </span>
                                @endif
                            </div>
                        </div>

                        <div style="display: none" class="form-group{{ $errors->has('password') ? ' has-error' : '' }}">
                            <label for="password" class="col-md-4 control-label">Password</label>

                            <div class="col-md-12">
                                <input id="password" type="password" class="form-control" name="password" value="123123">

                                @if ($errors->has('password'))
                                    <span class="help-block">
                                        <strong>{{ $errors->first('password') }}</strong>
                                    </span>
                                @endif
                            </div>
                        </div>

{{--                        <div class="form-group">
                            <div class="col-md-6 col-md-offset-4">
                                <div class="checkbox">
                                    <label>
                                        <input type="checkbox" name="remember"> Remember Me
                                    </label>
                                </div>
                            </div>
                        </div>--}}

                        <div class="form-group">
                            <div class="col-md-12">
                                <button type="submit" class="btn btn-danger">
                                    <i class="fa fa-btn fa-sign-in"></i> Login
                                </button>

                                {{--<a class="btn btn-link" href="{{ url('/password/reset') }}">Forgot Your Password?</a>--}}
                            </div>
                        </div>
                    </form>
    </div>
{{--                </div>
            </div>
        </div>
    </div>
</div>--}}
@endsection
