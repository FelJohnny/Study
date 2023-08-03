<?php
    function mostrarnome($nome){
        echo '<h2>Meu nome é </h2>'.$nome;
    }

    mostrarnome('johnny');

    function calculadora($valor1,$valor2=10){
        echo '<br>';
        echo $valor1 + $valor2;
    }

    calculadora(5);

    function verdade(){
        return true;
    }

    echo '<br>';
    echo verdade();
    $var = verdade();

    echo '<br>';
    echo $var;
?>