import { useParams } from 'react-router-dom';
import MainUsuario from './MainUsuario';
import BaseLogo from './BaseLogo';
import Footer from './Footer';


function CardapioDetail({api}) {
    const { tipo } = useParams();
    if (tipo === 'cardapio') {
        return (
            <>
            <BaseLogo api={api()}/>
                <MainUsuario api={api} grupoh={0} />
            <Footer/>
            </>
        );
    } else if (tipo === 'principal') {
        return (
            <>
            <BaseLogo api={api()}/>
            <MainUsuario api={api}  grupoh={1} />
            <Footer/>
            </>
        );
    } else if (tipo === 'executivo' || tipo === '10') {

        return (

            <>
            <BaseLogo api={api()}/>
            <MainUsuario api={api}  grupoh={10} />
            <Footer/>
            </>
        );
    }
    
    else if (tipo === 'jackribs' || tipo === '12') {
        return (
            <>
            <BaseLogo api={api()}/>
            <MainUsuario api={api}  grupoh={12} />
            <Footer/>
            </>
        );
    }
        
    else if (tipo === 'bebidas' || tipo === '60') {
        return (
            <>
            <BaseLogo api={api()}/>
            <MainUsuario api={api}  grupoh={60} />
            <Footer/>
            </>
        );
    }
    else if (tipo === 'sucos' || tipo === '61') {
        return (
            <>
            <BaseLogo api={api()}/>
            <MainUsuario api={api}  grupoh={61} />
            <Footer/>
            </>
        );
    }
    else if (tipo === 'entradas' || tipo === '6615') {

        return (

            <>
            <BaseLogo api={api()}/>
            <MainUsuario api={api}  grupoh={6615} />
            <Footer/>
            </>
        );
    }
    else if (tipo === 'inicio' ) {

        return (

            <>
            <BaseLogo api={api()}/>
            <MainUsuario api={api}  grupoh={1001} />
            <Footer/>
            </>
        );
    }
    else {
        return (
            <div>
                <BaseLogo api={api()}/>
                <h1>Error 400!</h1>
                <h2>{tipo}</h2>
                {/* restante do código */}
                <Footer/>
            </div>
        );
    }
}
export default CardapioDetail;