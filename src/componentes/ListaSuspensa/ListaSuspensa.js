import './ListaSuspensa.css'

function ListaSuspensa(props) {
    return (
        <div className='lista-suspensa'>
            <label>{props.label}</label>
            <select value={props.valor} onChange={(evento) => {props.aoAlterado(evento.target.value)}}  required={props.obrigatorio}>
             <option value=""></option>
             {props.itens.map(item => <option key={item}>{item}</option>)}
            </select>
        </div>
        //a lista inicia vazia, até que seja selecionada a opção de algum dos times.
    )
}

export default ListaSuspensa