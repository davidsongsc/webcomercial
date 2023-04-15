import { useParams } from 'react-router-dom';
import MainUsuario from './MainUsuario';


function CardapioDetail() {
    const { tipo } = useParams();
    if (tipo === 'cardapio') {
        return (
            <>
                <MainUsuario grupoh={0} />

            </>
        );
    } else if (tipo === 'principal') {
        return (
            <><MainUsuario grupoh={1} />

            </>
        );
    } else if (tipo === 'executivo' || tipo === '10') {

        return (

            <><MainUsuario grupoh={10} />

            </>
        );
    }
    
    else if (tipo === 'jackribs' || tipo === '12') {
        return (
            <><MainUsuario grupoh={12} />

            </>
        );
    }
        
    else if (tipo === 'bebidas' || tipo === '60') {
        return (
            <><MainUsuario grupoh={60} />

            </>
        );
    }
    else if (tipo === 'sucos' || tipo === '61') {
        return (
            <><MainUsuario grupoh={61} />

            </>
        );
    }
    else if (tipo === 'entradas' || tipo === '6615') {

        return (

            <><MainUsuario grupoh={6615} />

            </>
        );
    }
    else {
        return (
            <div>
                <h1>Error 400!</h1>
                <h2>{tipo}</h2>
                {/* restante do código */}
            </div>
        );
    }
}
export default CardapioDetail;