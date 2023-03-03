
import './style.css'
import foto from '../../assets/imagem/ft.jpeg'
function Dados(){
    return(
        <div className="dadosPessoais">
            <img src={foto} alt="hipo"></img>
            <div className="infos">
            <h1>Bruna Xavier da Silva</h1>
            <p>Telefone: (81) 9 0000-0000</p>
            <p>Email: brunaxavierdev@gmail.com</p>
            <p>Idade: 21 anos</p>
            <div className="objetivo">
                <h2>Objetivo</h2>
                <p>Atuar como desenvolvedora Front-end em sistemas web e contribuir 
                    com o meu conhecimento ajudando as organizações a obterem melhores 
                    proveitos da tecnologia e seus recursos.</p>
            </div>
            </div>
            
        </div>
    );
}
export default Dados;