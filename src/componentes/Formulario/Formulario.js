import { useState } from 'react';
import BotaoEnvio from '../BotaoEnvio/BotaoEnvio';
import CampoTexto from '../CampoTexto/CampoTexto';//para não repetir duas vezes o nome da pasta e arquivo, podemos criar um index.js para cada componente
import ListaSuspensa from '../ListaSuspensa/ListaSuspensa';
import './Formulario.css';

function Formulario(props) {

    const [nome, setNome] = useState('')
    const [cargo, setCargo] = useState('')
    const [imagem, setImagem] = useState('')
    const [time, setTime] = useState('')

    const aoSalvar = (evento ) => {
        evento.preventDefault()
        props.aoColaboradorCadastrado ({
            nome,
            cargo,
            imagem,
            time
    }) // antes era: console.log('Formulário submetido =>', nome, cargo, imagem, time)
    //props.aoColaboradorCadastrado é chamada pela função do App.js e paga o objeto como argumento
    setNome('')
    setCargo('')
    setImagem('')
    setTime('')
}
    return (
        <section className='formulario'>
            <form onSubmit={aoSalvar}>
                <h2>Preencha os dados para criar o card do colaborador:</h2>
                <CampoTexto 
                obrigatorio={true} 
                label="Nome" 
                placeholder="Digite seu nome"
                valor={nome}
                aoAlterado={valor => setNome(valor)}>
                </CampoTexto> 

                <CampoTexto 
                obrigatorio={true}
                label="Cargo" 
                placeholder="Digite seu cargo"
                valor={cargo}
                aoAlterado={valor => setCargo(valor)}>
                </CampoTexto>

                <CampoTexto 
                label="Imagem" 
                placeholder="Digite o endereço da imagem"
                valor={imagem}
                aoAlterado={valor => setImagem(valor)}>
                </CampoTexto>

                <ListaSuspensa 
                obrigatorio={true} 
                label="Time" 
                itens={props.time}
                valor={time}
                aoAlterado={valor => setTime(valor)}>
                </ListaSuspensa>

                <BotaoEnvio></BotaoEnvio>
            </form>
        </section>
    )
} //Quando um elemento é dado como não definidopara encontrar ele fazemos o comando "ctrl+espaço"

export default Formulario