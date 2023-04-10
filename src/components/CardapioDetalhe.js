import { useParams } from 'react-router-dom';
import Main from './Main';


function CardapioDetail() {
    const { tipo } = useParams();
    if (tipo === 'cardapio' || tipo === 'principal') {
        return (
            <>
                <div className='novidades'>
                    <Main grupoh={0} />
                </div>
            </>
        );
    } else if (tipo === 'executivo') {
        return (
            <>
                <div className='novidades'>
                    <Main grupoh={10} />
                </div>
            </>
        );
    }
    else {
        return (
            <div>
                <h2>{tipo}</h2>
                {/* restante do código */}
            </div>
        );
    }
}
export default CardapioDetail;