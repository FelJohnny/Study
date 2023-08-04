<?php
    session_start();
    $_SESSION['nome'] = 'Johnny';
    setcookie('cookie', 'nomecookie',time() + (60*60*24), '/');
    
    echo $_COOKIE['cookie'];
?>