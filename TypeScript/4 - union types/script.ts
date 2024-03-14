let total: string | number = 200;

total = "2000"

function isNumber(value: string | number){
   if(typeof value === "number"){
      return true
   }else{
      return false
   }
}

console.log(isNumber(200));

const button = document.querySelector('button')

if(button){
   button.click();
}
//ou

button?.click()