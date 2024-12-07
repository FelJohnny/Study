import React from 'react'

type PropsButton= {
    tamanho?: string;
    children: React.ReactNode;
    onClick?: () =>void;
};

//mais funcional
type PropsButton2 = React.PropsWithChildren<{
    tamanho?: string;
    onClick?: () =>void;
}>    

type PropsButton3 = React.ComponentProps<"button"> &{
    tamanho?: string;
}


const Button = ({tamanho, children, onClick}: PropsButton3) => {
  return (
    <button 
        style={{fontSize:tamanho}}
        onClick={onClick}
    >
      {children}
    </button>
  )
}

export default Button
