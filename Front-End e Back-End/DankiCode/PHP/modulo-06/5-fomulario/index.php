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
    
    <input type="checkbox" name="genero[]" >Masculino<br>
    <input type="checkbox" name="genero[]">Feminino<br>
    <input type="checkbox" name="genero[]">Outro <br>
    <input type="checkbox" name="genero[]">prefiro naao informar <br>
    <input type="submit" name="acao" value="enviar">
    <select name="linguagens" id="">
        <option value="1">portugues</option>
        <option value="2">ingles</option>
    </select><br>
    </form>
</body>

<?php
    if(isset($_POST['acao'])){ // com POST ao inves de GET as informações ficam oculto no url e é enviado dinamicamente para o servidor
        $nome = $_POST['nome'];
        $email = $_POST['email'];
        $senha = $_POST['senha'];
        $linguagem = $_POST['linguagens'];
        foreach($_POST['genero'] as $key => $genero){
            echo $key;
            echo $genero;
        };

        
        echo '</br>';
        echo $nome;
        echo '</br>';
        echo $email;
        echo '</br>';
        echo $senha;
        echo '</br>';
        echo $linguagem;
        echo '</br>';
        echo $genero;



    }
?>
</html>