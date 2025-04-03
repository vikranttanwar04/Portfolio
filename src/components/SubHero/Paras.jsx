// import './Paras.css';

export default function Para({heading, value}){
    return(
        <div className="para-box mb-4">
            <h2>{heading}</h2>
            <h3 className='text-muted'>{value}</h3>
        </div>
    )
}