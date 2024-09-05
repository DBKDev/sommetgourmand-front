import React, { useState } from 'react';
import "../../Styles/Menu.css"
import Favoris from '../../Components/Favoris';
import Pates from "../../Components/Pates";
import Viandes from '../../Components/Viandes';
import Sandwichs from '../../Components/Sandwichs';
import Salades from '../../Components/Salades';
import Wraps from '../../Components/Wraps';
import Aperitifs from '../../Components/Aperitifs';
import Footer from "../../Components/Footer";

const Menu = () => {

    const [currentFiltre, setCurrentFiltre] = useState("Favoris du Sommet")
    return (
        <>
            {/* //! Block 1 */}
            <div className='menu-block1-img'>
                <img src={process.env.PUBLIC_URL + `/Assets/HeaderMenu.jpg`} />
                <img src={process.env.PUBLIC_URL + `/Assets/HeaderMenu2.jpg`} />
                <img src={process.env.PUBLIC_URL + `/Assets/HeaderMenu3.jpg`} />
            </div>
            {/* //! Fin Block 1 */}

            {/* //! Block 2 */}
            <div className='menu-block2-filtre'>
                <div className="block2-filtre">

                    <div className='block2-filtre-1'>
                        <p onClick={() => {
                            setCurrentFiltre("Favoris du Sommet")
                        }} className={currentFiltre === "Favoris du Sommet" && "activefiltre"}>Favoris du Sommet</p>

                        <p onClick={() => {
                            setCurrentFiltre("Pâtes du Sommet")
                        }} className={currentFiltre === "Pâtes du Sommet" && "activefiltre"}>Pâtes du Sommet</p>

                        <p onClick={() => {
                            setCurrentFiltre("Viandes du Sommet")
                        }} className={currentFiltre === "Viandes du Sommet" && "activefiltre"}>Viandes du Sommet</p>

                    </div>
                    <div className='block2-filtre-2'>
                        <p onClick={() => {
                            setCurrentFiltre("Sandwichs")

                        }} className={currentFiltre === "Sandwichs" && "activefiltre"}>Sandwichs</p>

                        <p onClick={() => {
                            setCurrentFiltre("Salades")
                        }} className={currentFiltre === "Salades" && "activefiltre"}>Salades</p>

                        <p onClick={() => {
                            setCurrentFiltre("Wraps")

                        }} className={currentFiltre === "Wraps" && "activefiltre"}>Wraps</p>

                        <p onClick={() => {
                            setCurrentFiltre("Apéritifs")
                        }} className={currentFiltre === "Apéritifs" && "activefiltre"}>Apéritifs</p>
                    </div>
                </div>
            </div>
            <div className='block2-plat'>
                {currentFiltre === "Favoris du Sommet" && <div><Favoris /></div>}
                {currentFiltre === "Pâtes du Sommet" && <div><Pates /></div>}
                {currentFiltre === "Viandes du Sommet" && <div><Viandes /></div>}
                {currentFiltre === "Sandwichs" && <div><Sandwichs /></div>}
                {currentFiltre === "Salades" && <div><Salades /></div>}
                {currentFiltre === "Wraps" && <div><Wraps /></div>}
                {currentFiltre === "Apéritifs" && <div><Aperitifs /></div>}
            </div>
            {/* //! Fin Block 2 */}
            {/* //! Block 3 */}

            <div className='menu-block3'>
                <div className='menu-block3-h1-desc'>
                    <h1>Menu Enfant</h1>
                    <div className='menu-block3-img-text'>
                        <img src={process.env.PUBLIC_URL + `/Assets/Enfant.jpg`} />
                        <div className='menu-block3-text'>
                            <span className='menu-block3-text1'>Tous les repas pour enfants<br />
                                comprennent des frites,<br />
                                une boisson de 33cl Dans une tasse<br />
                                pour enfants vraiment cool,<br />
                                et une coupe de glace à la vanille<br />
                                pour enfants pour <b className='menu-block3-text1-prix'>€12.50</b>
                            </span>
                            <p className='menu-block3-text2'>
                                1. Macaroni au Fromage<br />
                                2. Bâtonnet de Mozzarella<br />
                                3. Cheeseburger<br />
                                4. Pâtes à la sauce marinara &<br />
                                Boulettes de viande<br />
                                5. Tenders au Poulet<br />
                                6. Pizza à la mozzarella
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            {/* //! Fin Block 3 */}
            <Footer />

        </>

    );
}

export default Menu;