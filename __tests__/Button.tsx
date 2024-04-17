import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { Button } from '@/app/components/navbar';


it('verificar se o botão foi clicado', () => {
    const handleClick = jest.fn();
    render(<Button onClick={handleClick} />);
    const button = screen.getByText('Clique aqui');
    fireEvent.click(button);
    expect(handleClick).toHaveBeenCalled();
});
