<?php

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST,GET,OPTIONS');
header('Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept');


$catalog = file("catalog.csv", FILE_IGNORE_NEW_LINES);
$tmp = array();
$indexedCatalog = array();

$cartData = json_decode(file_get_contents('php://input'));

// Catalog в ассоциативный массив с ключами по id
foreach($catalog as $item){
    $parts = explode("\\t", $item);
    $tmp['id'] =  $parts[0];
    $tmp['image'] =  $parts[1];
    $tmp['name'] =  $parts[2];
    $tmp['price'] =  $parts[4];
    $tmp['discount'] =  $parts[5];
    $indexedCatalog[$tmp['id']] = $tmp;
    array_push($indexedCatalog, $tmp);
}

$tmp = [];
// Поиск данных в catalog по id из cartData
foreach ($cartData as $cartItem) {
    $itemId = $cartItem->id;
    //echo '$itemId = ', $itemId;  в норме
    if (isset($indexedCatalog[$itemId])) {
        $catalogItem = $indexedCatalog[$itemId];
        $cartItemArr = (array)$cartItem;
        $mergedArray = array_merge($cartItemArr, $catalogItem);
        array_push($tmp, $mergedArray);
    }
}
echo json_encode($tmp);

?>