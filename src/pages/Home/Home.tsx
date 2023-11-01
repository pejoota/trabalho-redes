import { Link } from 'react-router-dom';
import './Home.css'

export default function Home() {
    return(
        <div className='Home'>
            <div className='botoes'>
                <Link to='Pokemon' style={{paddingRight: '10%'}}>
                    <button className='button'>
                        Registrar Pokémon
                    </button>
                </Link>
                <Link to='Pokemon'>
                    <button className='button'>
                        Ver Pokédex
                    </button>
                </Link>
            </div>
        </div>
    );
}