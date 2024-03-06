
package aula3_imposto;

import javax.swing.JOptionPane;

public class Main {
    public static void main(String[]args) {
        
        Funcionario funcionario = new Funcionario();

        funcionario.cadastrar();
        funcionario.exibeFuncionario();

        if(funcionario.idade > 60 ){
            int imposto = 50;
            double impostoCalculado = funcionario.calculaImposto(imposto);
            JOptionPane.showMessageDialog(null,impostoCalculado);
            funcionario.calculaSaldo(impostoCalculado);
        }else{
            int imposto = 10;
            double impostoCalculado = funcionario.calculaImposto(imposto);
            JOptionPane.showMessageDialog(null,"a quantidade de imposto que sera descontado é:" + impostoCalculado);
            funcionario.calculaSaldo(impostoCalculado);
        }
    }
}
