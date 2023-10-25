export default function scrollAnimation(){
    const linkInterno = document.querySelectorAll('a[href^="#"]');

    function scrollToSection(event){
    event.preventDefault();
    const href = this.getAttribute('href');
    const section = document.querySelector(href);
    const topo = section.offsetTop;
    window.scrollTo({
        top: topo,
        behavior: 'smooth',
    });
    }

    linkInterno.forEach((item) =>{
        item.addEventListener('click', scrollToSection);
    })
}
