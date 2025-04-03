import './Footer.css';

export default function Footer({title, about, btnText, link}){
    return(
    <footer className='mt-4'>
        <div className='content'>
            <h2>{title}</h2>
            <p className='text-secondary'>{about}</p>
            <a className="resume-button" href={link}>{btnText}</a>
        </div>
    </footer>
    )
}