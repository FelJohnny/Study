<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Formulario</title>
</head>
<body>



<form method="post">
    <label for="nome">nome</label></br>
    <input type="text" name="nome" id="nome"></br>
    <label for="email">Email:</label></br>
    <input type="email" name="email" id="email"></br>
    <label for="senha">Senha</label></br>
    <input type="password" name="senha" id="senha"></br>
    
    <select name="linguagens" id="">
        <option value="1">portugues</option>
        <option value="2">ingles</option>
    </select>
    <input type="submit" name="acao" value="enviar">
    </form>
</body>

<?php
    if(isset($_POST['acao'])){ // com POST fica oculto no url e é enviado dinamicamente para o servidor
        $nome = $_POST['nome'];
        $email = $_POST['email'];
        $senha = $_POST['senha'];
        $linguagem = $_POST['linguagens'];
        
        echo '</br>';
        echo $nome;
        echo '</br>';
        echo $email;
        echo '</br>';
        echo $senha;
        echo '</br>';
        echo $linguagem;



    }
?>
</html>