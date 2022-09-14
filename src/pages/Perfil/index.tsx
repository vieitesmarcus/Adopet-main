import styles from './Perfil.module.scss';
import user from 'assets/img/usuario.svg';
import Formulario from 'components/formulario';
export default function Perfil()
{
    return(
        <> 
            <div className={styles.perfilUser}>
                <img src={user} alt="User perfil" />
            </div>
            <section className={styles.perfil}>
                <p className={styles.texto}>Esse é o perfil que aparece para responsáveis ou ONGs que recebem sua mensagem.</p>
                <div className={styles.formulario}>
                    <form action="">
                        <div className={styles.formulario}>
                            <label>Foto</label>
                            <img src={user} alt="UserPerfil" />
                            <p><small>Clique na foto para editar</small></p>
                        </div>
                        <Formulario for="nome" label="Nome" type="text" id="nome" placeholder="Insira seu nome completo"  />
                        <Formulario for="telefone" label="Telefone" type="text" id="telefone" placeholder="Insira seu telefone e/ou whatsapp"  />
                        <Formulario for="cidade" label="Cidade" type="text" id="cidade" placeholder="São Paulo"  />
                        <div className={styles.formulario}>
                            <label>Sobre</label>
                            <textarea name="sobre" id="sobre" className={styles.input__mensagem} placeholder="At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati."></textarea>
                        </div>
                        <button className={styles.botao} type="submit">Enviar</button>
                    </form>
                </div>
            </section>
        </>
    );
}