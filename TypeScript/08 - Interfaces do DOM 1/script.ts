document.body.style.background="#3c3c3c"

//https://developer.mozilla.org/pt-BR/docs/Web/API

const video = document.querySelector('video') //HTMLvideoElement
const video1 = document.querySelector('#idvideo')
if(video1 instanceof HTMLVideoElement){

  console.log(video1?.volume)
  console.log(video?.volume)
}


const links = document.querySelectorAll('.link')

links.forEach((link)=>{
  if(link instanceof HTMLAnchorElement){
    console.log(link.href);//nao pegou o button
  }
})