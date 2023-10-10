package com.felipejohnny.modelos;

public class Cartao {
    private double limite;
    private double saldo;


    //construtor
    public Cartao(double limite){
        this.limite = limite;
    }

    //getters and setters
    public double getLimite() {
        return limite;
    }

    public void setLimite(double limite) {
        this.limite = limite;
    }

    public double getSaldo(){
        return saldo;
    }

    public double compra(saldo){
        compra
    }

    @Override
    public String toString() {
        return "Cartão de Crédito: \nlimite: " + this.limite + "\nSaldo: " + this.saldo;
    }
}
