export default function validaScrollAnima(){
    const sections = document.querySelectorAll('.js-scroll');
    if(sections.length){
        const windowMetade = window.innerHeight * 0.7;
        function transitionScroll(){
            sections.forEach((section) =>{
                const sectionTop = section.getBoundingClientRect().top;
                const sectionVisible = sectionTop - windowMetade < 0;
                if(sectionVisible){
                    section.classList.add('ativo');
                }
            });
        }

        transitionScroll();
        window.addEventListener('scroll', transitionScroll);
    }
}
//validaScrollAnima();