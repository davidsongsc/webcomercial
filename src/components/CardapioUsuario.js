import { useParams } from 'react-router-dom';
import MainUsuario from './MainUsuario';
import BaseLogo from './BaseLogo';
import Footer from './Footer';


function CardapioDetail() {
    const { tipo } = useParams();
    if (tipo === 'cardapio') {
        return (
            <>
            <BaseLogo/>
                <MainUsuario grupoh={0} />
            <Footer/>
            </>
        );
    } else if (tipo === 'principal') {
        return (
            <>
            <BaseLogo/>
            <MainUsuario grupoh={1} />
            <Footer/>
            </>
        );
    } else if (tipo === 'executivo' || tipo === '10') {

        return (

            <>
            <BaseLogo/>
            <MainUsuario grupoh={10} />
            <Footer/>
            </>
        );
    }
    
    else if (tipo === 'jackribs' || tipo === '12') {
        return (
            <>
            <BaseLogo/>
            <MainUsuario grupoh={12} />
            <Footer/>
            </>
        );
    }
        
    else if (tipo === 'bebidas' || tipo === '60') {
        return (
            <>
            <BaseLogo/>
            <MainUsuario grupoh={60} />
            <Footer/>
            </>
        );
    }
    else if (tipo === 'sucos' || tipo === '61') {
        return (
            <>
            <BaseLogo/>
            <MainUsuario grupoh={61} />
            <Footer/>
            </>
        );
    }
    else if (tipo === 'entradas' || tipo === '6615') {

        return (

            <>
            <BaseLogo/>
            <MainUsuario grupoh={6615} />
            <Footer/>
            </>
        );
    }
    else if (tipo === 'inicio' ) {

        return (

            <>
            <BaseLogo/>
            <MainUsuario grupoh={1001} />
            <Footer/>
            </>
        );
    }
    else {
        return (
            <div>
                <BaseLogo/>
                <h1>Error 400!</h1>
                <h2>{tipo}</h2>
                {/* restante do código */}
                <Footer/>
            </div>
        );
    }
}
export default CardapioDetail;