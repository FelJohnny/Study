package com.felipejohnny.principal;

import com.felipejohnny.modelos.Cartao;
import com.felipejohnny.modelos.Produto;

import java.util.Collection;
import java.util.Collections;
import java.util.Scanner;

public class Principal {
    public static void main(String[] args) {

        Scanner scanner = new Scanner(System.in);
        System.out.println("informe o limite do cartão: ");

        Cartao cartao = new Cartao(scanner.nextDouble());


        int sair =1;
        while (sair != 0){
            System.out.println("Insira a descrição do produto: ");
            String descricao = scanner.next();
            System.out.println("Insira o valor do produto");
            double valor = scanner.nextDouble();
            Produto produto = new Produto(descricao, valor);

            //retorna true ou falso baseado no falso
            boolean solicitacaoCompra = cartao.lancaCompra(produto);

            if (solicitacaoCompra) {
                System.out.println("compra aprovada");
                //aplicando ordenação creçente
                Collections.sort(cartao.getCarrinho());
                for (Produto lista: cartao.getCarrinho()) {
                    System.out.println("Descrição do produto: " + lista.getDescricao() +" Valor: " + lista.getValor());
                }
            }
            System.out.println("Pressione 0 para SAIR e 1 para continuar");
            sair = scanner.nextInt();

            while (sair != 1 && sair != 0){
              System.out.println("opção invalida, informe um numero entre 0 (SAIR) e 1(CONTINUAR)");
              sair = scanner.nextInt();
            }
        }
    }
}

