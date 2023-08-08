import { render, screen } from '@testing-library/react';
import PostComment from '../Post/index';

describe('Teste para o componente PostComment', () => {
  test('Deve renderizar o comentário: Bem legal', () => {
    render(<PostComment children={undefined} imageUrl={''} />);

    const bemLegalCommentElement = screen.getByText('Bem legal');
    expect(bemLegalCommentElement).toBeInTheDocument();
  });

  test('Deve renderizar o comentário: O veiculo ficou muito top', () => {
    render(<PostComment children={undefined} imageUrl={''} />);

    const ficouTopCommentElement = screen.getByText('O veiculo ficou muito top');
    expect(ficouTopCommentElement).toBeInTheDocument();
  });
});

