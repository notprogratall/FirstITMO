<?php

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST,GET,OPTIONS');
header('Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept');


$messages = file("chatdb.csv");

$message_id = json_decode(file_get_contents('php://input'));
echo json_encode($message_id);
$fp = fopen('chatdb.csv', 'w+');
//echo json_encode($messages);

if ($message_id != "all") {
    //echo "$message_id != all";
    foreach($messages as $item){
        $item = substr($item,0,-1);
        $parts = explode(",", $item);
        //echo $parts[3];
        if ($parts[3] == $message_id) {
            continue;
        }
        //echo json_encode($parts);
        fputcsv($fp, $parts);
    }
}
fclose($fp);
?>
