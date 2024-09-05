import React from 'react';
import '../../Styles/Histoire.css'
import Footer from "../../Components/Footer"

const Histoire = () => {
    return ( 
        <>
        <div className='block1-hisoire'>
            <h1>Notre Histoire</h1>
        </div>
        <div className='block2-text'>
            <div className='block2-guillement1'>
                <p>"</p>
            </div>
            <div>
                <p className='block2-desc'>Au cœur des montagnes, Benjamin, un chef passionné, réalisa son rêve en<br /> ouvrant 
                    un restaurant unique à flanc de montagne. Il choisit un<br /> emplacement idyllique offrant une vue imprenable, 
                    mariant ainsi la<br /> fraîcheur des produits locaux à l'élégance de la haute cuisine. Son but était<br /> de créer une expérience culinaire
                     exceptionnelle, tout en promouvant le<br /> développement durable en s'approvisionnant auprès des agriculteurs<br /> locaux. Le restaurant devint 
                     rapidement un lieu de rassemblement, où l'on<br /> pouvait savourer des plats exquis tout en profitant de la beauté paisible<br /> des montagnes. 
                     Les habitants et les visiteurs furent conquis par cette<br /> approche responsable et l'authenticité de sa cuisine. Les soirées étoilées, le<br /> parfum des conifères, 
                     et la chaleur du feu de cheminée créèrent une<br /> atmosphère magique, faisant du restaurant de Benjamin une destination<br /> incontournable.</p>
            </div>
            <div className='block2-guillement2'>
                <p>"</p>
            </div>

        </div>
        <Footer />
        </>
     );
}
 
export default Histoire;