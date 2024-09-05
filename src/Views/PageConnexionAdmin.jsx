import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../Styles/ConnexionAdmin.css';
import connexionService from '../Services/ConnexionService';
import GlobalContext from '../Components/GlobalContext';
import ReCAPTCHA from 'react-google-recaptcha';
import { toast } from 'react-toastify';
import HeaderComponent from '../Components/Header';
import Footer from "../Components/Footer"
// 6LevAlopAAAAAL00ExkIDSl5FQ-Yj6pPW_9P7f1j



const PageConnexionAdmin = () => {

    const navigate = useNavigate();
    const { setUserEmail, setUser, user, userEmail } = useContext(GlobalContext);
    const [activebouton, setActivebouton] = useState(false);


    //! ReCaptcha : 
    const [capVal, setCapVal] = useState(null)
    //! Fin ReCaptcha 

    const DesactiveBouton = () => {
        setActivebouton(!activebouton)
    };

    const [connexion, setConnexion] = useState({
        emailco: "",
        passwordco: "",
    });
    const [modification, setModification] = useState({
        password: "",
        Verif_A: 1,
        Mail: user && user.Mail_A,
    });


    const handleChangeConn = (e) => {
        try {
            const { name, value } = e.currentTarget;
            setConnexion({ ...connexion, [name]: value });
        } catch (error) {

        }
    }
    const handleChangeModif = (e) => {
        try {
            const { name, value } = e.currentTarget;
            setModification({ ...modification, [name]: value });
            console.log(modification);
        } catch (error) {

        }
    }

    const handleModifyConn = async (e) => {
        e.preventDefault();
        try {
            const response = await connexionService.ChangeLogin(modification);
            setUserEmail(response.data.Mail_A);
            setUser(response.data);
            console.log('handlemodycon', response);
            // Store user data in localStorage on successful login
            localStorage.setItem('user', JSON.stringify(response.data));
            console.log(response);
            toast.success(`Modification réussi. Bienvenue !`);
        } catch (error) {
            console.log(error);
            toast.error('handleModifyConn');
        }
    };

    const handleConn = async (e) => {
        e.preventDefault();
        try {
            const response = await connexionService.AddConnexion(connexion);
            setUserEmail(response.data.userVerifA.Mail_A);
            setUser(response.data.userVerifA);
            console.log("boolean", response);
            // Store user data in localStorage on successful login
            localStorage.setItem('user', JSON.stringify(response.data.userVerifA));
            if (user.Verif_A === 0) {
                console.log('erreur');
            } else {
                toast.success(`Connexion réussie. Bienvenue !`);
                navigate('/admin/evenement');
            }
        } catch (error) {
            console.log(error);
            // window.location.reload()
            toast.error('Handlecon');
        }
    };

    const handleLastConn = async (e) => {
        e.preventDefault();
        try {
            const response = await connexionService.ModifyConnexion(connexion);
            setUserEmail(response.data.userVerifB.Mail_A);
            setUser(response.data.userVerifB);
            // Store user data in localStorage on successful login
            localStorage.setItem('user', JSON.stringify(response.data.userVerifB));
            toast.success(`Connexion réussie. Bienvenue !`);
            navigate('/admin/evenement');
        } catch (error) {
            console.log(error);
            window.location.reload()
            toast.error('Email ou mot de passe incorrect');
        }
    };

    useEffect(() => {
        const storedUser = localStorage.getItem('user');
        if (storedUser) {
            const parsedUser = JSON.parse(storedUser);
            // Check if parsedUser is truthy before accessing its properties
            if (parsedUser) {
                setUserEmail(parsedUser.user_email || '');
                setUser(parsedUser);
            }
        }
    }, [setUser, setUserEmail]);

    const errorHandler = () => {
        alert("Merci de vérifier votre connexion internet")
    }

console.log("utilisateur", user);
console.log("modification" ,modification);
console.log(userEmail);
    return (
        <>
            <div className='header-connection'>
                <HeaderComponent />
                <div className='Connexion-general'>

                    {/* //! Modification de mdp  */}

                    {user && user.Verif_A === 0 ? (
                        <div className='Formulaire-connexion'>
                            <div className='Interieur-formulaire'>
                                <h2>Modifications</h2>
                                <form>
                                    <label htmlFor="email">Mot de passe</label>
                                    <input type="password" id="password" name="password" value={modification.password} onChange={handleChangeModif} required />
                                    <button type="submit" onClick={handleModifyConn} >Modifier</button>
                                </form>
                            </div>
                        </div>
                    ) :
                        <div className='Formulaire-connexion'>
                            <div className='Interieur-formulaire'>
                                <h2>Connexion</h2>
                                <form>
                                    <label htmlFor="email">ADRESSE MAIL</label>
                                    <input type="email" id="email" name="emailco" value={connexion.emailco} onChange={handleChangeConn} required />

                                    <label htmlFor="password" >MOT DE PASSE</label>
                                    <input type="password" id="passwordco" name="passwordco" required value={connexion.passwordco} onChange={handleChangeConn} />
                                    {!activebouton ? (
                                        <button type="submit" onClick={(e) => {
                                            DesactiveBouton();
                                            handleConn(e);
                                        }} disabled={!capVal}>Se Connecter</button>
                                    ) : (
                                        <button type="submit" onClick={handleLastConn} disabled={!capVal}>Se Connecter</button>
                                    )}
                                    <div className='Form-captcha'>
                                        <ReCAPTCHA
                                            sitekey='6LeKDlopAAAAAGORDp52N4kVAATf9YX0RihbmTFa'
                                            onChange={(val) => setCapVal(val)}
                                            onErrored={errorHandler}
                                            size="normal"
                                            theme='dark'
                                        />
                                    </div>
                                </form>
                            </div>
                        </div>
                    }

                </div>
            </div >
            <Footer />

        </>
    );
}

export default PageConnexionAdmin;



