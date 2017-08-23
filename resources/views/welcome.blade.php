<!doctype html>
<html lang="{{ config('app.locale') }}">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="csrf-token" content="{{ csrf_token() }}">

        <title>Univesity App</title>
        <!-- Scripts -->        
        <script src="/js/manifest.js"></script>
        <script src="/js/vendor.js"></script>
        <script src="/js/app.js"></script>

        <!-- Styles -->
        <link href="{{ asset('css/app.css') }}" rel="stylesheet">
        
    </head>
    <body ng-app="app">
        <nav class="navbar navbar-default navbar-static-top">
            <div class="container">
                <div class="navbar-header">
                    <a class="navbar-brand" href="#">
                        University
                    </a>
                </div>
                <ul class="nav navbar-nav navbar-right">
                    <li><a href="#!facultets">Facultets</a></li>
                    <li><a href="#!groups">Groups</a></li>
                    <li><a href="#!students">Students</a></li>
                </ul>
                
            </div>
        </nav>
        <ng-view></ng-view>
    </body>
</html>
