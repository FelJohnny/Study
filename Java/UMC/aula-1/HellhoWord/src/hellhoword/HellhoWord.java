package hellhoword;

import java.util.Scanner;

public class HellhoWord {

    public static void main(String[] args) {
        Scanner entrada = new Scanner(System.in);//objeto de entrada
        
        System.out.println("Ola mundo"); //ola mundo
        
        
        for(double i = 0; i < 2;i++){        
            System.out.println("Digite x");
            double x = entrada.nextDouble();//entrada de dado via teclado 
            
            System.out.println("Digite y");
            double y = entrada.nextDouble();
        
            double resultado = x+y;
            System.out.println("Soma:"+ resultado );
        
        }
        
        System.out.println("digite o numero 1");
        double n1 = entrada.nextDouble();
        System.out.println("digite  o numero 2");
        double n2 = entrada.nextDouble();
        System.out.println("Selecione a operação entre 1- soma,  2- subtração, 3- divizao, 4-multiplicação");
        
         int op = entrada.nextInt();
         double result =0;
         
        if(op == 1){
            result = n1+n2;
            System.out.println("o resultado da soma é: "+result);
           
        }else if(op == 2){
            result = n1-n2;
             System.out.println("o resultado da subtração é: "+result);
            
        }else if(op == 3){
        result = n1/n2;
        System.out.println("o resultado da divizão é: "+result);
        
        }else if(op == 4){
        result = n1*n2;
        System.out.println("o resultado da multiiplicação é: "+result);
        
        }else{
            System.out.println("nao é uma operação");
        }

    }
    
}