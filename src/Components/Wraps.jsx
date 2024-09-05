import React, { useEffect, useState } from 'react';
import MenuService from "../Services/MenuService"
import '../Styles/Carte-Menu.css' 

const Wraps = () => {

    const [wraps, setWraps] = useState([]);

    const fetchWraps = async () => {
        try {
            const response = await MenuService.getWraps();
            console.log(response);
            setWraps(response.data.data);
            console.log(response.data.data);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        fetchWraps();
    }, [])

    return (
        <>
            <div className='arriere-plan-carte'>
                {wraps.map((wrap) => {
                    return (
                        <div className="carte-menu">
                            <div className='carte-menu-titre-coeur'>
                                <p className='carte-menu-titre'>{wrap.Nom_P}</p>                                
                            </div>
                            <div className='carte-menu-img'>
                                <img src={process.env.PUBLIC_URL + `/Assets/Menu/${wrap.Image_P.replace(/^.*[\\\/]/, '')}`} />
                            </div>
                            <div className='carte-menu-description'>
                                <p>{wrap.Description_P}</p>
                            </div>
                            <div className='carte-menu-prix-total'>
                                <p className='carte-menu-total'>Prix Total</p>
                                <p className='carte-menu-prix'>€{wrap.Prix_P}</p>
                            </div>
                        </div>
                    )
                })}

            </div >
        </>
    );
}

export default Wraps;