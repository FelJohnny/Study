package GerenciaNotas;
import javax.swing.JOptionPane;

public class Aluno{
	String nome_aluno;
	int idade;
	double nota1;
	double nota2;
	double media;
	String situacao;

	public void CadastrarAluno(String nome, int idade, double nota1, double nota2){
		this.nome_aluno = nome;
		this.idade = idade;
		this.nota1 = nota1;
		this.nota2 = nota2;
		JOptionPane.showMessageDialog(null,"aluno cadastrado");
		
	}
	public double CalculaMedia(){
		this.media = (this.nota1 + this.nota2) / 2;
		JOptionPane.showMessageDialog(null,"Media Calculada: " + media);
		return this.media;
	}
	
	public void ExibirAluno() {
		JOptionPane.showMessageDialog(null, "nome: "+ this.nome_aluno + "\nIdade:" + this.idade + "\nNota1: " +this.nota1 +"\nNota2: " +this.nota2+"\nMedia: "+this.media+"\nSituação: "+this.situacao);
	}
	
	public void AplicarSituacao() {
		
		if(this.media >= 5) {
			this.situacao = "Aprovado";
		}else {
			this.situacao = "reprovado";
		}
	}
}

