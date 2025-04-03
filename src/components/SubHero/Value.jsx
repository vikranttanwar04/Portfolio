import './Value.css';

export default function Value({heading, value}){
    return(
        <div className="value-box">
            <h3>{heading}</h3>
            <h4 className='text-muted'>{value}</h4>
        </div>
    )
}