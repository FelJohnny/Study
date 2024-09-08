package main

import (
	"fmt"
	"os"
	"strconv"
)

func main() {
	nome := "johnny"
	fmt.Println("Ola ", nome)

	for {
		// Mostra o menu de opções
		fmt.Println("1 - Iniciar Monitoramento")
		fmt.Println("2 - Exibir Logs")
		fmt.Println("0 - Sair do programa")

		// Captura a entrada como string
		var comando string
		fmt.Scan(&comando)

		// Exibe os comandos com base no input do usuário
		exibirComandos(comando)
	}
}

func exibirComandos(comando string) {
	// Tenta converter a entrada para int
	comandoInt, err := strconv.Atoi(comando)
	if err != nil {
		fmt.Println("Por favor, insira um número válido.")
		return // sai da função se o número não for válido
	}

	// Verifica o comando digitado
	switch comandoInt {
	case 1:
		fmt.Println("Iniciando monitoramento")
	case 2:
		fmt.Println("Exibindo logs")
	case 0:
		fmt.Println("Saindo do programa")
		os.Exit(0)
	default:
		fmt.Println("Por favor, insira um número válido.")
	}
}
