import styles from './Home.module.scss';
import pets from './pets.json';
import user from 'assets/img/usuario.svg';
export default function Home()
{
    return(
        <>
        <div className={styles.perfil}>
            <img src={user} alt="User perfil" />
        </div>
        <p className={styles.texto}>Olá! Veja os amigos <br /> disponiveis para adoção</p>
        <section className={styles.lista}>
            {pets.map((item)=>(
                <div className={styles.lista__informacoes}>
                    <div><img src={item.img} alt={item.nome} /></div>
                    <div className={styles['lista__informacoes--texto']}>
                        <h3>{item.nome}</h3>
                        <p>{item.idade}</p>
                        <p>Porte {item.porte}</p>
                        <p>{item.caracteristica}</p>
                        <p className={styles.cidade}> {item.cidade} </p>
                    </div>
                    
                </div>
            ))}
            
        </section>
        </>
    );
}