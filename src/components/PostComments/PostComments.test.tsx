import { render, screen } from '@testing-library/react';
import PostComment from '.';

describe('Teste para o componente PostComment', () => {
  it('Deve renderizar o comentário "Bem legal"', () => {
    render(<PostComment />);
    
    expect(screen.getByText("Bem legal")).toBeInTheDocument();
  });

  it('Deve renderizar o comentário "O veiculo ficou muito top"', () => {
    render(<PostComment />);
    
    expect(screen.getByText("O veiculo ficou muito top")).toBeInTheDocument();
  });
});
