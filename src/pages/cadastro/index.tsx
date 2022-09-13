import style from './Cadastro.module.scss';
import forma2 from './../../assets/img/Forma2.svg'
import logoBlue from './../../assets/img/LogoBlue.svg';
import Formulario from '../../components/formulario';
import patas from '../../assets/img/Patas.svg';

export default function Cadastro() {
  return (
    <>
      <div className={style.patas}><img src={patas} alt="patinhas" /></div>
      <section className={style.cadastro}>
      <aside className="forma2">
        <img className="forma2__ilustracao" src={forma2} alt="lateral direita" />
      </aside>
      <section className={style.boasVindas}>
      <img src={logoBlue} alt="Logo azul" />
      <p>Ainda não tem cadastro?</p>
      <p>Então, antes de buscar seu melhor amigo, precisamos de alguns dados:</p>
      </section>
      <section className={style.formulario}>
        <form action="" method=''>
          <Formulario htmlFor="email" label="Email" type="email" id="email" placeholder="Escolha seu melhor email"/>
          <Formulario htmlFor="nome" label="Nome" type="text" id="nome" placeholder="Digite seu nome completo"/>
          <Formulario htmlFor="senha" label="Senha" type="password" id="senha" placeholder="Crie uma senha"/>
          <Formulario htmlFor="senha2" label="Confirma sua senha" type="password" id="senha2" placeholder="Repita a senha criada acima"/>
          <button type='submit' className={style.botao}>Cadastrar</button>
        </form>
      </section>
      </section>
    </>
  );
}