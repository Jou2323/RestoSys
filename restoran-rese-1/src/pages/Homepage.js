import { Link } from "react-router-dom";

    
export default function Homepage() {
    

    return(

        
        <body>
            
            <main class="page landing-page">
                <section class="clean-block clean-hero" style={{color: (9, 162, 255, 0.85)}}>
                    <div class="text">
                        <h2>Головна сторінка</h2>
                        <p>«Система підбору персоналу: представляємо нашу передову програму індивідуального підбору персоналу!»</p><Link class="btn btn-outline-light btn-lg" type="button" to="/Vacancy">Learn More</Link>
                    </div>
                </section>
                </main>
  
            
        </body>
        
  
    )
                                    
}
