import './Mov.scss';

function Mov({movData}) {

    const {id, tipo, nombre, detalle, monto} = movData;

    return (
        <div>
            <p>id: {id}, tipo: {tipo}, nombre: {nombre}, detalle: {detalle}, monto: {monto}</p>
        </div>
    )
}

export default Mov;