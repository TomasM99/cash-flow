import { useEffect, useState } from 'react';
import './MovListContainer.scss';
import MovList from '../MovList/MovList';
import { collection, getDocs } from "firebase/firestore";
import db from '../../utils/firebaseConfig';

function MovListContainer({movimiento}) {
    const [listaMovimientos, setListaMovimientos] = useState([]);

    const getMovs = async() => {
        const movsColecction = collection(db, 'movimientos');
        const movsSnapshot = await getDocs(movsColecction);
        const movsList = movsSnapshot.docs.map( (doc) => {
            let mov = doc.data();
            mov.id = doc.id;
            return mov;
        });
        
        return movsList;
    }

    useEffect( () => {
        getMovs().then((res) => {
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