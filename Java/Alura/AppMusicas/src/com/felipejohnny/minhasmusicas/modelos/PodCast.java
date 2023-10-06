package com.felipejohnny.minhasmusicas.modelos;

public class PodCast extends Audio{
    private String apresentador;
    private  String descricao;


    public String getApresentador() {
        return apresentador;
    }

    public void setApresentador(String apresentador) {
        this.apresentador = apresentador;
    }

    public String getDescricao() {
        return descricao;
    }

    public void setDescricao(String descricao) {
        this.descricao = descricao;
    }

    @Override
    public void Ficha() {
        System.out.println("Apresentador: " + getApresentador());
        System.out.println("Descrição: " + getDescricao());
        super.Ficha();
    }
}
