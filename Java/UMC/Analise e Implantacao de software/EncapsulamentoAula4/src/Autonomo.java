
import javax.swing.JOptionPane;

//nome, reegistro,filial, cargo, valorTotal, perVendas
//Exibi:void, calculaSalario:double,exibeSalario:double
public class Autonomo {
    private String nome;
    private int registro;
    private String filial;
    private String cargo;
    private double valorTotal;
    private double perVendas;
    
    public String getNome(){
        return nome;
    }
    
    public void setNome(String nome){
        this.nome = nome;
    }
    
    public int getRegistro(){
        return registro;
    }
    
    public void setRegistro(int registro){
        this.registro = registro;
    }
    
    public String filial(){
        return filial;
    }
    
    public void setFilial(String filial){
        this.filial = filial;
    }
    
    public String getCargo(){
        return cargo;
    }
    
    public void setCargo(String cargo){
        this.cargo = cargo;
    }
    
    public double getValorTotal(){
        return valorTotal;
    }
    
    public void setValorTotal(double valorTotal){
        this.valorTotal = valorTotal;
    }
    
    public double getPerVendas(){
        return perVendas;
    }
    
    public void setPerVenda(double perVendas){
        this.perVendas = perVendas;
    }
    
    
    public double calculaSalario(){
        return (this.perVendas * this.valorTotal) / 100;
    }
    
    
    public double exibeSalario(){
        double salario = this.calculaSalario();
        return salario;
    }
}


