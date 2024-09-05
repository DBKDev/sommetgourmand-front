import React, { useEffect, useState } from 'react';
import MenuService from "../Services/MenuService"
import '../Styles/Carte-Menu-Favoris.css'

const Favoris = () => {

    const [favoris, setFavoris] = useState([]);

    const fetchFavoris = async () => {
        try {
            const response = await MenuService.getFavoris();
            console.log(response);
            setFavoris(response.data.data);
            console.log(response.data.data);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        fetchFavoris();
    }, [])

    return (
        <>
            <div className='arriere-plan-carte'>
                {favoris.map((fav) => {
                    return (
                        <div className="carte-menu">
                            <div className='carte-menu-titre-coeur'>
                                <p className='carte-menu-titre'>{fav.Nom_P}</p>
                                <div className='arriere-plan-coeur'>
                                    <img src={process.env.PUBLIC_URL + `/Assets/coeur.png`} className='carte-menu-coeur' />
                                </div>
                            </div>
                            <div className='carte-menu-img'>
                                <img src={process.env.PUBLIC_URL + `/Assets/Menu/${fav.Image_P.replace(/^.*[\\\/]/, '')}`} />
                            </div>
                            <div className='carte-menu-description'>
                                <p>{fav.Description_P}</p>
                            </div>
                            <div className='carte-menu-prix-total'>
                                <p className='carte-menu-total'>Prix Total</p>
                                <p className='carte-menu-prix'>€{fav.Prix_P}</p>
                            </div>
                        </div>
                    )
                })}

            </div >
        </>

    );
}

export default Favoris;