import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner leitura = new Scanner(System.in);
        System.out.println("Informe o seu nome: ");
        String nome = leitura.nextLine();
        System.out.println("Insira a quantidade em saldo em sua conta:");
        float saldo = leitura.nextFloat();;
            System.out.printf("""
                    *********************************************
                    
                    Nome: %s
                    Tipo conta: Corrente
                    Saldo Inicial: %.2f
                    
                    *********************************************
                    """,nome,saldo);
        int operacao;
        do{
            System.out.println("""
                    Operações:
                    
                    1- Consultar Saldos
                    2- Receber Valor
                    3- Transferir Valor
                    4- Sair
                    
                    """);

                operacao = leitura.nextInt();
                switch (operacao) {
                    case 1:
                        System.out.println("O saldo atual da sua coonta é " + saldo);
                        break;
                    case 2:
                        System.out.println("insira a quantidade que vai receber em sua conta: ");
                        saldo += leitura.nextFloat();
                        System.out.println("Valor recebido com sucesso");
                        break;
                    case 3:

                        System.out.println("Informe a quantidade que deseja transferir: ");
                        float transferir = leitura.nextFloat();
                        if (transferir < saldo) {
                            saldo -= transferir;
                            System.out.println("transferencia realizada com sucesso!");
                        }else{
                            System.out.printf("O seu saldo não é suficiente para essa transferencia. saldo atual de %.2f \n",saldo);
                        }

                        break;
                    case 4:
                        System.out.println("Saindo da sua conta, aguarde...");

                        break;
                    default:
                        System.out.println("numero informado é invalido");

                }

        }while (operacao != 4);
    }

}