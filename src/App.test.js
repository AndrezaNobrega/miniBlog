import { render, screen, waitFor } from '@testing-library/react';
import App from './App';

describe('App Component', () => { //test suit
  test('renders without crashing', () => {
    render(<App />);
    const linkElement = screen.getByText(/Carregando.../i);
    expect(linkElement).toBeInTheDocument();
  });

  test('displays loading message when user is undefined', () => {
    render(<App />);
    const loadingElement = screen.getByText(/Carregando.../i);
    expect(loadingElement).toBeInTheDocument();
  });

  test('renders home page if user is authenticated', async () => {
    render(<App />);
    await waitFor(() => {
      expect(screen.queryByText(/Carregando.../i)).toBeNull();
    });
    const homeElement = screen.getByText(/Home/i);
    expect(homeElement).toBeInTheDocument();
  });

  // Este é um padrão comum ao lidar com assincronia em testes. 
  //Estamos aguardando até que uma determinada condição seja atendida antes de prosseguir com o teste. 
  //Neste caso, estamos esperando que a mensagem "Carregando..." não esteja mais presente na tela.
  
  test('redirects to login page if user is not authenticated', async () => {
    render(<App />);
    await waitFor(() => {
      expect(screen.queryByText(/Carregando.../i)).toBeNull();
    });
    const loginLink = screen.getByRole('link', { name: /entrar/i });
    expect(loginLink).toBeInTheDocument();
  });
  
  //Snapshots são úteis para detectar regressões visuais, 
  //onde as alterações no componente podem afetar sua aparência sem quebrar os testes de unidade. 
  //O toMatchSnapshot() compara a saída renderizada atual com o snapshot existente e falhará se houver diferenças.
  test('matches snapshot', () => { //snapshot
    const { asFragment } = render(<App />);
    expect(asFragment()).toMatchSnapshot();
  });
});
