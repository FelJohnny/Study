import styled from "styled-components";

export const ContainerModal = styled.section`
    height: 100vh;
    width: 100%;
    background: rgba(0, 0, 0, .5);
    position: fixed;
    top: 0;
    left: 0;
    z-index: 2000;
    display: none;
    justify-content: center;
    align-items: center;
`
export const CaixaModal = styled.div`
    
`

function Modal(){
    return(

        <ContainerModal>
            

        </ContainerModal>
        
    );
}

export default Modal;