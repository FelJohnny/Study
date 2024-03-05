
package aula3_imposto;

import javax.swing.JOptionPane;


public class Funcionario {
    public String nome;
    public int registro;
    public double salario;
    public double idade;


    public void cadastrar(){
        
        this.nome =  JOptionPane.showInputDialog("insira o nome do funcionario");
        this.registro =  Integer.parseInt(JOptionPane.showInputDialog("insira o registro do funcionario"));
        this.salario =  Double.parseDouble(JOptionPane.showInputDialog("insira o salario"));
        this.idade =  Integer.parseInt(JOptionPane.showInputDialog("insira a idade"));
        JOptionPane.showMessageDialog(null,"Funcionario cadastrado com sucesso");
    }
    
    public void exibeFuncionario(){
        JOptionPane.showMessageDialog(null, "nome: "+ this.nome + "\nIdade:" + this.registro + "\nsalario: " +this.salario +"\nidade: " +this.idade);
    }
    
    public double calculaImposto(double PerImposto){
       double imposto = PerImposto /100;
       double impostoCalculado = this.salario * imposto;
       return impostoCalculado;
    }
    public void calculaSaldo(double impostoCalculado){
           double saldo = this.salario - impostoCalculado ;
       JOptionPane.showMessageDialog(null,"sobrou mizeros"+saldo+"do seu salario");
    }
}