export default function actAccordion(){
    const accordiontlist = document.querySelectorAll('.js-accordion dt');

    function activeAccordion(){
        this.classList.toggle('ativo');
        this.nextElementSibling.classList.toggle('ativo');
    }
    accordiontlist.forEach((item) =>{
        item.addEventListener('click', activeAccordion);
        
    });
}
//actAccordion();