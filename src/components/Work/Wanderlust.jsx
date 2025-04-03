import Features from './Features';
import './Wanderlust.css';
import Footer from '../Footer/Footer';

export default function Work(){
    return(
        <div>
            <section className="work-hero p-4 mb-4">
                <h1>A tour, trip and hotel booking app.</h1><br />
                <h5>WanderLust</h5>
                <p>Clone of Airbnb</p>

                <h2>My role</h2>
                <p>This was my first major project of Web Development I learned a lot through it. As it was my personal project, I did it myself though I took some help from my tutors somewhere. And I enjoyed and learned from this project journey a lot.</p><br />

                <a className="button" href="https://airbnb-7wjs.onrender.com/listing">Visit the Website</a><br />
            </section>

            <h4 className='ps-4 mb-0'>Key Features of <strong>WanderLust: </strong></h4>
            <div className="skills">
                <Features feature="Authentication & Authorization" f1="Login & Signup" f2="Using Passport" />
                <Features feature="Server Side Validation" f1="Data is valid or not" f2="Using Joi" />
                <Features feature="Database" f1="Storing user data, comments, review etc." f2="CRUD Operations Can be performed" />
                <Features feature="Google Map" f1="Shows Location of Each Listing on Google map" f2="Using Mapbox" />
                <Features feature="Alerts" f1="Show Flash Massege on CRUD Operations" f2="Using Bootstrap" />
            </div>

            <Footer title="Resume" about="Read more about my experience." btnText="Show resume" link="/resume" />
        </div>
    )
}