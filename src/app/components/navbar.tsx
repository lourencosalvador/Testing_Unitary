import React from 'react';

interface ButtonProps {
  onClick: () => void;
}

export const Button: React.FC<ButtonProps> = ({ onClick }) => {
  return <button onClick={onClick}>Clique aqui</button>;
};
