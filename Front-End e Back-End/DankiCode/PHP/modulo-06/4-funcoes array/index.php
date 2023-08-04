<?php
    $var1 = array("cor" =>"vermelho", 2,4);
    $var2 = array("a","b", "cor"=>"verde","forma"=>"trapezoide",4);
    $result = array_merge($var1, $var2);//uni os arrays
    print_r($result);
    
    $array1 = array("chave1"=>"valor1","chave2"=>"valor2");
    $array2 = array("chave2"=>"valor3","chave4"=>"valor5");

    print_r(array_intersect_key($array1,$array2)); // mostra conteudo de arrays com chaves iguais


    array_map('funcao',$arr)//aplica função em todo elementos do array
?>