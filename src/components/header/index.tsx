import Nav from "./nav/Nav";
import forma1 from '../../assets/img/Forma1.svg';

export default function Header(){
    return (
    <header>
        <div className="container">
        <img className="forma1" src={forma1} alt=""/>
        <Nav />
        </div>
    </header>
    );
}