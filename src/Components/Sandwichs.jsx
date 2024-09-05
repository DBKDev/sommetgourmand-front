import React, { useEffect, useState } from 'react';
import MenuService from "../Services/MenuService"
import '../Styles/Carte-Menu.css' 

const Sandwichs = () => {

    const [sandwichs, setSandwichs] = useState([]);

    const fetchSandwichs = async () => {
        try {
            const response = await MenuService.getSandiwchs();
            console.log(response);
            setSandwichs(response.data.data);
            console.log(response.data.data);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        fetchSandwichs();
    }, [])

    return (
        <>
            <div className='arriere-plan-carte'>
                {sandwichs.map((sand) => {
                    return (
                        <div className="carte-menu">
                            <div className='carte-menu-titre-coeur'>
                                <p className='carte-menu-titre'>{sand.Nom_P}</p>                                
                            </div>
                            <div className='carte-menu-img'>
                                <img src={process.env.PUBLIC_URL + `/Assets/Menu/${sand.Image_P.replace(/^.*[\\\/]/, '')}`} />
                            </div>
                            <div className='carte-menu-description'>
                                <p>{sand.Description_P}</p>
                            </div>
                            <div className='carte-menu-prix-total'>
                                <p className='carte-menu-total'>Prix Total</p>
                                <p className='carte-menu-prix'>€{sand.Prix_P}</p>
                            </div>
                        </div>
                    )
                })}

            </div >
        </>
    );
}

export default Sandwichs;