import { render, screen } from '@testing-library/react';
import PostComment from '../Post/index';

describe('Teste para o componente PostComment', () => {
  test('Deve renderizar o comentário: Bem legal', () => {
    render(<PostComment children={undefined} imageUrl={''} />);

    const ComentarioA = screen.getByText('Bem legal');
    expect(ComentarioA).toBeInTheDocument();
  });
  test('Deve renderizar o comentário: O veiculo ficou muito top', () => {
    render(<PostComment children={undefined} imageUrl={''} />);

    const ComentarioB = screen.getByText('O veiculo ficou muito top');
    expect(ComentarioB).toBeInTheDocument();
  });
});





