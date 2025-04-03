import './Hero.css';
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
                <a className="button" href="/work">Show work</a><br />
                <a  className="arrow" href="#sec2"><i class="fa-solid fa-arrow-down"></i></a>
        </section>
    )
}