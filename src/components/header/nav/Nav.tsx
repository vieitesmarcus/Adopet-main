import style from './Navegacao.module.scss';
import logo from '../../../assets/img/Logo.svg';
import casa from '../../../assets/img/Casa.svg';
import mensagens from '../../../assets/img/Mensagens.svg';
import { Link } from 'react-router-dom';
export default function Nav() {
    return (
        <nav className={style.navegacao}>
            <ul className={style.menu}>
                <li className={`${style.menu__item} ${style.logo}`}><Link className={style["menu__item--link"]} to="/"><img src={logo} alt="Logo Adopet" /></Link></li>
                <li className={style.menu__item}>
                    <Link className={style["menu__item--link"]} to="/">
                        <img src={casa} alt="logo Casa"/>
                    </Link>
                </li>
                <li className={style.menu__item}>
                    <Link className={style["menu__item--link"]} to="/mensagem">
                        <img src={mensagens} alt="Logo Mensagens" />
                    </Link>
                </li>
            </ul>
        </nav>
    );
}