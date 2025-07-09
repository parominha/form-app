type Props = {
    autor: string,
    children: React.ReactNode,
    revisado: boolean,
}

const Comentario = (props: Props) => {
    return (
        <div style={{ border: '1px solid #dedede', padding: '0 8px 3px 8px', marginBottom: 10, borderRadius: '15px', display: 'flex', alignItems: 'center', gap: 6, margin: '5px 10px' }}>
            <img style={{ maxWidth: '65px', maxHeight: '65px' }} src='src\assets\images\avatar-image.png' alt='Foto de perfil' />
            <div>
                <h3>{props.autor}</h3>
                {props.revisado ? <div>{props.children}</div> : <p style={{ color: '#444' }}>Comentário aguardando revisão...</p>}
            </div>
        </div>
    )
}

export default Comentario;