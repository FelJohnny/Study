<?php
session_start();

if (isset($_SESSION['nome'])) {
  echo $_SESSION['nome'];
}


unset($_SESSION['nome']); // desabilita a sessão / variavel
session_destroy(); // destroi todas sessões abertas

?>