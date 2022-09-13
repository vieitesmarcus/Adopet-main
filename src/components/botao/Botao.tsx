import { Link } from 'react-router-dom';
import style from './Botao.module.scss';

export default function Botao(props:any){
    return(
        <Link to={props.href} className={style.botao}>{props.children}</Link>
    );
}