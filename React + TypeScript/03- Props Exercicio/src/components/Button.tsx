import React from "react";

type ButtonProps = {
  total: number;
  setTotal: React.Dispatch<React.SetStateAction<number>>;
};

const Button = ({ total, setTotal }: ButtonProps) => {
  const handleClick: React.MouseEventHandler<HTMLButtonElement> = (event) => {
    console.log(event.pageX);
    console.log(event.currentTarget);
    event.preventDefault();

    setTotal((t) => t + 1);
  };
  return <button onClick={handleClick}>Incrementar {total}</button>;
};

export default Button;
