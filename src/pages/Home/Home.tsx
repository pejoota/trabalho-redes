import { Link } from 'react-router-dom';
import './Home.css'

export default function Home() {
    return(
        <div className='Home'>
            <div className='dialog-box'>
                {/* <Link className='dialog' to='Pokemon' style={{paddingTop: '10%'}}>
                    <button className='dialog-content'>
                        Registrar Pokémon
                    </button>
                </Link> */}
                <Link className='dialog' to='Pokemon' style={{paddingBottom: '10%'}}>
                    <button className='dialog-content'>
                        Ver Pokédex
                    </button>
                </Link>
            </div>
        </div>
    );
}