type Props = {
    titulo: string,
    children: React.ReactNode,
}

const Painel = (props: Props) => {
    return (
        <div style={{textAlign: 'center'}}>
            <h2>{props.titulo}</h2>
            <div style={{textAlign: 'left'}}>{props.children}</div>
        </div>
    )
}

export default Painel;