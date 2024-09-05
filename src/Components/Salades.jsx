import React, { useEffect, useState } from 'react';
import MenuService from "../Services/MenuService"
import '../Styles/Carte-Menu.css' 

const Salades = () => {

    const [salades, setSalades] = useState([]);

    const fetchSalades = async () => {
        try {
            const response = await MenuService.getSalades();
            console.log(response);
            setSalades(response.data.data);
            console.log(response.data.data);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        fetchSalades();
    }, [])

    return (
        <>
            <div className='arriere-plan-carte'>
                {salades.map((sala) => {
                    return (
                        <div className="carte-menu">
                            <div className='carte-menu-titre-coeur'>
                                <p className='carte-menu-titre'>{sala.Nom_P}</p>                                
                            </div>
                            <div className='carte-menu-img'>
                                <img src={process.env.PUBLIC_URL + `/Assets/Menu/${sala.Image_P.replace(/^.*[\\\/]/, '')}`} />
                            </div>
                            <div className='carte-menu-description'>
                                <p>{sala.Description_P}</p>
                            </div>
                            <div className='carte-menu-prix-total'>
                                <p className='carte-menu-total'>Prix Total</p>
                                <p className='carte-menu-prix'>€{sala.Prix_P}</p>
                            </div>
                        </div>
                    )
                })}

            </div >
        </>
    );
}

export default Salades;