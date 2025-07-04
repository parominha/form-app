import Produto from "./Produto";

type Props = {
    nome: string,
    preco: number,
    emEstoque: boolean,
}

type List = {
    produtos: Props[];
}

const ListaProdutos = ({ produtos }: List) => {
    return (
        <>
            <div style={{ display: 'flex', gap: 25, flexWrap: 'wrap', justifyContent: 'center'}}>
                {produtos.map((produto, index) => (
                    <Produto key={index} nome={produto.nome} preco={produto.preco} emEstoque={produto.emEstoque} />
                ))}
            </div>
        </>
    )
}

export default ListaProdutos;