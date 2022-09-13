import style from "./Formulario.module.scss";
function Formulario(props:any)
{
    return(
        <div className={style.formulario}>
            <label htmlFor={props.for}>{props.label}</label>
            <input type={props.type} id={props.id} name={props.name} placeholder={props.placeholder} />
        </div>
    );
}

export default Formulario;