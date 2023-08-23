<?php

include('Exemplo.class.php');

///instancia de objeto pessoa
$pessoa1 = new pessoa;
$pessoa1->nome = 'Johnny';
$pessoa1->idade = 23;

echo "Nome: $pessoa1->nome, <br>";
echo "idade:  $pessoa1->idade<br>";
echo $pessoa1->crescer();
$pessoa1->setpessoa('Felipe Johnny da Silva <br><br>');
echo $pessoa1->getpessoa();
echo "<hr>";

$pessoa2 = new pessoa;
$pessoa2->nome = 'João';
$pessoa2->idade = 25;
echo "Nome: $pessoa2->nome, <br>";
echo "idade:  $pessoa2->idade<br>";
echo $pessoa2->crescer();
$pessoa1->setpessoa('Joao sobrenome :) <br><br>');
echo $pessoa1->getpessoa();
echo "<hr>";

?>