import java.util.ArrayList;
import java.util.Scanner;

public class Principal {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        Produto produto = new Produto();
        ArrayList<Produto> produtos = new ArrayList<>();

        for(int i =0; produtos.size() < 2; i++){
            System.out.println("Informe o nome do produto: ");
            String[] nome = new String[]{scanner.next()};
            produto.setNome(nome[i]);

            System.out.println("informe o preco do produto: ");
            float[] preco = new float[]{scanner.nextFloat()};
            produto.setPreco(preco[i]);

            System.out.println("O produto esta em promoção? ");
            Boolean[] promo = new Boolean[]{scanner.nextBoolean()};
            produto.setPromocao(promo[i]);

            System.out.println("Infome a prateleira que o produto  é armazenado: ");
            int[] prateleira = new int[]{scanner.nextInt()};
            produto.setPrateleira(prateleira[i]);

            //adicionando produto na lista
            produtos.add(produto);
    }
        int i =0;
        for (Produto item: produtos) {
            System.out.println("Nome: " + item.getNome() +" preço: "+ item.getPreco());
            System.out.printf("Posição %d- %s\n", i, item);
            i++;
        }

    }
}
