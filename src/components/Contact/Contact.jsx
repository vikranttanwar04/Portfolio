import Footer from '../Footer/Footer';
import './contact.css';


export default function Contact(){
    return(
        <div id='contact-body'>
            <header className='mb-4'>
                <h3 className='text-light'>Contact</h3>
                <a className='text-light' href="https://www.linkedin.com/in/vikranttanwarrajput">Connect on Linkedin</a>
            </header>

            <div>
                <h2 className='text-light text-center'>Get in touch.</h2>
                <form method="post" action='https://formsubmit.co/vikranttanwar124108@gmail.com'>
                    <div className='row input-boxes'>
                        <input className="p-2 me-1 mb-2 col-2 offset-4" type="text" placeholder="Name" name="name" required/>
                        <input className="p-2 mb-2 col-2" type="email" placeholder="Email" name="email" required/>
                    </div>

                    <div className='msg-box row'>
                        <textarea className="p-2 mb-2 col-4 offset-4" rows="5" cols="44" placeholder="Message" name="msg" required/><br />
                    </div>
                    <div className='row'>
                        <button type="Submit" className='send-btn p-2 col-4 offset-4'>Send</button>
                    </div>
                </form>
            </div>

            <Footer title="Resume" about="Read about my full story in the resume." btnText="Dowload Resume" link="/src/assets/Vikrant Tanwar Resume.pdf" />
        </div>
    )
}