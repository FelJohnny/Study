<?php

include('Exemplo.class.php');

///instancia de objeto pessoa
$classePai = new classePai;
$classePai->setnomeclasse('classe Pai');
echo $classePai->mostranomeclasse();
echo "<hr>";

$classFilho = new classFilho;
//metodo da classepai foi herdada na classe filho
$classFilho->setnomeclasse('classe Filho');
echo $classFilho->mostranomeclasse();
echo "<hr>";

?>