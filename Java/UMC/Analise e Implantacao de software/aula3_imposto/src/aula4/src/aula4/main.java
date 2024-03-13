
package aula4;

import javax.swing.JOptionPane;


public class main {

    public static void main(String[] args) {
        Locacao locacao = new Locacao();
        
        locacao.cadastrarLocacao();
        locacao.exibirLocacao();
        double kmAndado = Double.parseDouble(JOptionPane.showInputDialog(null, "insira a qtde usada de km: :"));
        double total = locacao.calcularLocacao(kmAndado);
        locacao.calcularDesconto(total);
        
    }
    
}
