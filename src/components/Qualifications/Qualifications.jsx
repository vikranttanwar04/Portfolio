import Value from '../SubHero/Value';
import Para from '../SubHero/Paras';
import Education from './Education';
import Footer from '../Footer/Footer'

export default function(){
    return(
        <div>
            <header className='mb-4'>
                <h3>Qualifications</h3>
            </header>
            <section className="sec2">
                        <Value heading="Background." value="I was born in Haryana, India. I had intrests in computers since my childhood. When I was in my 11th standards I take Computer Science seriously and had a vision to build my career in Tech Field. So After my 12th, I took BCA to explore more about new technologies and for deep knowledge. I did Web development from 'Apna college' institute and then worked on projects along with my Bachelors. Then I wanted to explore more deeply about tech, so I went for Masters and currently pursuing it. Now I want to contribute for a reputed organisation through my knowledge." />
                        <Para heading="Passion" value="My work for reaching delightful experiences is a real passion. My thinking around products, services, and organizations is to bring purpose, pleasure, and meaning to everything we do. I always strive to create products and services that reach 'the sweet spot,' where businesses and users achieve significant value through our work." />
                        <Para heading="Experience" value="I have worked on few projects though I haven't worked for any organisation yet. But I'm eager to contribute through my skills." />
            </section>

            <h3 className='ps-4'>Education and languages.</h3>
            <section className='education'>
                <Education title="Schooling" course="12th : Government Sr. Sec. School, Karola (Gurgaon)" year="2021" />
                <Education title="Undergraduation" course="BCA: Government PG College Sector-9 (Gurgoan)" year="2021 - 2024" />
                <Education title="Postgraduation" course="MCA: Sanskaram University, Kheri Taluka Patauda (Jhajjar)" year="2024 - Present" />
            </section>

            <h3 className='ps-4'>Certifications : </h3>
            <section>
                <Education title="Web Development" course="Apna College Institute" year="November 2023 - May 2024" />
                <Education title="Conquering Responsive Layouts" course="Kevin Powell" year="June 2024" />
            </section>

            <Footer title="Resume" about="Read more about my experience." btnText="Show resume" link="/resume" />

        </div>
    )
}