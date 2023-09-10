import About from "./About";
import Portfilio from "./Portfilio";
import Services from "./Services";
import { Link } from "react-router-dom";

const Home = () => {
    return (<>
        <div className="mainImage text-white">
            <div className='mainHeading'>
                <h1 className='fname '>ADITYA</h1><br /><h1 className='lname'>PAWAR</h1>
                <p className='subHeading'>Frontend and Backend Developer</p>
                <button className='headingButton '>
                    <Link to="/about" className="nav-link text-white  ">Explore Now</Link>
                </button>
                <p className='links '>Follow Us :<span>
                    <a href="https://github.com/adityaPawar1999" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-github text-white golden-text"></i>
                    </a>
                    <a href="https://www.linkedin.com/in/aditya-pawar-857247216/" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-linkedin-in text-white golden-text"></i>
                    </a>
                    <a href="https://instagram.com/adityapawa.r?igshid=NTc4MTIwNjQ2YQ==" target="_blank" rel="noopener noreferrer">
                        <i className="fa-brands fa-instagram text-white golden-text"></i>
                    </a>
                </span>
                </p>
            </div>
        </div>
        <About />
        <Services />
        <Portfilio />
    </>
    )
}
export default Home;