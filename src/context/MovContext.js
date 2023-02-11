import { createContext, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import db from '../utils/firebaseConfig';

const MovContext = createContext();

const MovProvider = ({children}) => {
    const [total, setTotal] = useState(0);

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

    function charge(){
        getMovs().then((res) => {
            let t = res.map((mov) => mov.monto).reduce((a, b) => a + b, 0);
            setTotal(t);
        }).catch((error) => {
            console.log("No se pudieron cargar los movimientos")
        })
    }

    function clear(){
        setTotal(0);
    }

    const data = {
        total,
        clear,
        charge,
    }

    return(
        <MovContext.Provider value={data}>
            {children}
        </MovContext.Provider>
    )
}

export default MovProvider;

export { MovContext }