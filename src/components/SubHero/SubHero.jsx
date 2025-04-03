import Value from "./Value";
import Para from "./Paras";
import './SubHero.css';

export default function SubHero(){
    return(
        <section className="sec2" id="sec2">
            <Value heading="Value in the lives of others." value="I'm driven by a desire to improve the lives of others. My passion lies in enhancing user experiences and leading projects towards positive outcomes. I believe in a human-centered approach that unloacks business value by providing genuine customer value." />
            <Para heading="Work" value="I am a web developer who uses web tools to effectively communicate ideas and desired outcomes to achive a shared understanding. Collaboration is key to my work, and I am an active listener who works disciplines to achieve the best possible outcome." />
            <Para heading="Strategy" value="Website is a vital business tool that allows us to proactively and continually learn about our users' behavior, needs, and expectations. I strongly believe that when we becomes an expert on our users, it puts us in a better position to set a direction and follow our vision together, and achieving a strategic advantage." />
            <Para heading="Leadership" value="I am commited to helping others succeed by creating a collaborative work environment and empowering my team members to reach their full potential. When we encourage and help our peers grow, they will follow and contribute at their best." />
        </section>
    )
}