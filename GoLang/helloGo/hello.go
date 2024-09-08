package main

import (
	"fmt"
	"reflect"
)

func main() {
	var nome = "Johnny"
	//ou
	nome2 := "Johnny"

	var altura float32 = 1.75
	var idade int = 24
	fmt.Println("hello world")
	fmt.Println("nome: ", nome)
	fmt.Println("nome: ", nome2)
	fmt.Println("altura", altura)
	fmt.Println("idade:", idade)

	fmt.Println("O tipo da variavel é: ", reflect.TypeOf(nome))
	fmt.Println("O tipo da variavel é: ", reflect.TypeOf(nome2))
}
