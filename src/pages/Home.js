import MovListContainer from "../components/MovListContainer/MovListContainer";
import { useContext } from "react";
import { MovContext } from "../context/MovContext";

const Home = () => {
    const {total, charge} = useContext(MovContext);

    return(
        <>
        <div>
            {charge()}
            <p>${total}</p>
        </div>

        <div>
            <MovListContainer movimiento="Ingresos"/>
        </div>

        <div>
            <MovListContainer movimiento="Egresos"/>
        </div>
        </>
    );
}

export default Home