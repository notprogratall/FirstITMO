<?php

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST,GET,OPTIONS');
header('Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept');


$catalog = file("catalog.csv", FILE_IGNORE_NEW_LINES);
$data = [];
$tmp = [];

foreach($catalog as $item){
    $parts = explode("\\t", $item);
    $tmp['id'] =  $parts[0];
    $tmp['image'] =  $parts[1];
    $tmp['name'] =  $parts[2];
    $tmp['description'] =  $parts[3];
    $tmp['price'] =  $parts[4];
    $tmp['discount'] =  $parts[5];
    array_push($data, $tmp);
}
    echo json_encode($data);



// $file="largefile.txt";
// $linecount = 0;
// $handle = fopen($file, "r");
// while(!feof($handle)){
//   $line = fgets($handle);
//   $linecount++;
// }

// fclose($handle);

// echo $linecount;
// fgets: это функция PHP для считывания строки из файла.
// $handle: это файловый указатель, который был получен при открытии файла 
// с помощью функции fopen. Файловый указатель указывает на текущую позицию в файле.
?>