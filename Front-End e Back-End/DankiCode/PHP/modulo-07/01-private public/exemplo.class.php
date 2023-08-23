<?php
class pessoa
{
    public $nome;
    public $idade = 23;
    private $altura = 1.76;

    public function crescer()
    {
        echo "esta crescendo <br>";
        $this->comer(); //chamando o metodo privado
    }

    // estando private esse metodo não pode ser acessado de fora da classe
    //statico não pode ser alterado pelo objeto, sempre sera  isso, só pode ser alterado pela propria classe
    private static function comer()
    {
        echo 'esta comendo<br><br>';
    }


    public function setpessoa($nome)
    {
        $this->nome = $nome;
    }
    public function getpessoa()
    {
        return $this->nome;
    }
}



?>