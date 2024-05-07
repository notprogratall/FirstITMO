<?php

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST,GET,OPTIONS');
header('Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept');


$messages = file("chatdb.csv");
$data = [];
$tmp = [];


$last_reciver_message = json_decode(file_get_contents('php://input'));
$last_message_is_finded = false;
if ($last_reciver_message->lastReaderMsgID == 'not found') {
    $last_message_is_finded = true;    
} else {
    $last_message_is_finded = false;
}


foreach($messages as $item){
    $parts = explode(",", $item);
    $tmp['id'] =  $parts[3];
    if ($tmp['id'] == $last_reciver_message->lastReaderMsgID) {
        $last_message_is_finded = true;
        continue;
    }
    if ($parts[1] == $last_reciver_message->senderID && $last_message_is_finded == true) {
        $tmp['id_sender'] =  $parts[0];
        $tmp['id_reciever'] =  $parts[1];
        $tmp['message'] =  $parts[2];
        $tmp['name'] =  "R";

        array_push($data, $tmp);
    }
}
    echo json_encode($data);
?>
