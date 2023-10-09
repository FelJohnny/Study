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
    public int getClassificacao() {
<<<<<<< HEAD
        if(getTotalDeReproducaoMinutos() >= 45 ){
            return 5;
        }else{
            return 0;
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
        System.out.println("Apresentador: " + getApresentador());
        System.out.println("Descrição: " + getDescricao());
        super.Ficha();
    }
}
