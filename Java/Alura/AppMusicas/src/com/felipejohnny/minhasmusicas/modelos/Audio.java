package com.felipejohnny.minhasmusicas.modelos;

public class Audio {
    private String titulo;
    private int duracaoEmMinutos;
    private int totalReproducao;
    private int totalDeReproducaoMinutos;
    private int classificacao;
    private int TotalCurtidas;


    public String getTitulo() {
        return titulo;
    }

    public void setTitulo(String titulo) {
        this.titulo = titulo;
    }

    public int getTotalDeReproducaoMinutos() {
        return totalDeReproducaoMinutos;
    }

    public int getTotalCurtidas() {
        return TotalCurtidas;
    }

    public int getClassificacao() {
        return classificacao;
    }

    public int getDuracaoEmMinutos() {
        return duracaoEmMinutos;
    }

    public void setDuracaoEmMinutos(int duracaoEmMinutos) {
        this.duracaoEmMinutos = duracaoEmMinutos;
    }

    public void curte(){
        this.TotalCurtidas++;
    }

    public void reproduz(){
        for (int i = 0; i < duracaoEmMinutos; i++) {
            this.totalDeReproducaoMinutos++;
        }
        totalReproducao++;
    }
    public void Ficha(){

        System.out.println("Titulo: " + getTitulo());
        System.out.println("Duração: " + getDuracaoEmMinutos() + " minutos");
        System.out.println("No total foi reproduzido " + getTotalDeReproducaoMinutos() + " minutos");
        System.out.println("Classificação " + getClassificacao() + " estrelas");
        System.out.println("Total de curtidas: " + getTotalCurtidas());
        System.out.println("***************************");

    }
}
