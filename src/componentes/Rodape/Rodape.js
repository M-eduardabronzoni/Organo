import './Rodape.css'

function Rodape() {
    return(
        <footer className='rodape-pg'> 
        <section className='redes-sociais'>
            <img src="/imagens/fb.png" alt="logo Facebook"></img>
            <img src="/imagens/tw.png" alt="logo Twitter"></img>
            <img src="/imagens/ig.png" alt="logo Instagram"></img>
        </section>
        <section className='logo'>
            <img src="/imagens/logo.png" alt="logo organo"></img>
        </section>
        <section className='creditos'> 
            <p>Desenvolvido por Eduarda Bronzoni | 2024</p>
        </section>
        </footer>
    )
}

export default Rodape