package com.felipejohnny.principal;

import com.felipejohnny.modelos.Cartao;

import java.util.Scanner;

public class Principal {
    public static void main(String[] args) {

        Scanner scanner = new Scanner(System.in);
        System.out.println("informe o limite do cartão: ");
        double limite = scanner.nextDouble();
        Cartao cartao = new Cartao(limite);

        System.out.println(cartao);

    }
}
