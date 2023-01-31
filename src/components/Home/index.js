import { Link } from 'react-router-dom'
import JacobFace from '../../assets/images/JACOBFACE.png';
import './index.scss';

const Home = () => {

    return(
        <div className = "container home-page">
            <div className = "text-zone">
                <h1>Hi, <br /> I'm
                <img src = {JacobFace} alt = "developer" />
                lobodan
                <br />
                web developer
                </h1>
                <h2> Student at the University of Waterloo studying Software Engineering</h2>
                <Link to = "/contact" className = 'flat-button'>CONTACT ME</Link>
            </div>
        </div>
    );
}

export default Home