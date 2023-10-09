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
<<<<<<< HEAD
        if(getTotalCurtidas() >= 10){
            return 5;
        }else{
            return 3;
=======
        if(getTotalCurtidas() > 10){
            return 5;
        }else{
            return 2;
>>>>>>> b97d405c5b4f1e010007c1579c790a77e1eed165
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
