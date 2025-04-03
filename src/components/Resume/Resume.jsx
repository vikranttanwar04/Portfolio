import './Resume.css';
import Value from "../SubHero/Value.jsx";
import Para from "../SubHero/Paras.jsx";
import Card from './card.jsx';
import Footer from "../Footer/Footer.jsx";
import Bootstrap_logo from "/src/assets/Bootstrap_logo.svg.png";
import expressjs_logo from "/src/assets/expressjs.webp";
import materialUI_logo from "/src/assets/material-ui.svg";
import mongo_logo from "/src/assets/mongo.webp";
import mysql_logo from "/src/assets/mysql-logo.svg";
import nodejs_logo from "/src/assets/Node.js_logo.svg";
import react_logo from "/src/assets/react.svg";
import vikrantResume from "/src/assets/Vikrant Tanwar Resume.pdf"

export default function Resume(){
    return(
        <main>
            <header className='mb-4'>
                <h3>Resume</h3>
                <a href={vikrantResume} download>Download as PDF</a>
            </header>

            <div className="sec2">
                <Value heading="Vikrant." value="A passionate Web Developer with very good knowledge of MERN Stack. Eager to contribute for the development of a reputed organisation through my skills. I am Fresher though I have worked on few projects." />
                <Para heading="Behavior" value="My thinking and behavior come with a deep engagement, outcome-focused curiosity, pragmatism, and prestige-less collaboration. I have the ability to inspire and motivate others." />
                <Para heading="Strengths" value="One of my core strengths is my flexibility in being hands-on new techonologies. I have passion for understanding, motivating and translating user value into experiences that unlock stakeholers' desired business value." />
                <Para heading="Mindset" value="I have a solid ability ro help others succeed, make all people feel included, and bring value to the lives of others. I will bring you an outcome-focused mindset with a human-centered approach to achieving your goals through delightful user experiences." />
            </div><br /><br />

            <h4 className='ps-4'>Skills I have worked on as a <strong>MERN STACK DEVELOPER: </strong></h4>
            <div className="skills">
                <Card src={react_logo} title="React.js" alt="React.js" brief="Frontend Framework"/>
                <Card src={expressjs_logo} title="Express.js" alt="Express.js" brief="Js Framework for backend"/>
                <Card src={nodejs_logo} title="Node.js" alt="Node.js" brief="Runtime Environment" />
                <Card src={mongo_logo} title="MongoDB" alt="MongoDB" brief="Non Relational Database"/>
                <Card src={mysql_logo} title="mySQL" alt="mySQL" brief="Relational Database" />
                <Card src={Bootstrap_logo} title="Bootstrap" alt="Bootstrap" brief="Frontend Library"/>
                <Card src={materialUI_logo} title="Material UI" alt="Material UI" brief="Frontend Library"/>
            </div>

            <div className='px-4'>
                <Value heading="Passion." value="My work for reaching delightful experiences is a real passion. My thinking around products, services, and organizations is to bring purpose, pleasure, and meaning to everything we do. I always strive to create products and services that reach 'the sweet spot,' where businesses and users achieve significant value through our work." />
            </div>

            <Footer title="Portfolio" about="Take a look at the portfolio to learn more." btnText="Show Portfolio" link="/" />
        </main>
    )
}
