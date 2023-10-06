package com.felipejohnny.minhasmusicas.modelos;

public class Audio {
    private String titulo;
    private int totalDeReproducao;
    private int TotalCurtidas;
    private double classificacao;


    public String getTitulo() {
        return titulo;
    }

    public void setTitulo(String titulo) {
        this.titulo = titulo;
    }

    public int getTotalDeReproducao() {
        return totalDeReproducao;
    }

    public int getTotalCurtidas() {
        return TotalCurtidas;
    }

    public double getClassificacao() {
        return classificacao;
    }

    public void curte(){
        this.TotalCurtidas++;
    }

    public void reproduz(){
        this.totalDeReproducao++;
    }
}
