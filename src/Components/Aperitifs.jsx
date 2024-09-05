import React, { useEffect, useState } from 'react';
import MenuService from "../Services/MenuService"
import '../Styles/Carte-Menu.css' 

const Apperitifs = () => {

    const [aperitifs, setAperitifs] = useState([]);

    const fetchAperitifs = async () => {
        try {
            const response = await MenuService.getAperitifs();
            console.log(response);
            setAperitifs(response.data.data);
            console.log(response.data.data);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        fetchAperitifs();
    }, [])

    return (
        <>
            <div className='arriere-plan-carte'>
                {aperitifs.map((aperi) => {
                    return (
                        <div className="carte-menu">
                            <div className='carte-menu-titre-coeur'>
                                <p className='carte-menu-titre'>{aperi.Nom_P}</p>                                
                            </div>
                            <div className='carte-menu-img'>
                                <img src={process.env.PUBLIC_URL + `/Assets/Menu/${aperi.Image_P.replace(/^.*[\\\/]/, '')}`} />
                            </div>
                            <div className='carte-menu-description'>
                                <p>{aperi.Description_P}</p>
                            </div>
                            <div className='carte-menu-prix-total'>
                                <p className='carte-menu-total'>Prix Total</p>
                                <p className='carte-menu-prix'>€{aperi.Prix_P}</p>
                            </div>
                        </div>
                    )
                })}

            </div >
        </>
    );
}

export default Apperitifs;