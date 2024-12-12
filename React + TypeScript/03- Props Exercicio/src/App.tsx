// 1 - Crie um componente Input
// 2 - Ele deve retornar <label> e <input>, dentro de uma <div>
// 3 - Recebe uma propriedade chamada label
// 4 - A propriedade deve ser usada como htmlFor (label), name (input), id (input) e como conteúdo de <label>
// 5 - Permita o uso de qualquer propriedade de input no componente Input.
// 6 - Adicione 1rem de marginBottom na <div>

import { useState } from "react";
import "./App.css";
import Input from "./components/Input";
import Button from "./components/Button";

function App() {
  const [data, setData] = useState("");
  const [total, setTotal] = useState(0);
  return (
    <div>
      <Input id={"nome"} label={"Nome"} placeholder="insira seu nome" />
      <Input id={"sobrenome"} label="Sobrenome" type="date" />
      <Input
        id={"teste"}
        label="teste onChange:"
        value={data}
        placeholder="utilizando ComponentProps<input>"
        onChange={({ currentTarget }) => setData(currentTarget.value)}
      />
      <p>reativo: {data}</p>

      <Button total={total} setTotal={setTotal} />
      <p>Total: {total}</p>
    </div>
  );
}

export default App;
