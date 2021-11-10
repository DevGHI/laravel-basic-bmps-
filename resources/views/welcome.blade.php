<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
<body>
    <ul>
        @foreach ($data as $key=>$product)
        <li><a href="{{ route('website.product-detail',['product_id'=>$product])}}"> product {{$product}}</a></li>
        @endforeach

    </ul>

</body>
</html>
