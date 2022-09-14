import Formulario from 'components/formulario';
import styles from './Mensagem.module.scss';
import user from 'assets/img/usuario.svg';
export default function Mensagem(){
    return(
        <>
        <div className={styles.perfil}>
            <img src={user} alt="User perfil" />
        </div>
        <section className={styles.mensagem}>
            <p className={styles.texto}>
                Envie uma mensagem para a pessoa ou instituição <br />
                que está cuidando do animal.
            </p>

            <div className={styles.formulario}>
                <form action="">
                    <Formulario for="nome" label="Nome" type="text" id="nome" placeholder="Insira seu nome completo"  />
                    <Formulario for="telefone" label="Telefone" type="text" id="telefone" placeholder="Insira seu telefone e/ou whatsapp"  />
                    <Formulario for="nomeAnimal" label="Nome do animal" type="text" id="nomeAnimal" placeholder="Por qual animal você se interessou?"  />
                    <div className={styles.formulario}>
                        <label>Mensagem</label>
                        <textarea name="mensagem" id="mensagem" className={styles.input__mensagem} ></textarea>
                    </div>
                    <button className={styles.botao} type="submit">Enviar</button>
                </form>
            </div>
        </section>
        </>
    );
}