@extends('layouts.master')


@section('title','About')

@section('css')
<link rel="stylesheet" href="{{asset('css/about.css')}}">
@endsection



@section('content')


<h2 class="text">This is About</h2>
<img src="{{url('image/aa.jpg')}}">

@endsection

@section('js')
<script src="{{asset('js/about.js')}}"></script>
@endsection
