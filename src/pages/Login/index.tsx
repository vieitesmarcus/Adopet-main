import styles from './Login.module.scss';
import logoBlue from './../../assets/img/LogoBlue.svg';
import Formulario from '../../components/formulario';
import { Link } from 'react-router-dom';
import patas from '../../assets/img/Patas.svg';
export default function Login()
{
    return(
        <>
        <div className={styles.patas}><img src={patas} alt="patinhas" /></div>
        <section className={styles.login}>
            
            <section className={styles.boasVindas}>
                <img src={logoBlue} alt="" />
                <p>Já tem conta? Faça seu Login:</p>
            </section>
                
            
            <div className={styles.formulario}>
                <form action="">
                    <Formulario label="Email" placeholder="Insira seu email" id="email" type="email" />
                    <Formulario label="Senha" placeholder="Insira sua senha" id="senha" type="password" />
                    <div>
                        <Link to="/">Esqueci minha senha</Link>
                    </div>
                    <button type="submit" className={styles.botao}>Entrar</button>
                </form>
            </div>
            
        </section>
        </>
    );
}