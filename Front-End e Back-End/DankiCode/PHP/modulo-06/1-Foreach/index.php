<?php

$var = array('chave1'=>'johnny','felipe','lucas','rafael');

//key sempre segue sequencia
foreach($var as $key => $value){
    echo '<hr>';
    echo $key;
    echo ' = ';
    echo $value;
}
?>