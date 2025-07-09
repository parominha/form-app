type Props = {
    nome: string,
    tipoUsuario: "admin" | "visitante" | "editor"
}

const CardUsuario = (props: Props) => {
    return (
        <div style={{ textAlign: 'right', paddingRight: 15 }}>
            {props.tipoUsuario === 'admin' && (
                <p>Bem-vindo, administrador ({props.nome})</p>
            )}
            {props.tipoUsuario === 'visitante' && (
                <p>Acesso limitado para visitantes ({props.nome})</p>
            )}
            {props.tipoUsuario === 'editor' && (
                <p>Editor autorizado ({props.nome})</p>
            )}
        </div>
    )
}

export default CardUsuario;