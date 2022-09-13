import style from './Footer.module.scss';
export default function Footer()
{
    return(
        <footer className={'container ' + style.rodape}>
            <p>2022 - Desenvolvido por  Alura.</p>
        </footer>
    );
}