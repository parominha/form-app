import CardUsuario from "./components/CardUsuario"
import Comentario from "./components/Comentario"
import ListaProdutos from "./components/ListaProdutos"
import Painel from "./components/Painel"
import './App.css'

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
    { nome: 'Jornal C', preco: 199, emEstoque: true },
    { nome: 'Jornal C', preco: 199, emEstoque: true },
    { nome: 'Jornal C', preco: 199, emEstoque: true },
  ];

  return (
    <div style={{ display: 'flex', justifyContent: 'center', gap: 1, flexDirection: 'column', maxWidth: '1500px', textAlign: 'justify', margin: '20px auto', border: '3px dashed #eee', padding: 5, backgroundColor: '#fff'  }}>

      <CardUsuario nome="Paloma" tipoUsuario="admin" />

      <div style={{ width: '100%', height: '200px', backgroundColor: '#285680', alignContent: 'center' }}>
          <Painel titulo="SEJA BEM-VINDO À NOSSA BIBLIOTECA!" color='#fff'>
            <span></span>
          </Painel>
      </div>

      <Painel
        titulo=""
        children={
          <ul className='lista'>
            <li>Livros</li>
            <li>Revistas</li>
            <li>Jornais</li>
          </ul>
        }
      />

      <h2>Nossos produtos</h2>
      <ListaProdutos produtos={produtos} />

      <h2>Comentários</h2>
      <Comentario autor="Ana" children={<p>lalalala</p>} revisado={true} />
      <Comentario autor="Beatriz" children={<p>lalalala</p>} revisado={false} />
      <Comentario autor="Julia" children={<p>lalalala</p>} revisado={true} />

    </div>
  )
}

export default App
