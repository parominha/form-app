import '../App.css'

type Props = {
    nome: string,
    preco: number,
    emEstoque: boolean,
}

const Produto = (props: Props) => {
    return (
        <div className="card" style={{ alignContent: 'center', alignItems: 'center', display: 'flex', flexDirection: 'column', border: '1px dashed #ddd', borderRadius: '15px', padding: 10 }}>
            <img style={{ maxWidth: '175px' }} src='src\assets\images\book-image.png' alt='Foto do produto' />
            <span style={{ color: '#333', textAlign: 'center', marginTop: 10, fontSize: '17px', fontWeight: 700 }}>{props.nome}</span>
            <p>R$ {props.preco.toFixed(2)}</p>
            <span style={{ textAlign: 'center', borderRadius: '5px', color: '#fff', width: '100%', border: props.emEstoque ? '1px solid #9FC670' : '1px solid #D37464', backgroundColor: props.emEstoque ? '#B2D38A' : '#DB8E81' }}> {props.emEstoque ? 'Disponível' : 'Indisponível'}</span>
        </div>
    )
}

export default Produto; 