<?php
class classePai
{
    public $nomeclasse;

    public function setnomeclasse($nomeclasse)
    {
        $this->nomeclasse = $nomeclasse;
    }
    public function mostranomeclasse()
    {
        return $this->nomeclasse;
    }
}

//aplica herança dos metodos e atributos da classe informada após 'extends'
class classFilho extends classePai
{

}


?>