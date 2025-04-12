import './Hero.css';
import { Link } from 'react-router-dom';
import Image from "../ImageComp/Image";

export default function Hero(){
    return(
        <section id="sec1">
                <Image />
                <div className="about text-center">
                    <h1>I'm Vikrant Tanwar.</h1>
                    <p>A Full Stack Developer</p>
                    <p>This portfolio showcases my web skills, methods, and outcomes in crafting exceptional user experiences.</p>
                </div>
                <Link className="button" to="/work">Show work</Link><br />
                <a  className="arrow" href="#sec2"><i class="fa-solid fa-arrow-down"></i></a>
        </section>
    )
}
