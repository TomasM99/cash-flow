import Mov from '../Mov/Mov';

function MovList({data}) {
    return (
        <>
            {data.map((movimiento) => {return <Mov key={movimiento.id} movData={movimiento}/>})}
        </>
    );
}

export default MovList;