<?php
session_start();
$_SESSION['nome'] = 'Johnny';
setcookie('nomecookie', 'valorcookie', time() + (60 * 60 * 24), '/');

echo $_COOKIE['cookie'];
?>