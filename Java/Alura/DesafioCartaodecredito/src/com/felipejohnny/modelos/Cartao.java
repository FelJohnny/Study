package com.felipejohnny.modelos;

import java.util.ArrayList;
import java.util.List;

public class Cartao {
    private double limite;
    private double saldo;

    private List<Produto> carrinho;

    //construtor
    public Cartao(double limite){

        this.limite = limite;
        this.limite = saldo;
        this.carrinho = new ArrayList<>();
    }

    public boolean lancaCompra(Produto compra){
        if(this.saldo < compra.getValor()){
            //subtrai valor do saldo limite
            this.saldo -= compra.getValor();
            //adiciona o objeto na lista
            this.carrinho.add(compra);
            return true;
        }else{
            return false;
        }

    }
    //getters
    public double getLimite() {
        return limite;
    }
    public double getSaldo(){
        return saldo;
    }

    public List<Produto> getCarrinho() {
        return carrinho;
    }

    @Override
    public String toString() {
        return "Cartão de Crédito: \nlimite: " + limite + "\nSaldo: " + saldo;
    }
}
