import style from './Index.module.scss';
import dog from '../../assets/img/Ilustração1.svg';
import logo from './../../assets/img/Logo.svg';
import forma2 from './../../assets/img/Forma2.svg'
import Botao from "../../components/botao/Botao";

export default function Index() {
    return (
        <>
            <div className={style.fundo}></div>
            <section className={style.main}>
                <img src={logo} alt="logo" />
                <h2>Boas-vindas!</h2>
                <p>Que tal mudar sua vida adotando seu novo melhor amigo? Vem com a gente!</p>

                <aside className={style.forma2}>
                    <img className={style.forma2__ilustracao} src={forma2} alt="lateral direita" />
                </aside>

                <section className={style.botoes} >
                    <Botao href="/login">Já tenho conta</Botao>
                    <Botao href="/cadastro"> Quero me cadastrar </Botao>
                </section>
            </section>

            <div className={style.ilustracao}>
                <img className={style.ilustracao__dog} src={dog} alt="" />
            </div>

        </>
    )
}