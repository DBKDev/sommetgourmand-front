import React, { useEffect, useState } from 'react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import EvenementService from "../../Services/EvenementService";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import '../../Styles/Evenement.css'
import { format } from 'date-fns';
import { Link } from 'react-router-dom';
import Footer from '../../Components/Footer';

const Evenement = () => {
    const [evenement, setEvenement] = useState([]);

    const fetchEvenement = async () => {
        try {
            const response = await EvenementService.getEvenement();
            console.log(response);
            setEvenement(response.data.data);
            console.log(response.data.data);
        } catch (error) {
            console.log(error);
        }
    }


    useEffect(() => {
        fetchEvenement();
    }, [])
    return (
        <>
            <div className='block1-evenement'>
                <h1>événements à venir</h1>
            </div>
            <div className='evenement-slider'>
                <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                    {evenement.map((event, index) => (
                        <SwiperSlide key={index}>
                            <div className="block1-evenement-carte">
                                <img src={process.env.PUBLIC_URL + `/Assets/evenement/${event.Image_E.replace(/^.*[\\\/]/, '')}`} alt="" />
                                <div>
                                    <div className='block1-evenement-description'>
                                        <p className='block1-evenement-description-titre'>{event.Nom_E}</p>
                                        <pre className='block1-evenement-description-text'>{event.Description_E}</pre>
                                    </div>
                                    <div className='block1-evenement-date-heure'>
                                        <p className='block1-evenement-date'>{format(new Date(event.Date_E), 'dd/MM/yyyy')}</p>
                                        <div className='block1-evenement-heure'>
                                            <p>{format(new Date(`2024-01-01T${event.Hdebut_E}`), 'HH:mm')}</p>
                                            <p>-</p>
                                            <p>{format(new Date(`2024-01-01T${event.Hfin_E}`), 'HH:mm')}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
                <div className='block2-evenement'>
                    <p>
                        Pour toute demande d'organisation d'événements ou de<br />
                        collaborations, veuillez nous contacter en utilisant la page  <Link to={"/contact"}><b>Contact</b></Link><br />
                        sur notre site web. Nous sommes impatients de discuter avec vous et<br />
                        de créer ensemble des moments mémorables. Merci de votre intérêt<br />
                        et à bientôt !
                    </p>
                </div>
                <Footer />
            </div>



        </>
    );

}

export default Evenement;