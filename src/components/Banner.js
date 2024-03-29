import React from "react";
import SlidePromo from './SlidePromo';

function Banner( api ) {
    return (
        <div style={{ backgroundColor: "black", color: "white", height: '120vh', backgroundSize: 'cover', backgroundImage: 'linear-gradient(black,black, red)' }}>
            <SlidePromo api={api} />
        </div>
    );
}

export default Banner;
