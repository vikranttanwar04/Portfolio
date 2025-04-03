import './Education.css';

export default function Education({title, course, year}){
    return(
        <div className="edu-card mx-4 px-4 py-2 mb-4">
            <h4>{title}</h4>
            <p className='m-0'>{course}</p>
            <p className='mb-2'>({year})</p>
        </div>
    )
}