type Props = {
    nome: string,
    tipoUsuario: string
}

const CardUsuario = (props: Props) => {
    return (
        <div style={{textAlign: 'right', backgroundColor: '#f1f1f1', paddingRight: 15}}>
            {props.tipoUsuario === 'admin' && (
                <p>Bem-vindo, administrador</p>
            )}
            {props.tipoUsuario === 'visitante' && (
                <p>Acesso limitado para visitantes</p>
            )}
            {props.tipoUsuario === 'editor' && (
                <p>Editor autorizado</p>
            )}
        </div>
    )
}

export default CardUsuario;