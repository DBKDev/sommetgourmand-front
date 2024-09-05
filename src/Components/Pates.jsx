import React, { useEffect, useState } from 'react';
import MenuService from "../Services/MenuService"
import '../Styles/Carte-Menu.css'

const Pates = () => {

    const [pates, setPates] = useState([]);

    const fetchPates = async () => {
        try {
            const response = await MenuService.getPâtes();
            console.log(response);
            setPates(response.data.data);
            console.log(response.data.data);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        fetchPates();
    }, [])

    return (
        <>
            <div className='arriere-plan-carte'>
                {pates.map((pat) => {
                    return (
                        <div className="carte-menu">
                            <div className='carte-menu-titre-coeur'>
                                <p className='carte-menu-titre'>{pat.Nom_P}</p>                                
                            </div>
                            <div className='carte-menu-img'>
                                <img src={process.env.PUBLIC_URL + `/Assets/Menu/${pat.Image_P.replace(/^.*[\\\/]/, '')}`} />
                            </div>
                            <div className='carte-menu-description'>
                                <p>{pat.Description_P}</p>
                            </div>
                            <div className='carte-menu-prix-total'>
                                <p className='carte-menu-total'>Prix Total</p>
                                <p className='carte-menu-prix'>€{pat.Prix_P}</p>
                            </div>
                        </div>
                    )
                })}

            </div >
        </>
    );
}

export default Pates;