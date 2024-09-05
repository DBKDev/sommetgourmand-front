import React, { useEffect, useState } from 'react';
import '../../Styles/Accueil.css'
import EvenementService from "../../Services/EvenementService"
import { format } from 'date-fns';
import Footer from "../../Components/Footer"
import { Link } from 'react-router-dom';

const Accueil = () => {

    const [evenement, setEvenement] = useState([]);

    const fetchEvenementlimited = async () => {
        try {
            const response = await EvenementService.getEvenementlimited();
            console.log(response);
            setEvenement(response.data.data);
            console.log(response.data.data);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        fetchEvenementlimited();
    }, [])


    return (
        <>
            <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'></link>
            <div className='Page-Accueil'>
                {/* //! Partie Header + Titre */}
                <div className='Header-blur'>
                    <div className='Header-blur-h1-text'>
                        <h1>Sommet <br /> Gourmand</h1>
                        <p>Du bœuf des alpages aux délices de gibier saisonniers,
                            notre <br />menu de viandes saura satisfaire les palais les plus exigeants. <br />
                            Rejoignez-nous à Sommet Gourmand pour une expérience <br /> gastronomique où la qualité de la viande rencontre l'élégance<br />montagnarde.</p>
                    </div>
                    <div className="Header-blur-boutons">
                    <Link to={"/menu"}><button className='Header-blur-Menu'>Menu</button></Link>
                    <Link to={"/contact"}><button className='Header-blur-Reserver'>Réserver une Table</button></Link>
                    </div>
                </div>
                <div className='Header-contenu'>
                    <img src={process.env.PUBLIC_URL + `/Assets/Header.jpg`} className='hd-img' />
                </div>
            </div>

            {/* //! Block 1 */}
            <div className='block1'>
                <div className="img-histoire">
                    <div className="block1-img">
                        <img src={process.env.PUBLIC_URL + `/Assets/IMG_4412.jpeg`} className='hd-img' />
                    </div>
                    <div className="block1-histoire">
                        <h2>Notre Histoire</h2>
                        <h3 className='block1-guillement1'>"</h3>
                        <p>Au cœur des montagnes, nous, une équipe <br /> passionnée dirigée par Benjamin,
                            avons réalisé notre <br /> rêve en ouvrant un restaurant unique à flanc de <br /> montagne.
                            Nous avons choisi un emplacement <br />idyllique offrant une vue imprenable, mariant ainsi la <br />fraîcheur des produits locaux à l'élégance de la <br />haute cuisine.
                            Avant tout, Benjamin avait à cœur de <br />créer une expérience culinaire exceptionnelle en <br />cuisinant au feu de bois,
                            et nous promouvions le <br />développement durable en nous approvisionnant <br />auprès des agriculteurs locaux.</p>
                        <h3 className='block1-guillement2'>"</h3>
                        <Link to={"/contact"}><button className='block1-bouton'>Réserver une Table</button></Link>
                    </div>
                </div>
            </div>
            {/* //! Fin de Block 1 */}

            {/* //! Block 2 */}
            <div className="block2">
                <div className="histoire-img">
                    <div className='block2-histoire'>
                        <h2>À propos de nous</h2>
                        <p>Découvrez "Sommet Gourmand" - un joyau<br /> culinaire perché au sommet des montagnes. Nos<br /> clients,
                            locaux et visiteurs, succombent à notre<br /> approche responsable et à l'authenticité de<br /> notre cuisine.
                            <br />
                            <br />
                            Imaginez des soirées étoilées, le parfum des <br />
                            conifères, et la chaleur d'un feu de cheminée<br />
                            créant une atmosphère magique. C'est bien plus<br />
                            qu'un repas, c'est une escapade culinaire<br /> inoubliable. Rejoignez-nous pour une<br /> expérience unique au "Sommet Gourmand" - la<br /> destination
                            incontournable pour les amateurs<br /> de bonne chère et les amoureux de la nature.
                        </p>
                        <Link to={"/histoire"}><button className='block2-bouton'>En savoir plus</button></Link>
                    </div>
                    <div className="block2-img">
                        <img src={process.env.PUBLIC_URL + `/Assets/Propos.jpg`} className='hd-img' />
                    </div>
                </div>
            </div>
            {/* //! Fin de Block 2  */}

            {/* //! Block 3  */}
            <div className='block3'>
                <div className='block3-titre'>
                    <h2>Venez une fois & nous vous reverrons !</h2>
                </div>
            </div>
            <div className='block3-lpv'>
                <div className='block3-localisation'>
                    <img src={process.env.PUBLIC_URL + `/Assets/point.png`} />
                    <h3>Localisation</h3>
                    <p>Nous, Sommet Gourmand, nous<br /> trouvons au cœur de la vallée de<br /> Chamonix-Mont-Blanc, dans les<br /> Alpes françaises.<br />
                        <br />
                        12 Rue des Sommets<br />
                        Chamonix-Mont-Blanc 74400<br />
                        Alpes françaises<br />
                    </p>
                </div>
                <div className='block3-trait'></div>
                <div className='block3-passion'>
                    <img src={process.env.PUBLIC_URL + `/Assets/medal.png`} />
                    <h3>Notre Passion</h3>
                    <p>Le Sommet Gourmand.<br />
                        Chaleureux, authentique<br />
                        et inoubliable.<br /><br />

                        Met l'accent sur une cuisine<br /> locale, chaleureuse et<br /> montagnarde.
                    </p>
                </div>
                <div className='block3-trait'></div>
                <div className='block3-valeur'>
                    <img src={process.env.PUBLIC_URL + `/Assets/fire.png`} />
                    <h3>Nos Valeurs</h3>
                    <p>Notre cuisine, axée sur la<br /> cuisson au feu de bois et<br /> l'utilisation de produits<br /> locaux,
                        offre des saveurs<br /> uniques qui capturent<br /> l'authenticité, célébrant ainsi<br /> la simplicité et la<br /> communauté locale.
                    </p>
                </div>
            </div>
            {/* //! Block 3 Fin */}

            {/* //! Block 4 */}
            <div className='block4'>
                <div className='block4-titre'>
                    <h2>événements Privés</h2>
                </div>
            </div>
            <div className='block4-prive'>
                <div className='block4-img-img'>
                    <img src={process.env.PUBLIC_URL + `/Assets/Eventprivate1.jpg`} className='block4-accueil-img1' />
                    <img src={process.env.PUBLIC_URL + `/Assets/Eventprivate2.jpg`} className='block4-accueil-img2'/>
                    <div className='block4-blur'>
                        <p className='block4-blur-titre'>Organisez votre prochain <br />événement au <br />Sommet Gourmand</p>
                        <p className='block4-blur-text'>Nous pouvons accueillir des groupes de presque<br /> toutes tailles. Petit Déjeuner, Buffet ou Dîner<br /> Complet Assis</p>
                        <div className='block4-evenement-cat1'>
                            <p><i class='bx bxs-star'></i>Fêtes d'anniversaires <br />
                                <i class='bx bxs-star'></i>Fêtes de remise des diplômes <br />
                                <i class='bx bxs-star'></i>Fête de Vacances<br />
                                <br />
                                <i class='bx bxs-star'></i>Anniversaires<br />
                                <i class='bx bxs-star'></i>Fête Prénatale & Nuptiale <br />
                                <i class='bx bxs-star'></i>Réunion de Travail<br />
                                <br />
                                <i class='bx bxs-star'></i>Dîners de Répétition<br />
                                <i class='bx bxs-star'></i>Repas de Départ à la Retraite <br />
                                <i class='bx bxs-star'></i>Banquets Sportifs</p>
                        </div>
                        <Link to={"/contact"}><button className='block4-bouton'>Réserver une Date</button></Link>
                    </div>
                </div>
            </div>
            {/* //! Block 4 Fin*/}

            {/* //! Block 5 */}
            <div className='block5-even-img-text'>
                <h2>évenements à Venir</h2>
                <div className='block5-img-desc'>
                    <div className='block5-img'>
                        {evenement.map((event) => {
                            return (
                                <div className="block5-card-eve">
                                    <img src={process.env.PUBLIC_URL + `/Assets/evenement/${event.Image_E.replace(/^.*[\\\/]/, '')}`} className='db-img-event' alt="" />
                                </div>
                            )
                        })}
                    </div>
                    <div>
                        {evenement.map((event) => {
                            return (
                                <div className='block5-description'>
                                    <p className='block5-description-titre'>{event.Nom_E}</p>
                                    <pre className='block5-description-text'>{event.Description_E}</pre>
                                </div>
                            )
                        })}
                        <div className='block5-date-heure'>
                            {evenement.map((event) => {
                                return (
                                    <div>
                                        <p className='block5-date'>{format(new Date(event.Date_E), 'dd/MM/yyyy')}</p>
                                        <div className='block5-hdebut-fin'>
                                            <p className='block5-heured'>{format(new Date(`2024-01-01T${event.Hdebut_E}`), 'HH:mm')}</p>
                                            <p>-</p>
                                            <p className='block5-heuref'>{format(new Date(`2024-01-01T${event.Hfin_E}`), 'HH:mm')}</p>
                                        </div>
                                    </div>
                                )
                            })}
                            <div>
                            <Link to={"/evenement"}><button className='block5-bouton'>Voir plus de Dates</button></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* //! Block 5 Fin */}
            <div className='block6-footer'>
                <Footer />
            </div>
        </>
    );
}

export default Accueil;