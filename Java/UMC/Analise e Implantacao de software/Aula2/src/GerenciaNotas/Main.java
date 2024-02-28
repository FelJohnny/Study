package GerenciaNotas;

import javax.swing.JOptionPane;

public class Main{
	public static void main(String[]args) {
		Aluno aluno = new Aluno();
		String nome = JOptionPane.showInputDialog("nome do Aluno:");
		int idade = Integer.parseInt(JOptionPane.showInputDialog("idade:"));
		double nota1 = Double.parseDouble(JOptionPane.showInputDialog("nota1:"));
		double nota2 = Double.parseDouble(JOptionPane.showInputDialog("nota2:"));
		
		aluno.CadastrarAluno(nome, idade, nota1, nota2);
		aluno.CalculaMedia();
		aluno.AplicarSituacao();
		aluno.ExibirAluno();
		
	};
};