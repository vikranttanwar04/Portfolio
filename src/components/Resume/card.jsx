import './card.css';

export default function Card({src, alt, title, brief}){
    return(
        <div className="skill-card">
            <img src={src} alt={alt} />
            <h5>{title}</h5>
            <p className='m-0'>{brief}</p>
        </div>
    )
}