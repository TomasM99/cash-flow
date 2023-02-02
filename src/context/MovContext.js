import { createContext, useState } from "react";
import movimientos from '../utils/movimientos';

const MovContext = createContext();

const MovProvider = ({children}) => {
    const [total, setTotal] = useState(0);

    function charge(){
        let t = movimientos.map((mov) => mov.monto).reduce((a, b) => a + b, 0);
        setTotal(t);

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