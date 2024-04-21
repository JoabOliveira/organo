import Colaborador from '../Colaborador'
import './Time.css'
import hexToRgba from 'hex-to-rgba';

const Time = (props) => {
    const css = { backgroundColor: hexToRgba(props.cor, '0.6') }
    return (
        (props.colaboradores.length > 0) ? <section className='time' style={css}>
             <input onChange={evento => props.mudarCor(evento.target.value, props.nome)} 
             value={props.cor} 
             type='color' 
             className='input-cor' 
             />
            <h3 style={{ borderColor: props.cor }}>{props.nome}</h3>
            <div className='colaboradores'>
                {props.colaboradores.map((colaborador) => <Colaborador 
                key={colaborador.id}
                colaborador={colaborador}
                corDeFundo={props.cor} 
                aoDeletar={props.aoDeletar}
                aoFavoritar={props.aoFavoritar}
                />)}
            </div>
        </section>
        : ''
    )
}

export default Time