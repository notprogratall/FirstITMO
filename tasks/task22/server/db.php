<?php

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST,GET,OPTIONS');
header('Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept');


$data = json_decode(file_get_contents('php://input'));


if (isset($data->id_sender) && isset($data->id_reciever) && isset($data->message) && isset($data->id)) {
    $data = array($data->id_sender, $data->id_reciever, $data->message, $data->id);
    $fp = fopen('chatdb.csv', 'a+');
    fputcsv($fp, $data);
    fclose($fp);
    $result = array('code' => 200, 'message' => 'Все ОК !');
    echo json_encode($result);
} else {
    echo $data->id_sender;
    echo $data->id_reciever;
    echo $data->message;
    $error = array('code' => 500, 'message' => 'Не хватает параметров');
    echo json_encode($error);
}

?>
