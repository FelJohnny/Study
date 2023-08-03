<?PHP
    $nome = array('johnny','vitor','maria');
    echo $nome[0];
    echo '<pre>';
    
    echo $nome[2];
    echo '<pre>';

//preenche automaticamente a proxima array
    $nome[] = 'pablo';
    echo $nome[3];
    echo '<pre>';

//pode misturar tipos de variaveis

$variaveis = array('teste' ,23);


$informacao['nome'] = 'nome1';
$informacao['idade'] = 23;
$informacao['cidade'] = 'suzano';

echo $informacao['nome'];
echo '<pre>';

echo $informacao['idade'];
echo '<pre>';

echo $informacao['cidade'];


?>