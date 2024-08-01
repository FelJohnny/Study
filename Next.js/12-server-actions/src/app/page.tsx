import Button from "@/components/button/Button";

export default function PageInicial() {
  return (
    <main>
      <h1>Server Actions</h1>
      <p>criado um server action que seta o cookie dentro do servidor</p>
      <p>aplicado a atualização do cookie sempre que a tela renderiza 'f5', o valor aplicado é o width da tela atual</p>
      <p>ao pressionar o botão também é aplicado a Action, o botao é um componente reativo'use client' e executa a action que comunica com o servidor e atualiza o estado do cookie</p>
      <Button/>
    </main>
  );
}
