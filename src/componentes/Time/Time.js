import Colaborador from '../Colaborador/Colaborador'
import './Time.css'


function Time(props) {

const css = {backgroundColor:props.corSecundaria}
if (props.colaborador.length === 0) {
            return null;
        }
    return(
        <section className="time" style={css}>
        <h3 style={{borderColor:props.corPrimaria}}>{props.nome}</h3>
        <div className='colaboradores'>
        {props.colaborador.map((colaborador) => <Colaborador 
        key={colaborador.nome}
        imagem={colaborador.imagem}
        nome={colaborador.nome}
        cargo={colaborador.cargo}
        corPrimaria={props.corPrimaria}>
        </Colaborador>)}
        </div>
        </section>
    ) //no style, os parenteses de fora indicam que ali haverá uma variável, enquando os de dentro indicam a criação de um objeto css
}

export default Time 