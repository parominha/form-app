type Props = {
    titulo: string,
    children: React.ReactNode,
    color?: string
}

const Painel = (props: Props) => {
    return (
        <div style={{ textAlign: 'center' }}>
            <h1 style={{ color: props.color }}>{props.titulo}</h1>
            {props.children}
        </div>
    )
}

export default Painel;