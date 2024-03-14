const frase: string = 'front';
const preco: number = 550;
const condi: boolean = false;

console.log(typeof frase);
console.log(typeof preco);
console.log(typeof condi);
console.log(typeof {});

if(typeof frase === "string"){//type guard
   console.log("frase é string");
   
}else{
   console.log("nao é string");
   
}

const frase1 = new String("Front End");

const frase2 =  String("Front End");
const frase3 = "front end"

console.log(frase1);
console.log(frase2);
console.log(frase3);
console.log(typeof frase1);
console.log(typeof frase2);
console.log(typeof frase3);
