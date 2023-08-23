<?php

function myautoload($class)
{
    $class = str_replace('\\', '/', $class); //substitui a barra invertida por bara(para funcionar em servidores linux)
    //se o arquivo existir..
    if (file_exists('class/' . $class . '.php')) {
        include('class/' . $class . '.php');
    }
}

spl_autoload_register('myautoload');

?>