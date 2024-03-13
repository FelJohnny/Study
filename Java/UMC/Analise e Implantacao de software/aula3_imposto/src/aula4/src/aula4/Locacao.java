
package aula4;

import javax.swing.JOptionPane;

public class Locacao {
    public String cliente;
    public String veiculo;
    public int numDias;
    public double valorDiario;
    public double qtdKm;
    
    
    public void cadastrarLocacao(){
        this.cliente = JOptionPane.showInputDialog(null, "informe o cliente:");
        this.veiculo = JOptionPane.showInputDialog(null, "informe o veiculo");
        this.numDias = Integer.parseInt(JOptionPane.showInputDialog(null, "informe o numero de dias que sera alugado:"));
        this.valorDiario = Double.parseDouble(JOptionPane.showInputDialog(null, "informe o valor diario do veiculo:"));
        this.qtdKm = Double.parseDouble(JOptionPane.showInputDialog(null, "informe o kilometragem do veiculo:"));
        JOptionPane.showMessageDialog(null,"Cadastro realizado com sucesso!");
    }
    
    public void exibirLocacao(){
      JOptionPane.showMessageDialog(null, "cliente: "+ this.cliente + "\nVeiculo" + this.veiculo + "\nNº dias locados: " +this.numDias +"\nValor diario: " +this.valorDiario +"\nQtd Kilometrada: "+this.qtdKm);
          
    }
    
    public double calcularLocacao(double valorkm){
        double calculo = this.valorDiario * this.numDias + this.qtdKm * valorkm;
        JOptionPane.showMessageDialog(null, "o valor da locacao sem desconto ficou: "+ calculo);
        return calculo;
    }
    
    public void calcularDesconto( double valorTotal){
        int idade = Integer.parseInt(JOptionPane.showInputDialog(null, "Informe a idade: "));
        if(idade > 70){
            double valorDesconto = valorTotal - valorTotal * 0.20;
            JOptionPane.showMessageDialog(null,"desconto: " + valorDesconto);

        }else{
            JOptionPane.showMessageDialog(null,"desconto não aplicado, idade menor que 70 ");
        }
            
  
    }
}
