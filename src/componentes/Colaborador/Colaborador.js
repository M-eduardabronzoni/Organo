import './Colaborador.css'

function Colaborador(props) {

    return (<div className='colaborador'>
        <div style={{backgroundColor:props.corPrimaria}} className='cabecalho'>
            <img src={props.imagem} alt='imagem colaborador'></img>
        </div>
        <div className='rodape'> 
            <h4>{props.nome}</h4>
            <h5>{props.cargo}</h5>
        </div>
   </div> )
}

export default Colaborador