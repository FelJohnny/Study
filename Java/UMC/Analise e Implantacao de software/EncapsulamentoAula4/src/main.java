
import javax.swing.JOptionPane;

//encapsulamento significa que os detalhes internos de uma classe são escondidos do mundo exterior e só podem 
//ser acessados por métodos públicos definidos pela própria classe.
//Isso é feito para garantir que o estado interno de um objeto só possa ser modificado de maneira controlada,
//garantindo assim a consistência dos dados e facilitando a manutenção do código.
//Variáveis de instância privadas, 
//Métodos de acesso (getters e setters):

public class main {

    public static void main(String[] args) {
        Autonomo autonomo = new Autonomo();
          
        String nome =  JOptionPane.showInputDialog("insira o nome do Autonomo: ");
        autonomo.setNome(nome);
        
        int registro =  Integer.parseInt(JOptionPane.showInputDialog("insira o registro do Autonomo: "));
        autonomo.setRegistro(registro);
        
        String filial =  JOptionPane.showInputDialog("insira a filial que o mesmo pertence: ");
        autonomo.setFilial(filial);
        
        String cargo =  JOptionPane.showInputDialog("insira o cargo do Autonomo: ");
        autonomo.setCargo(cargo);
        
        double perVendas =  Double.parseDouble(JOptionPane.showInputDialog("insira o percentual de comissão"));
        autonomo.setPerVenda(perVendas);
        
        double valorTotal = Double.parseDouble(JOptionPane.showInputDialog("insira o o valor total de vendas"));
        autonomo.setValorTotal(valorTotal);

        
        autonomo.calculaSalario();
        double salario = autonomo.exibeSalario();
        
        JOptionPane.showMessageDialog(null, salario);
        
    }

}
