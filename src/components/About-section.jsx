// import image from "../assets/images/about-img.webp";

export default function AboutSection(){
    return <>
        <section className="section-spacing about-section">
            <div className="container">
                <div className="row">

                <div className="col-6">
                    <div>
                        {/* <img src={image} alt="About NASA" className="img-fluid" /> */}
                    </div>
                </div>

                <div className="col-6">
                        <h2>About NASA</h2>
                        <p>NASA.gov brings you the latest news, images and videos from America's space agency, pioneering the future in space exploration, scientific discovery and aeronautics research. </p>
                        <p>Explore the universe and discover our home planet with the latest NASA science news. Get NASA updates on NASA missions, watch NASA TV live, and learn about our quest to reveal the unknown and benefit all humankind.</p>
                    <button className="btn btn-primary">Learn More</button>
                </div>    
            </div>
            </div>
            
             <div className="container">
                <div className="row">
                <div className="col-6">
                    <div>
                        {/* <img src={image} alt="About NASA" className="img-fluid" /> */}
                    </div>
                </div>

                <div className="col-6">
                        <h2>About NASA</h2>
                        <p>NASA.gov brings you the latest news, images and videos from America's space agency, pioneering the future in space exploration, scientific discovery and aeronautics research. </p>
                        <p>Explore the universe and discover our home planet with the latest NASA science news. Get NASA updates on NASA missions, watch NASA TV live, and learn about our quest to reveal the unknown and benefit all humankind.</p>
                    <button className="btn btn-primary">Learn More</button>
                
                </div>
            </div>
            </div>
        </section>
    </>
}