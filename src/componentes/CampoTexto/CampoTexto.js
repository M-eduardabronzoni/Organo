import './CampoTexto.css'


function CampoTexto(props) {
    const aoDigitado = (evento) => {
        props.aoAlterado(evento.target.value)
    }

    // console.log(props) //props=propriedades que chegam no componente react
    return(
        <div className="campo_texto">
        <label>{props.label}</label>
        <input  value={props.valor} onChange={aoDigitado} required={props.obrigatorio} placeholder={props.placeholder}></input>
        </div>
    )
}

export default CampoTexto