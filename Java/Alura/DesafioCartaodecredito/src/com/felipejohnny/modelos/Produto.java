package com.felipejohnny.modelos;

public class Produto implements  Comparable<Produto>{
    private String descricao;
    private double valor;

    public Produto(String descricao, double valor) {
        this.descricao = descricao;
        this.valor = valor;
    }

    public String getDescricao(){
        return this.descricao;
    }
    public double getValor() {
        return valor;
    }


    public String toString(){
        return "Descrição do Produto:" + this.descricao + "\n valor: " + this.valor;
    }

    @Override
    public int compareTo(Produto outraCompra) {
        return Double.valueOf(this.valor).compareTo(Double.valueOf(outraCompra.valor));
    }
}
