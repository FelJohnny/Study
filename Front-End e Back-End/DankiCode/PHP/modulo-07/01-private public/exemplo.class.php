<?php
class pessoa
{
    public $nome = 'johnny';
    public $idade = 23;
    private $altura = 1.76;

    public function crescer()
    {
        echo 'estou crescendo <br>';
        $this->comer(); //chamando o metodo privado
    }
    private function comer() // estando private esse metodo não pode ser acessado de fora da classe
    {
        echo 'estou comendo';
    }
}

$pessoa = new pessoa;

$pessoa->crescer();

?>