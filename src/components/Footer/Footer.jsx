import { Link } from 'react-router-dom';
import './Footer.css';

export default function Footer({title, about, btnText, link}){
    return(
    <footer className='mt-4'>
        <div className='content'>
            <h2>{title}</h2>
            <p className='text-secondary'>{about}</p>
            <Link className="resume-button" to={link}>{btnText}</Link>
        </div>
    </footer>
    )
}
