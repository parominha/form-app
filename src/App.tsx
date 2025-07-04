import CardUsuario from "./components/CardUsuario"
import Comentario from "./components/Comentario"
import ListaProdutos from "./components/ListaProdutos"
import Painel from "./components/Painel"

function App() {

  const produtos = [
    { nome: 'Livro A', preco: 59, emEstoque: true },
    { nome: 'Livro B', preco: 120, emEstoque: false },
    { nome: 'Livro C', preco: 199, emEstoque: true },
    { nome: 'Revista A', preco: 199, emEstoque: false },
    { nome: 'Revista B', preco: 199, emEstoque: true },
    { nome: 'Jornal A', preco: 199, emEstoque: false },
    { nome: 'Jornal B', preco: 199, emEstoque: true },
    { nome: 'Jornal C', preco: 199, emEstoque: true },
    { nome: 'Jornal C', preco: 199, emEstoque: true },
  ];

  return (
    <div style={{ display: 'flex', justifyContent: 'center', gap: 1, flexDirection: 'column', fontFamily: 'Nunito', maxWidth: '1500px', textAlign: 'justify', margin: '50px auto' }}>
      <CardUsuario nome="Paloma" tipoUsuario="admin" />
      <img src="src\assets\images\background-image.jpg" alt="Foto de fundo" style={{ opacity: 0.5, height: '500px' }} />
      <Painel titulo="Seja bem-vindo à nossa loja!"><span></span></Painel>
      <div style={{ padding: '25px 0 25px 0', marginTop: 5, borderRadius: '15px', border: '1px solid #ddd', color: '#222' }}>

      </div>
      <Painel
        titulo="Aqui você irá encontrar:"
        children={
          <ul>
            <li>Livros</li>
            <li>Revistas</li>
            <li>Jornais</li>
          </ul>
        }
      />
      <h2 style={{ color: '#444' }}>Nossos produtos</h2>
      <ListaProdutos produtos={produtos} />
      <h2 style={{ color: '#444' }}>Comentários</h2>
      <Comentario autor="Ana" children={<p>lalalala</p>} revisado={true} />
      <Comentario autor="Beatriz" children={<p>lalalala</p>} revisado={false} />
      <Comentario autor="Julia" children={<p>lalalala</p>} revisado={true} />
    </div>
  )
}

export default App
