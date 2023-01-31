import './NavBar.scss';
import {Link} from 'react-router-dom';
import { RiMoneyDollarCircleFill } from 'react-icons/ri'

function NavBar() {
    const style = {color: "black", fontSize: "4.5em"}

    return (
        <div className='nav-bar'>
            <div className='nav-logo'>
                <Link to="/"><RiMoneyDollarCircleFill style={style}/></Link>
            </div>
            <div className='nav-lista'>
                <ul className='nav-items'>
                    <Link to="/gastos" className='nav-item'><li>GASTOS</li></Link>
                    <Link to="/ingresos" className='nav-item'><li>INGRESOS</li></Link>
                    <Link to="/egresos" className='nav-item'><li>EGRESOS</li></Link>
                    <Link to="/dolares" className='nav-item'><li>DOLARES</li></Link>
                </ul>
            </div>
        </div>
    )
}

export default NavBar;