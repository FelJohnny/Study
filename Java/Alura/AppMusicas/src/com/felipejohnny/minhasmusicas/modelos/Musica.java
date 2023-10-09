package com.felipejohnny.minhasmusicas.modelos;

public class Musica extends Audio{
    private  String Album;
    private String Genero;
    private String cantor;


    public String getAlbum() {
        return Album;
    }

    public void setAlbum(String album) {
        Album = album;
    }

    public String getGenero() {
        return Genero;
    }

    public void setGenero(String genero) {
        Genero = genero;
    }

    public String getCantor() {
        return cantor;
    }

    public void setCantor(String cantor) {
        this.cantor = cantor;
    }

    @Override
    public int getClassificacao() {
        if(getTotalCurtidas() >= 10){
            return 5;
        }else{
            return 3;
        }
    }

    @Override
    public void Ficha() {
        System.out.println("Cantor: " + getCantor());
        System.out.println("Album: " + getAlbum());
        System.out.println("Genero: " + getGenero());
        super.Ficha();
    }
}
