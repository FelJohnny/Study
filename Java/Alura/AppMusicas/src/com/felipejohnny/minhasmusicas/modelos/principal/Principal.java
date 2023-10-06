package com.felipejohnny.minhasmusicas.modelos.principal;
import com.felipejohnny.minhasmusicas.modelos.Musica;
import com.felipejohnny.minhasmusicas.modelos.PodCast;

public class Principal {
    public static void main(String[] args) {
        Musica musica = new Musica();

        musica.setTitulo("Vagalumes cegos");
        musica.setCantor("Cicero");
        musica.setGenero("MPB");
        musica.setAlbum("Canções de Apartamento");
        musica.setDuracaoEmMinutos(4);

        PodCast podCast = new PodCast();

        podCast.setTitulo("POO no mercado de trabalho");
        podCast.setApresentador("Mark Zuk");
        podCast.setDescricao("Demonstrando como POO aagrega em um projeto em equipes e a visão do mercado");
        podCast.setDuracaoEmMinutos(45);


        //Reproduzindo a musica
        for (int i = 0; i < 50; i++) {
            musica.reproduz();
            podCast.reproduz();
        }

        //curtindo a musica
        for (int i = 0; i < 10; i++) {
            musica.curte();
            podCast.curte();
        }

        musica.Ficha();
        podCast.Ficha();
    }
}
