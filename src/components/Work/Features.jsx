import './Features.css';

export default function Features({feature, f1, f2}){
    return(
        <div id="project-features">
            <h5>{feature}</h5>
            <ul>
                <li>{f1}</li>
                <li>{f2}</li>
            </ul>
        </div>
    )
}