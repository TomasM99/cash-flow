import { useEffect, useState } from 'react';
import './MovListContainer.scss';
import MovList from '../MovList/MovList';
import movimientos from '../../utils/movimientos';

function MovListContainer({movimiento}) {
    const [listaMovimientos, setListaMovimientos] = useState([]);

    const getMovs = new Promise((resolve, reject) => {
        setTimeout( () => {
            resolve(movimientos)
        }, 500)
    });

    useEffect( () => {
        getMovs.then((res) => {
            setListaMovimientos(res.filter(mov => mov.tipo === movimiento));
        }).catch((error) => {
            console.log("No se pudieron cargar los movimientos")
        })
    }, [])

    return(
        <div>
            <h2>{movimiento}</h2>
            <div>
                <MovList data={listaMovimientos}/>
            </div>
        </div>
    );
}

export default MovListContainer;